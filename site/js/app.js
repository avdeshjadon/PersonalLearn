const listEl = document.getElementById('list');
const articleEl = document.getElementById('article');
const pageTitle = document.getElementById('page-title');
const searchInput = document.getElementById('search');
const prevLinkEl = document.getElementById('prevLink');
const nextLinkEl = document.getElementById('nextLink');
const darkToggle = document.getElementById('darkToggle');
const menuToggle = document.getElementById('menuToggle');

let manifest = [];
let ordered = [];
let chartsToRender = [];
let structure = [];
let currentIndex = -1;

function renderMarkdown(text, options){
  try{
    if(typeof marked === 'function') return marked(text, options);
    if(marked && typeof marked.parse === 'function') return marked.parse(text, options);
    if(marked && marked.default && typeof marked.default.parse === 'function') return marked.default.parse(text, options);
  }catch(e){ /* fallthrough */ }
  return '<pre>'+String(text).replace(/</g,'&lt;')+'</pre>';
}

function cleanTitle(title){
  if(!title) return '';
  return title.replace(/^\s*\(?\d{1,3}\)?\s*[\)\.-]?\s*/,'').trim();
}

function getNumberFromSlug(slug){
  const m = slug.match(/^0*([0-9]{1,3})/);
  return m ? parseInt(m[1],10) : null;
}

function buildOrdered(){
  ordered = manifest.slice().sort((a,b)=>{
    const na = getNumberFromSlug(a.slug);
    const nb = getNumberFromSlug(b.slug);
    if(na != null && nb != null) return na - nb;
    if(na != null) return -1;
    if(nb != null) return 1;
    return a.title.localeCompare(b.title);
  });
}

function findByNumber(num){
  return manifest.find(m=>getNumberFromSlug(m.slug)===num);
}

function clearChildren(el){ while(el.firstChild) el.removeChild(el.firstChild); }

function renderGroupedSidebar(){
  clearChildren(listEl);
  structure.forEach((group, gidx)=>{
    const g = document.createElement('div'); g.className='group';
    const h = document.createElement('h4'); h.textContent = group.group;
    const ul = document.createElement('ul');
    ul.className = 'group-list collapsed';
    ul.dataset.group = String(gidx);
    // clicking a group header collapses all others and toggles this one
    h.addEventListener('click', ()=>{
      document.querySelectorAll('.group-list').forEach(u=>u.classList.add('collapsed'));
      ul.classList.toggle('collapsed');
    });
    group.items.forEach(item=>{
      let num=null, children=null;
      if(typeof item === 'number') num = item;
      else if(typeof item === 'object' && item.num){ num = item.num; children = item.children || null; }

      const li = document.createElement('li');
      const found = findByNumber(num);
      const a = document.createElement('a');
      a.href = found ? '#'+found.slug : '#';
      a.className = 'topic-link';
      a.textContent = (found ? (getNumberFromSlug(found.slug) + ') ' + cleanTitle(found.title)) : (num + ') Missing'));
      if(found){
        a.dataset.group = String(gidx);
        a.addEventListener('click', (e)=>{ e.preventDefault(); showNote(found.slug); history.pushState({slug:found.slug}, '', '#'+found.slug);
          // expand this group when clicked
          document.querySelectorAll('.group-list').forEach(u=>u.classList.add('collapsed'));
          const my = document.querySelector(`.group-list[data-group="${gidx}"]`);
          if(my) my.classList.remove('collapsed');
        });
      } else {
        a.style.opacity = '.5';
      }
      li.appendChild(a);
      if(children && children.length){
        const sub = document.createElement('div'); sub.className='subitems';
        children.forEach(c=>{ const d = document.createElement('div'); d.textContent = '• ' + c; sub.appendChild(d); });
        li.appendChild(sub);
      }
      ul.appendChild(li);
    });
    g.appendChild(h); g.appendChild(ul); listEl.appendChild(g);
  });
}

