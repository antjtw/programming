/* programme.page.js */
(function(){
  const { PROGRAMME:P, ui } = window.APP;
  const view = window.APP.chrome.mount({ active:'prog', crumb:'復帰 / <b>計画</b>', title:'Programming' });

  const tiles = P.mesos.map(m => ui.tile({
    jp: m.jp, en: m.code, ttl: m.name, meta: m.dates,
    href: `meso.html?m=${m.id}`, tag: m.sub, tagCls: m.accent
  })).join('');

  view.innerHTML = `
  <div class="stagger">
    <header class="hero">
      <div class="kicker">6 blocks · ~20 weeks</div>
      <h1 class="h1">計画</h1>
      <p class="lead mt8">Tap a block for its goals and intent, then drill into weeks and sessions.</p>
    </header>
    <div class="grid-tiles mt16">${tiles}</div>
  </div>`;
})();
