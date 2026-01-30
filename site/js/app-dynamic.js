// Dynamic website - fetches data from .md files!

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
let contentCache = {};

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

async function fetchMarkdownContent(path) {
  // Check cache first
  if (contentCache[path]) {
    return contentCache[path];
  }
  
  try {
    // Fetch from the data directory
    const response = await fetch(`../data/${path}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${path}: ${response.status}`);
    }
    const content = await response.text();
    contentCache[path] = content;
    return content;
  } catch (error) {
    console.error('Error fetching markdown:', error);
    return `# Error Loading Content\n\nFailed to load content from ${path}\n\nError: ${error.message}`;
  }
}

function extractTitleFromMarkdown(content) {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1] : 'Untitled';
}

async function buildManifestFromFiles() {
  console.log('🔍 Building manifest from .md files...');
  
  // Build list of expected files (01-113)
  const files = [];
  for (let i = 1; i <= 113; i++) {
    const num = String(i).padStart(i < 10 ? 2 : i < 100 ? 2 : 3, '0');
    files.push(num);
  }
  
  // Try to fetch and parse each file
  const manifestPromises = files.map(async (num) => {
    try {
      // Try common naming patterns
      const patterns = [
        `${num}-*.md`,
      ];
      
      // For now, we'll make an educated guess based on common patterns
      // In a real scenario, you'd have a file listing endpoint
      const testPath = await findMarkdownFile(num);
      if (!testPath) return null;
      
      const content = await fetchMarkdownContent(testPath);
      const title = extractTitleFromMarkdown(content);
      const slug = testPath.replace('.md', '').replace(/^\.\.\//, '');
      
      return {
        slug: slug,
        title: title,
        path: testPath
      };
    } catch (error) {
      console.warn(`Could not load file ${num}:`, error);
      return null;
    }
  });
  
  const results = await Promise.all(manifestPromises);
  manifest = results.filter(item => item !== null);
  
  console.log(`✅ Loaded ${manifest.length} topics`);
  return manifest;
}

async function findMarkdownFile(num) {
  // Try to find the actual markdown file
  // This is a workaround since we can't list directory contents from browser
  const commonPatterns = [
    `${num}-what-is-program.md`,
    `${num}-what-is-programming-language.md`,
    `${num}-low-vs-high-level-languages.md`,
    `${num}-compiler-vs-interpreter.md`,
    // Add more patterns as needed...
  ];
  
  // For a production solution, you'd want to:
  // 1. Have a server endpoint that lists files
  // 2. Or generate a manifest.json during build
  // 3. Or use a static file listing
  
  // For now, we'll use a simpler approach: try to fetch the file directly
  try {
    const response = await fetch(`../${num}*.md`, { method: 'HEAD' });
    if (response.ok) {
      return `${num}*.md`;
    }
  } catch (e) {
    // File not found, that's ok
  }
  
  return null;
}

// Alternative: Load from a pre-generated file list
async function loadFileList() {
  try {
    const response = await fetch('../file-list.json');
    if (response.ok) {
      const fileList = await response.json();
      return fileList;
    }
  } catch (e) {
    console.warn('file-list.json not found, will scan files manually');
  }
  return null;
}

async function buildManifestFromFileList() {
  console.log('🔍 Loading file list...');
  
  const fileList = await loadFileList();
  
  if (!fileList) {
    console.log('⚠️ No file-list.json found, using direct file access');
    return await buildManifestDirect();
  }
  
  manifest = fileList.map(filename => {
    const slug = filename.replace('.md', '');
    return {
      slug: slug,
      title: slug.replace(/-/g, ' ').toUpperCase(),
      path: filename
    };
  });
  
  // Load titles by fetching a small portion of each file
  await Promise.all(manifest.map(async (item) => {
    try {
      const content = await fetchMarkdownContent(item.path);
      item.title = extractTitleFromMarkdown(content);
    } catch (e) {
      console.warn(`Failed to load title for ${item.path}`);
    }
  }));
  
  console.log(`✅ Loaded ${manifest.length} topics from file list`);
  return manifest;
}

async function buildManifestDirect() {
  console.log('📂 Scanning for .md files directly...');
  
  // Since we can't list directory from browser, we'll try known files
  // This requires the files to follow a predictable naming pattern
  const knownFiles = [];
  
  // Try files 01 through 113
  for (let i = 1; i <= 113; i++) {
    const num = String(i).padStart(2, '0');
    
    // Try to fetch each file
    try {
      const testResponse = await fetch(`../${num}-`, { method: 'HEAD' });
      // We can't actually test this way without knowing the full filename
      // So we'll need a different approach
    } catch (e) {
      // Expected
    }
  }
  
  console.log('⚠️ Direct file scanning not possible from browser');
  console.log('ℹ️ Please create a file-list.json with all .md filenames');
  
  return [];
}

function buildStructureFromManifest() {
  // Build exact sidebar groups as specified by the user (explicit ordering)
  const groupsDef = [
    { group: 'Programming Basics & Foundations', items: [
      '01-what-is-program',
      '02-what-is-programming-language',
      '03-low-vs-high-level-languages',
      '04-compiler-vs-interpreter'
    ]},
    { group: 'Java Introduction & History', items: [
      '05-why-java-was-created',
      '06-problems-cpp-java-solved',
      '07-what-is-java',
      '08-history-of-java',
      '09-evolution-java-versions',
      '10-why-java-popular',
      '11-where-java-used-today'
    ]},
    { group: 'Java Editions & Platform Independence', items: [
      '12-java-editions',
      '13-platform-independence',
      '14-wora',
      '15-source-vs-bytecode',
      '16-class-file'
    ]},
    { group: 'Java Architecture & JVM Internals', items: [
      '17-jdk',
      '18-jre',
      '19-jvm',
      '20-jvm-architecture',
      '21-class-loading-process',
      '22-program-execution-flow'
    ]},
    { group: 'Java Program Structure', items: [
      '23-main-method',
      '24-why-main-static',
      '25-string-args',
      '26-program-structure',
      '27-tokens',
      '28-keywords',
      '29-identifiers',
      '30-literals'
    ]},
    { group: 'Comments & Coding Standards', items: [
      '31-comments',
      '32-coding-conventions',
      '108-best-practices',
      '109-common-myths'
    ]},
    { group: 'Variables & Data Types', items: [
      '33-what-is-variable',
      '34-declaration-vs-initialization',
      '35-types-of-variables',
      '36-scope-of-variables',
      '37-lifetime-of-variables',
      '38-data-types',
      '39-primitive-data-types',
      '40-default-values'
    ]},
    { group: 'Type Conversion & Encoding', items: [
      '41-ascii-vs-unicode',
      '42-type-casting',
      '43-type-promotion'
    ]},
    { group: 'Operators in Java', items: [
      '44-operators-overview',
      '45-arithmetic-operators',
      '46-relational-operators',
      '47-logical-operators',
      '48-bitwise-operators',
      '49-assignment-operators',
      '50-unary-operators',
      '51-ternary-operator',
      '52-instanceof-operator',
      '53-operator-precedence'
    ]},
    { group: 'Input & Output in Java', items: [
      '54-system-out-println',
      '55-scanner-class',
      '56-bufferedreader',
      '57-input-mismatch',
      '58-command-line-arguments'
    ]},
    { group: 'Control Statements', items: [
      '59-if-statement',
      '60-if-else-statement',
      '61-if-else-if-ladder',
      '62-nested-if',
      '63-switch-statement',
      '64-switch-expressions'
    ]},
    { group: 'Loops & Flow Control', items: [
      '65-loops-overview',
      '66-for-loop',
      '67-while-loop',
      '68-do-while-loop',
      '69-enhanced-for-loop',
      '70-break-statement',
      '71-continue-statement',
      '72-nested-loops'
    ]},
    { group: 'Arrays in Java', items: [
      '73-arrays-introduction',
      '74-single-dimensional-arrays',
      '75-multi-dimensional-arrays',
      '76-jagged-arrays',
      '77-array-memory-layout',
      '78-arrays-class-utility',
      '90-arrays-utility-methods'
    ]},
    { group: 'String Handling', items: [
      '79-string-class',
      '80-string-immutability',
      '81-string-pool',
      '82-stringbuilder',
      '83-stringbuffer',
      '84-string-comparison'
    ]},
    { group: 'Wrapper & Utility Classes', items: [
      '85-wrapper-classes',
      '86-autoboxing-unboxing',
      '87-math-class',
      '88-system-class',
      '89-object-class'
    ]},
    { group: 'Memory Management & JVM Lifecycle', items: [
      '91-stack-memory',
      '92-heap-memory',
      '93-references',
      '94-garbage-collection',
      '95-finalize-method',
      '96-jvm-shutdown'
    ]},
    { group: 'Exception Handling', items: [
      '97-errors-vs-exceptions',
      '98-exception-hierarchy',
      '99-try-catch',
      '100-finally-block',
      '101-throw-vs-throws'
    ]},
    { group: 'Packages & Modifiers', items: [
      '102-packages',
      '103-import-statement',
      '104-access-modifiers',
      '105-classpath',
      '106-static-keyword',
      '107-static-blocks'
    ]},
    { group: 'Performance & Career', items: [
      '110-performance-tips',
      '111-java-roadmap',
      '112-interview-prep',
      '113-quick-reference'
    ]}
  ];

  // Preserve order and only include items that exist in the manifest
  const groups = groupsDef.map(g => {
    const items = (g.items || []).map(s => {
      // slugs in manifest are filename without .md
      const found = manifest.find(m => m.slug === s || m.slug === s.replace(/^[0-9]+-/, ''));
      if(found) return found.slug;
      // as fallback, try numeric mapping
      const n = getNumberFromSlug(s);
      return n != null ? n : s;
    }).filter(Boolean);
    return { group: g.group, items };
  }).filter(g => g.items && g.items.length);

  structure = groups;
  console.log(`📋 Created ${groups.length} sidebar groups (explicit)`);
}

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
      
      document.querySelectorAll('.group-list').forEach((u)=>{
        if(u !== ul) {
          u.classList.add('collapsed');
          u.previousElementSibling.classList.remove('expanded');
        }
      });
      
      if(isCurrentlyExpanded) {
        ul.classList.add('collapsed');
        h.classList.remove('expanded');
      } else {
        ul.classList.remove('collapsed');
        h.classList.add('expanded');
      }
    });

    (group.items||[]).forEach(num=>{
      let topic = null;
      if (typeof num === 'number') topic = findByNumber(num);
      else topic = manifest.find(m => m.slug === String(num));
      if(!topic) return;
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.className = 'topic-link';
      a.href = '#'+topic.slug;
      const noteNum = getNumberFromSlug(topic.slug);
      a.textContent = (noteNum ? (noteNum + ') ') : '') + cleanTitle(topic.title);
      a.onclick = (e)=>{
        e.preventDefault();
        showNote(topic.slug);
        history.pushState({slug:topic.slug},'', '#'+topic.slug);
      };
      li.appendChild(a);
      ul.appendChild(li);
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

async function showNote(slug){
  const it = manifest.find(x=>x.slug===slug); 
  if(!it) {
    console.warn(`Topic not found: ${slug}`);
    return;
  }
  
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
  if(currentIndex === -1){ 
    const n = getNumberFromSlug(slug); 
    if(n!=null) currentIndex = ordered.findIndex(x=>getNumberFromSlug(x.slug)===n); 
  }
  updateNavLinks();

  const noteNum = getNumberFromSlug(slug);
  if(noteNum != null){
    let foundGroup = -1;
    for(let i=0;i<structure.length;i++){
      const items = structure[i].items || [];
      for(const it of items){
        if(typeof it === 'number' && it === noteNum){ foundGroup = i; break; }
        if(typeof it === 'object' && it.num === noteNum){ foundGroup = i; break; }
        if(typeof it === 'string'){
          if(it === slug || getNumberFromSlug(it) === noteNum){ foundGroup = i; break; }
        }
      }
      if(foundGroup >= 0) break;
    }
    
    if(foundGroup >= 0){
      const my = document.querySelector(`.group-list[data-group="${foundGroup}"]`);
      if(my && my.classList.contains('collapsed')){
        my.classList.remove('collapsed');
        const header = my.previousElementSibling;
        if(header) header.classList.add('expanded');
      }
    }

    // Ensure the active item is visible in the sidebar
    try{
      const activeLink = document.querySelector(`.topic-link[href="#${slug}"]`);
      if(activeLink){
        activeLink.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }catch(e){/* ignore */}
  }

  // Show loading state
  articleEl.innerHTML = `
    <div style="padding: 40px; text-align: center; color: #666;">
      <h2>⏳ Loading content...</h2>
      <div style="margin: 20px 0;">
        <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #2b6f6f; border-radius: 50%; animation: spin 1s linear infinite;"></div>
      </div>
    </div>
  `;

  // Fetch and render the content
  try {
    const content = await fetchMarkdownContent(it.path);
    
    // Process content to identify ASCII diagrams
    const processedContent = content.replace(/```([^`]+)```/g, (match, code) => {
      // Check if this looks like an ASCII diagram (has box drawing chars or structured layout)
      if (code.includes('┌') || code.includes('│') || code.includes('└') || 
          code.includes('─') || code.includes('┐') || code.includes('┘') ||
          code.includes('├') || code.includes('┤') || code.includes('┬') || code.includes('┴')) {
        return '<pre class="ascii-diagram"><code>' + code.trim() + '</code></pre>';
      }
      return match;
    });
    
    const html = renderMarkdown(processedContent);
    
    articleEl.style.opacity = '0';
    articleEl.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      articleEl.innerHTML = html;

      // Number in-article headings (h2-h6) for easier reading
      (function(){
        const counters = [0,0,0,0,0,0,0];
        const headings = articleEl.querySelectorAll('h1,h2,h3,h4,h5,h6');
        headings.forEach(h => {
          const lvl = parseInt(h.tagName.substring(1), 10);
          if(lvl <= 1) return; // skip h1
          counters[lvl] += 1;
          for(let i = lvl + 1; i <= 6; i++) counters[i] = 0;
          const parts = [];
          for(let i = 2; i <= lvl; i++){
            if(counters[i]) parts.push(String(counters[i]));
          }
          if(parts.length){
            h.textContent = parts.join('.') + ' ' + h.textContent;
          }
        });
      })();
      articleEl.style.opacity = '1';
      articleEl.style.transform = 'translateY(0)';
      articleEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      
      chartsToRender = [];
      articleEl.querySelectorAll('pre code').forEach((block)=>{
        const txt = block.textContent;
        if(txt.includes('chart:')){
          const id = 'chart_' + Math.random().toString(36).substr(2,9);
          const canvas = document.createElement('canvas');
          canvas.id = id;
          canvas.width = 600;
          canvas.height = 300;
          block.parentElement.replaceWith(canvas);
          chartsToRender.push({id,txt});
        }
      });
      
      if(chartsToRender.length && typeof Chart !== 'undefined'){
        chartsToRender.forEach(c=>{
          try{
            const lines = c.txt.split('\n').map(l=>l.trim()).filter(l=>l);
            const typeMatch = lines.find(l=>l.startsWith('chart:'));
            const labelsMatch = lines.find(l=>l.startsWith('labels:'));
            const dataMatch = lines.find(l=>l.startsWith('data:'));
            if(typeMatch && labelsMatch && dataMatch){
              const type = typeMatch.split(':')[1].trim();
              const labels = labelsMatch.split(':')[1].split(',').map(x=>x.trim());
              const dataVals = dataMatch.split(':')[1].split(',').map(x=>parseFloat(x.trim()));
              new Chart(document.getElementById(c.id),{
                type:type,
                data:{labels:labels,datasets:[{label:'Data',data:dataVals,backgroundColor:'rgba(43,111,111,0.5)',borderColor:'rgba(43,111,111,1)',borderWidth:2}]},
                options:{responsive:true,maintainAspectRatio:false}
              });
            }
          }catch(e){console.warn('Chart error:',e);}
        });
      }
    }, 150);
    
  } catch (error) {
    console.error('Error loading content:', error);
    articleEl.innerHTML = `
      <div style="padding: 40px; text-align: center; color: #d32f2f;">
        <h2>❌ Error Loading Content</h2>
        <p>Failed to load: ${it.path}</p>
        <p style="color: #666;">${error.message}</p>
      </div>
    `;
  }
}

function applySearch(q){
  q = (q||'').toLowerCase();
  document.querySelectorAll('.group').forEach(group => {
    let anyVisible = false;
    group.querySelectorAll('li').forEach(li => {
    const a = li.querySelector('.topic-link');
    const text = (a && a.textContent) ? a.textContent.toLowerCase() : '';
    const found = text.includes(q) || (li.textContent||'').toLowerCase().includes(q);
    li.style.display = found ? '' : 'none';
      if (found) anyVisible = true;
    });
    group.style.display = anyVisible ? '' : 'none';
  });
}

async function init(){
  console.log('🚀 Loading content from .md files...');
  
  try {
    // Try to load from file-list.json first
    await buildManifestFromFileList();
    
    if (manifest.length === 0) {
      throw new Error('No files found in manifest');
    }
    
    console.log('✅ Successfully loaded:', manifest.length, 'topics');
    
    buildOrdered();
    buildStructureFromManifest();
    renderGroupedSidebar();
    
    const initial = location.hash && location.hash.slice(1);
    if(initial){ 
      await showNote(initial); 
    } else if(ordered.length){ 
      await showNote(ordered[0].slug); 
    }
  } catch(e) { 
    console.error('❌ Initialization error:', e);
    pageTitle.textContent = 'Setup Required'; 
    articleEl.innerHTML = `
      <div style="padding: 40px; max-width: 800px; margin: 0 auto;">
        <h2 style="color: #d32f2f;">⚙️ Setup Required</h2>
        <p><strong>The application needs a file list to load content dynamically.</strong></p>
        
        <h3>Option 1: Create file-list.json (Recommended)</h3>
        <p>Create a file named <code>file-list.json</code> in the root directory with the following format:</p>
        <pre style="background: #f5f5f5; padding: 15px; border-radius: 4px; overflow-x: auto;"><code>[
  "01-what-is-program.md",
  "02-what-is-programming-language.md",
  "03-low-vs-high-level-languages.md",
  ...
]</code></pre>
        
        <h3>Option 2: Generate file-list.json automatically</h3>
        <p>Run this command in your project root directory:</p>
        <pre style="background: #f5f5f5; padding: 15px; border-radius: 4px; overflow-x: auto;"><code># On Windows (PowerShell)
Get-ChildItem -Filter "*.md" | Select-Object -ExpandProperty Name | ConvertTo-Json > file-list.json

# On Linux/Mac
ls *.md | jq -R -s -c 'split("\\n") | map(select(length > 0))' > file-list.json

# Or simple version (Linux/Mac)
ls *.md | jq -R . | jq -s . > file-list.json</code></pre>
        
        <h3>Current Error:</h3>
        <pre style="background: #ffebee; padding: 15px; border-radius: 4px; color: #d32f2f;"><code>${e.message}</code></pre>
        
        <p style="margin-top: 30px;">After creating <code>file-list.json</code>, refresh this page.</p>
      </div>
    `;
  }
}

searchInput.addEventListener('input', ()=>applySearch(searchInput.value));
if (searchInput) {
  searchInput.addEventListener('input', () => applySearch(searchInput.value));
}
window.addEventListener('popstate', async (ev)=>{ 
  if(location.hash) await showNote(location.hash.slice(1)); 
});

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
      document.body.classList.remove('sidebar-open');
    } else {
      sidebar.classList.add('open');
      overlay.classList.add('active');
      document.body.classList.add('sidebar-open');
    }
  });
  
  overlay.addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.remove('open');
    overlay.classList.remove('active');
    document.body.classList.remove('sidebar-open');
  });
  
  document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('topic-link') && window.innerWidth <= 800) {
      setTimeout(() => {
        document.querySelector('.sidebar').classList.remove('open');
        overlay.classList.remove('active');
        document.body.classList.remove('sidebar-open');
      }, 300);
    }
  });
}

// Add global fade-in for buttery smooth load
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.classList.add('js-fadein');
  }, 10);
});

init();