function highlightActive(slug){
  document.querySelectorAll('.topic-link').forEach(el=>el.classList.remove('active'));
  const el = document.querySelector(`.topic-link[href='#${slug}']`);
  if(el) el.classList.add('active');
}

function updateNavLinks(){
  if(currentIndex > 0){
    const prev = ordered[currentIndex-1];
    prevLinkEl.style.visibility = 'visible';
    prevLinkEl.href = '#'+prev.slug;
    prevLinkEl.textContent = '◀ ' + (getNumberFromSlug(prev.slug) ? (getNumberFromSlug(prev.slug)+') ') : '') + cleanTitle(prev.title);
    prevLinkEl.onclick = (e)=>{ e.preventDefault(); showNote(prev.slug); history.pushState({slug:prev.slug},'', '#'+prev.slug); };
  } else {
    prevLinkEl.style.visibility = 'hidden'; prevLinkEl.textContent=''; prevLinkEl.onclick = null;
  }

  if(currentIndex < ordered.length-1){
    const next = ordered[currentIndex+1];
    nextLinkEl.style.visibility = 'visible';
    nextLinkEl.href = '#'+next.slug;
    nextLinkEl.textContent = (getNumberFromSlug(next.slug) ? (getNumberFromSlug(next.slug)+') ') : '') + cleanTitle(next.title) + ' ▶';
    nextLinkEl.onclick = (e)=>{ e.preventDefault(); showNote(next.slug); history.pushState({slug:next.slug},'', '#'+next.slug); };
  } else {
    nextLinkEl.style.visibility = 'hidden'; nextLinkEl.textContent=''; nextLinkEl.onclick = null;
  }
}

function showNote(slug){
  const it = manifest.find(x=>x.slug===slug); if(!it) return;
  highlightActive(slug);
  const nice = cleanTitle(it.title);
  pageTitle.textContent = nice;
  currentIndex = ordered.findIndex(x=>x.slug===slug);
  if(currentIndex === -1){ const n = getNumberFromSlug(slug); if(n!=null) currentIndex = ordered.findIndex(x=>getNumberFromSlug(x.slug)===n); }
  updateNavLinks();

  // ensure the sidebar group for this note is expanded
  const noteNum = getNumberFromSlug(slug);
  if(noteNum != null){
    let foundGroup = -1;
    for(let i=0;i<structure.length;i++){
      const items = structure[i].items || [];
      for(const it of items){
        if(typeof it === 'number' && it === noteNum){ foundGroup = i; break; }
        if(typeof it === 'object' && it.num === noteNum){ foundGroup = i; break; }
      }
      if(foundGroup >= 0) break;
    }
    document.querySelectorAll('.group-list').forEach(u=>u.classList.add('collapsed'));
    if(foundGroup >=0){
      const my = document.querySelector(`.group-list[data-group="${foundGroup}"]`);
      if(my) my.classList.remove('collapsed');
    }
  }

  chartsToRender = [];
  const renderer = new marked.Renderer();
  renderer.code = function(code, infostring, escaped){
    const lang = (infostring || '').trim();
    if(lang === 'chart'){
      const id = 'chart-'+Math.random().toString(36).slice(2,9);
      try{ chartsToRender.push({id, data: JSON.parse(code)}); }catch(e){ chartsToRender.push({id, data: null, raw: code}); }
      return `<div class="chart-wrap"><canvas id="${id}" class="chart-canvas"></canvas></div>`;
    }
    return marked.Renderer.prototype.code.call(this, code, infostring, escaped);
  };

  let md = it.content || '';
  md = md.replace(/\r/g, '');
  md = md.replace(/^\s*\*\*.*(?:Previous|Next|Next Topic).*$/gmi, '');
  md = md.replace(/^\s*-{3,}\s*$/m, '');
  md = md.trim();
  const html = renderMarkdown(md, {gfm:true, breaks:true, renderer});
  // fade out/in for smooth content change
  articleEl.classList.add('fading');
  setTimeout(()=>{
    articleEl.innerHTML = html;
    // reflow -> fade in
    requestAnimationFrame(()=>{ articleEl.classList.remove('fading'); });
    const firstHeading = articleEl.querySelector('h1, h2');
    if(firstHeading){ firstHeading.textContent = cleanTitle(firstHeading.textContent); }
  }, 90);

  setTimeout(()=>{
    chartsToRender.forEach(c=>{
      const canvas = document.getElementById(c.id);
      if(!canvas) return;
      if(!c.data){ canvas.parentElement.insertAdjacentHTML('beforeend','<div style="color:#900">Invalid chart JSON</div>'); return; }
      try{ const cfg = c.data; const ctx = canvas.getContext('2d'); new Chart(ctx, cfg); }catch(e){ canvas.parentElement.insertAdjacentHTML('beforeend','<div style="color:#900">Chart error</div>'); }
    })
    // enhance ASCII diagrams: detect pre blocks that look like diagrams and style them
    enhanceAsciiDiagrams();
  },120)
}

