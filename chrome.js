/* ============================================================
   chrome.js — app shell (sidebar + topbar + tabbar + theme toggle)
   Call APP.chrome.mount({active, crumb, title, back}) -> returns #view
   ============================================================ */
(function(){
  const APP = (window.APP = window.APP || {});
  const theme = APP.theme;

  const NAV = [
    { k:'home',  href:'index.html',     jp:'家',   en:'Home' },
    { k:'prog',  href:'programme.html', jp:'計画', en:'Program' },
    { k:'goals', href:'goals.html',     jp:'修正', en:'Goals' }
  ];

  function themeGlyph(){ return theme.current() === 'dark' ? '☀' : '☾'; }

  function navLinks(active, cls){
    return NAV.map(n =>
      `<a class="${cls} ${n.k === active ? 'on' : ''}" href="${n.href}">
         <span class="jp">${n.jp}</span><span class="en">${n.en}</span>
       </a>`).join('');
  }

  function mount({ active, crumb, title, back } = {}){
    const app = document.getElementById('app');
    app.className = 'app';
    app.innerHTML = `
      <aside class="sidebar">
        <a class="brand" href="index.html">復帰<small>Comeback · Return Programme</small></a>
        <nav class="side-nav">${navLinks(active, 'side-link')}</nav>
        <div class="side-foot">
          <button class="theme-btn" id="themeBtnSide"><span class="g">${themeGlyph()}</span><span class="l">Theme</span></button>
          <div class="side-card">
            <div class="sc-t"><span class="dot"></span> Cardiac</div>
            <div class="sc-x">Stress test clean to 180 bpm. Finish the colchicine course. Stop &amp; call cardiology on any chest pain, palpitations, breathlessness, or unusual fatigue.</div>
          </div>
        </div>
      </aside>
      <div class="main">
        <header class="topbar">
          ${back ? `<a class="backbtn" href="${back}" aria-label="Back">‹</a>` : `<span class="brand-m">復帰</span>`}
          <div class="tb-text">
            <div class="crumb">${crumb || ''}</div>
            <div class="tb-title">${title || ''}</div>
          </div>
          <button class="theme-btn-m" id="themeBtnTop" aria-label="Toggle theme">${themeGlyph()}</button>
        </header>
        <main id="view" class="view"></main>
      </div>
      <nav class="tabbar">${navLinks(active, 'tab-link')}</nav>
    `;

    const sync = () => {
      const g = themeGlyph();
      const s = document.getElementById('themeBtnSide'); if (s) s.querySelector('.g').textContent = g;
      const t = document.getElementById('themeBtnTop'); if (t) t.textContent = g;
    };
    document.getElementById('themeBtnTop').onclick = () => { theme.toggle(); sync(); };
    const sideBtn = document.getElementById('themeBtnSide');
    if (sideBtn) sideBtn.onclick = () => { theme.toggle(); sync(); };
    document.addEventListener('themechange', sync);

    return document.getElementById('view');
  }

  APP.chrome = { mount };
})();
