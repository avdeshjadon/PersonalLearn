// Pure static website - no server needed!

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
    const g = document.createElement('div'); 
    g.className='group';
    g.style.transform = 'translateY(20px)';
    g.style.opacity = '0';
    
    const h = document.createElement('h4'); 
    h.textContent = group.group;
    const ul = document.createElement('ul');
    ul.className = 'group-list collapsed';
    ul.dataset.group = String(gidx);
    
    h.addEventListener('click', ()=>{
      const isCurrentlyExpanded = !ul.classList.contains('collapsed');
      
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(43,111,111,0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        left: 50%;
        top: 50%;
        width: 20px;
        height: 20px;
        margin-left: -10px;
        margin-top: -10px;
      `;
      h.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
      
      // First collapse all other groups immediately
      document.querySelectorAll('.group-list').forEach((u)=>{
        if(u !== ul) {
          u.classList.add('collapsed');
          u.previousElementSibling.classList.remove('expanded');
        }
      });
      
      // Then toggle the clicked group
      if(isCurrentlyExpanded) {
        ul.classList.add('collapsed');
        h.classList.remove('expanded');
      } else {
        ul.classList.remove('collapsed');
        h.classList.add('expanded');
      }
    });
    
    group.items.forEach((item, itemIndex)=>{
      let num=null, children=null;
      if(typeof item === 'number') num = item;
      else if(typeof item === 'object' && item.num){ num = item.num; children = item.children || null; }

      const li = document.createElement('li');
      li.style.transform = 'translateX(-20px)';
      li.style.opacity = '0';
      
      const found = findByNumber(num);
      const a = document.createElement('a');
      a.href = found ? '#'+found.slug : '#';
      a.className = 'topic-link';
      
      if(found) {
        a.textContent = (getNumberFromSlug(found.slug) + ') ' + cleanTitle(found.title));
        a.dataset.group = String(gidx);
        
        a.addEventListener('click', (e)=>{ 
          e.preventDefault(); 
          
          const currentActive = document.querySelector('.topic-link.active');
          if(currentActive) {
            currentActive.style.transform = 'translateX(-15px) scale(0.95)';
            currentActive.style.opacity = '0.3';
            setTimeout(() => {
              currentActive.classList.remove('active');
              currentActive.style.transform = '';
              currentActive.style.opacity = '';
            }, 200);
          }
          
          a.style.transform = 'scale(0.95)';
          a.style.opacity = '0.7';
          
          setTimeout(() => {
            a.style.transform = '';
            a.style.opacity = '';
            showNote(found.slug); 
            history.pushState({slug:found.slug}, '', '#'+found.slug);
          }, 150);
        });
        
        a.addEventListener('mouseenter', () => {
          a.style.transform = 'translateX(12px) scale(1.02)';
        });
        
        a.addEventListener('mouseleave', () => {
          if(!a.classList.contains('active')) {
            a.style.transform = '';
          }
        });
        
      } else {
        a.textContent = num + ') Topic Not Found';
        a.style.opacity = '.3';
        a.style.color = '#999';
        a.style.pointerEvents = 'none';
      }
      
      li.appendChild(a);
      
      if(children && children.length && found){
        const sub = document.createElement('div'); 
        sub.className='subitems';
        sub.style.transform = 'translateY(10px)';
        sub.style.opacity = '0';
        
        children.forEach(c=>{ 
          const d = document.createElement('div'); 
          d.textContent = '• ' + c; 
          sub.appendChild(d); 
        });
        li.appendChild(sub);
        
        setTimeout(() => {
          sub.style.transform = 'translateY(0)';
          sub.style.opacity = '1';
          sub.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        }, itemIndex * 50 + 300);
      }
      ul.appendChild(li);
      
      setTimeout(() => {
        li.style.transform = 'translateX(0)';
        li.style.opacity = '1';
        li.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
      }, itemIndex * 30 + 200);
    });
    
    g.appendChild(h); 
    g.appendChild(ul); 
    listEl.appendChild(g);
    
    setTimeout(() => {
      g.style.transform = 'translateY(0)';
      g.style.opacity = '1';
      g.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    }, gidx * 100);
  });
  
  if (!document.querySelector('#ripple-animation')) {
    const style = document.createElement('style');
    style.id = 'ripple-animation';
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
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
    prevLinkEl.onclick = (e)=>{ 
      e.preventDefault(); 
      showNote(prev.slug); 
      history.pushState({slug:prev.slug},'', '#'+prev.slug);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  } else {
    prevLinkEl.style.visibility = 'hidden'; prevLinkEl.textContent=''; prevLinkEl.onclick = null;
  }

  if(currentIndex < ordered.length-1){
    const next = ordered[currentIndex+1];
    nextLinkEl.style.visibility = 'visible';
    nextLinkEl.href = '#'+next.slug;
    nextLinkEl.textContent = (getNumberFromSlug(next.slug) ? (getNumberFromSlug(next.slug)+') ') : '') + cleanTitle(next.title) + ' ▶';
    nextLinkEl.onclick = (e)=>{ 
      e.preventDefault(); 
      showNote(next.slug); 
      history.pushState({slug:next.slug},'', '#'+next.slug);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  } else {
    nextLinkEl.style.visibility = 'hidden'; nextLinkEl.textContent=''; nextLinkEl.onclick = null;
  }
}

function showNote(slug){
  const it = manifest.find(x=>x.slug===slug); if(!it) return;
  highlightActive(slug);
  const nice = cleanTitle(it.title);
  
  pageTitle.style.transform = 'translateY(-10px)';
  pageTitle.style.opacity = '0.5';
  setTimeout(() => {
    pageTitle.textContent = nice;
    pageTitle.style.transform = 'translateY(0)';
    pageTitle.style.opacity = '1';
    pageTitle.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  }, 150);
  
  currentIndex = ordered.findIndex(x=>x.slug===slug);
  if(currentIndex === -1){ const n = getNumberFromSlug(slug); if(n!=null) currentIndex = ordered.findIndex(x=>getNumberFromSlug(x.slug)===n); }
  updateNavLinks();

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
    
    // Only expand the group if it's not already expanded
    if(foundGroup >= 0){
      const my = document.querySelector(`.group-list[data-group="${foundGroup}"]`);
      if(my && my.classList.contains('collapsed')) {
        // Collapse other groups only if we need to expand this one
        document.querySelectorAll('.group-list').forEach(u=>{
          if(u !== my) u.classList.add('collapsed');
        });
        document.querySelectorAll('.sidebar h4').forEach(h=>h.classList.remove('expanded'));
        
        my.classList.remove('collapsed');
        my.previousElementSibling.classList.add('expanded');
      }
    }
  }

  let md = it.content || '';
  // Content is already properly escaped JSON string, so parse it
  if (typeof md === 'string' && md.startsWith('"') && md.endsWith('"')) {
    md = JSON.parse(md);
  }
  md = md.replace(/^\s*\*\*.*(?:Previous|Next|Next Topic).*$/gmi, '');
  md = md.replace(/^\s*-{3,}\s*$/m, '');
  md = md.trim();
  const html = renderMarkdown(md, {gfm:true, breaks:true});
  
  articleEl.classList.add('fading');
  
  setTimeout(()=>{
    articleEl.innerHTML = html;
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    requestAnimationFrame(()=>{ 
      articleEl.classList.remove('fading');
      articleEl.style.transform = 'scale(1.02)';
      setTimeout(() => {
        articleEl.style.transform = 'scale(1)';
        articleEl.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      }, 50);
    });
    
    const firstHeading = articleEl.querySelector('h1, h2');
    if(firstHeading){ 
      firstHeading.textContent = cleanTitle(firstHeading.textContent);
      firstHeading.style.transform = 'translateY(20px)';
      firstHeading.style.opacity = '0';
      setTimeout(() => {
        firstHeading.style.transform = 'translateY(0)';
        firstHeading.style.opacity = '1';
        firstHeading.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
      }, 200);
    }
    
    const elements = articleEl.querySelectorAll('p, pre, .ascii-diagram, ul, ol');
    elements.forEach((el, index) => {
      el.style.transform = 'translateY(30px)';
      el.style.opacity = '0';
      setTimeout(() => {
        el.style.transform = 'translateY(0)';
        el.style.opacity = '1';
        el.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
      }, index * 50 + 300);
    });
    
  }, 120);
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

function init(){
  console.log('🚀 Loading static data...');
  
  try {
    manifest = staticManifest;
    structure = staticStructure;
    
    console.log('✅ Successfully loaded:', manifest.length, 'topics and', structure.length, 'groups');
    
    buildOrdered();
    renderGroupedSidebar();
    const initial = location.hash && location.hash.slice(1);
    if(initial){ showNote(initial); } else if(ordered.length){ showNote(ordered[0].slug); }
  } catch(e) { 
    console.error('❌ Initialization error:', e);
    pageTitle.textContent = 'Loading Failed'; 
    articleEl.innerHTML = `
      <div style="padding: 40px; text-align: center; color: #666;">
        <h2>❌ Failed to Load Content</h2>
        <p><strong>Error:</strong> ${e.message}</p>
        <p>Please refresh the page or check browser console for details.</p>
      </div>
    `;
  }
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

if(menuToggle){ 
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);
  
  menuToggle.addEventListener('click', ()=>{ 
    const sidebar = document.querySelector('.sidebar');
    const isOpen = sidebar.classList.contains('open');
    
    if(isOpen) {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    } else {
      sidebar.classList.add('open');
      overlay.classList.add('active');
    }
  });
  
  overlay.addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.remove('open');
    overlay.classList.remove('active');
  });
  
  document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('topic-link') && window.innerWidth <= 800) {
      setTimeout(() => {
        document.querySelector('.sidebar').classList.remove('open');
        overlay.classList.remove('active');
      }, 300);
    }
  });
}

init();