function enhanceAsciiDiagrams(){
  const pres = articleEl.querySelectorAll('pre');
  const diagRegex = /[\-|_\|\+=]{3,}|┌|┐|└|┘|═|║|──|\[|\]|BOX/;
  pres.forEach(p=>{
    const txt = (p.textContent||'').trim();
    if(!txt) return;
    if(diagRegex.test(txt)){
      p.classList.add('ascii-diagram');
      // remove backgrounds from inner code elements
      p.querySelectorAll('code, span').forEach(el=>{ el.style.background = 'transparent'; el.style.color = 'inherit'; el.style.padding = '0'; });
      // try to auto-convert to SVG for a few known diagram types
      const key = txt.toUpperCase();
      if(/COMPILE/.test(key) && /RUN TIME/.test(key) || /COMPILE TIME/.test(key)){
        renderCompileRuntimeSVG(p);
      } else if(/STACK MEMORY/.test(key) || /HEAP MEMORY/.test(key) || /MEMORY BEHAVIOR/.test(key)){
        renderMemorySVG(p);
      } else if(/STRING POOL/.test(key) || /STRING/.test(key) && /POOL/.test(key)){
        renderStringPoolSVG(p);
      }
    }
  });
}

function wrapSVG(svg){ return '<div class="svg-diagram">'+svg+'</div>'; }

function renderCompileRuntimeSVG(pre){
  const svg = `
  <svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <style>
      .t{font:18px/1.2 Georgia, serif;fill:var(--ink)}
      .box{fill:var(--paper);stroke:rgba(0,0,0,0.12);stroke-width:1.5}
      .muted{fill:var(--muted);font-size:13px}
      .arrow{stroke:rgba(0,0,0,0.12);stroke-width:2;fill:none;marker-end:url(#a)}
    </style>
    <defs>
      <marker id="a" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="rgba(0,0,0,0.12)"/></marker>
    </defs>
    <rect x="20" y="20" width="360" height="120" class="box" rx="6"/>
    <text x="40" y="50" class="t">Source Code (program.java)</text>
    <text x="40" y="80" class="muted">→ human-readable</text>

    <rect x="420" y="20" width="360" height="120" class="box" rx="6"/>
    <text x="440" y="50" class="t">Executable / Bytecode</text>
    <text x="440" y="80" class="muted">→ machine-readable</text>

    <path d="M380 80 L420 80" class="arrow" />

    <rect x="20" y="200" width="360" height="120" class="box" rx="6"/>
    <text x="40" y="230" class="t">Interpreter (JVM)</text>
    <text x="40" y="260" class="muted">Translates+Executes line-by-line</text>

    <rect x="420" y="200" width="360" height="120" class="box" rx="6"/>
    <text x="440" y="230" class="t">Runtime (CPU)</text>
    <text x="440" y="260" class="muted">Executes machine instructions</text>

    <path d="M380 260 L420 260" class="arrow" />
  </svg>`;
  pre.innerHTML = wrapSVG(svg);
}

function renderMemorySVG(pre){
  const svg = `
  <svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <style>
      .t{font:16px/1.2 Georgia, serif;fill:var(--ink)}
      .box{fill:var(--paper);stroke:rgba(0,0,0,0.12);stroke-width:1.2}
      .muted{fill:var(--muted);font-size:13px}
      .arrow{stroke:rgba(0,0,0,0.12);stroke-width:2;fill:none;marker-end:url(#a)}
    </style>
    <defs>
      <marker id="a" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="rgba(0,0,0,0.12)"/></marker>
    </defs>
    <rect x="30" y="30" width="320" height="80" class="box" rx="6"/>
    <text x="50" y="60" class="t">Source Code</text>

    <rect x="410" y="30" width="320" height="80" class="box" rx="6"/>
    <text x="430" y="60" class="t">Compiler (in RAM)</text>

    <path d="M350 70 L410 70" class="arrow" />

    <rect x="30" y="150" width="320" height="80" class="box" rx="6"/>
    <text x="50" y="180" class="t">Executable (saved to disk)</text>

    <rect x="410" y="150" width="320" height="80" class="box" rx="6"/>
    <text x="430" y="180" class="t">Loaded to RAM → CPU executes</text>

    <path d="M350 190 L410 190" class="arrow" />
  </svg>`;
  pre.innerHTML = wrapSVG(svg);
}

function renderStringPoolSVG(pre){
  const svg = `
  <svg viewBox="0 0 760 220" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <style>
      .t{font:15px/1.2 Georgia, serif;fill:var(--ink)}
      .pool{fill:var(--paper);stroke:rgba(0,0,0,0.12)}
      .muted{fill:var(--muted);font-size:13px}
    </style>
    <rect x="40" y="30" width="680" height="140" class="pool" rx="8"/>
    <text x="70" y="60" class="t">String Pool (interned literals)</text>
    <text x="70" y="90" class="muted">"hello" → stored once</text>
    <text x="70" y="115" class="muted">new String("hello") → separate object on heap</text>
  </svg>`;
  pre.innerHTML = wrapSVG(svg);
}

function applySearch(q){
  q = (q||'').toLowerCase();
  document.querySelectorAll('.group li').forEach(li=>{
    const a = li.querySelector('.topic-link');
    const text = (a && a.textContent) ? a.textContent.toLowerCase() : '';
    const found = text.includes(q) || (li.textContent||'').toLowerCase().includes(q);
    li.style.display = found ? '' : 'none';
  });
}

async function init(){
  try{
    const [mRes,sRes] = await Promise.all([fetch('manifest.json'), fetch('structure.json')]);
    manifest = await mRes.json();
    structure = await sRes.json();
    buildOrdered();
    renderGroupedSidebar();
    const initial = location.hash && location.hash.slice(1);
    if(initial){ showNote(initial); } else if(ordered.length){ showNote(ordered[0].slug); }
  }catch(e){ pageTitle.textContent = 'Failed to load site data'; articleEl.textContent = e.message }
}

searchInput.addEventListener('input', ()=>applySearch(searchInput.value));
window.addEventListener('popstate', (ev)=>{ if(location.hash) showNote(location.hash.slice(1)); });

if(darkToggle){
  const darkIcon = document.getElementById('darkIcon');
  const saved = localStorage.getItem('retro-dark');
  if(saved === '1'){
    document.body.classList.add('dark');
    if(darkIcon){ darkIcon.className = 'fa-solid fa-sun'; }
  } else {
    if(darkIcon){ darkIcon.className = 'fa-regular fa-moon'; }
  }
  darkToggle.addEventListener('click', ()=>{
    const on = document.body.classList.toggle('dark');
    localStorage.setItem('retro-dark', on ? '1' : '0');
    if(darkIcon){
      if(on){ darkIcon.className = 'fa-solid fa-sun'; }
      else { darkIcon.className = 'fa-regular fa-moon'; }
    }
  });
}

if(menuToggle){ menuToggle.addEventListener('click', ()=>{ document.querySelector('.sidebar').classList.toggle('open'); }); }

init();
