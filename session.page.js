/* session.page.js — expects ?m=&w=&s= */
(function(){
  const { ui, mesoBy } = window.APP;
  const q = new URLSearchParams(location.search);
  const m = mesoBy(q.get('m'));
  const w = m && m.weeks.find(x => x.id === q.get('w'));
  const s = w && w.sessions.find(x => x.id === q.get('s'));
  if (!m || !w || !s) { location.replace('programme.html'); return; }

  const view = window.APP.chrome.mount({
    active:'prog',
    crumb:`${m.code} / ${w.jp} / <b>${s.jp}</b>`,
    title:s.name,
    back:`meso.html?m=${m.id}`
  });

  const blocks = s.blocks.map(ui.block).join('');

  view.innerHTML = `
  <div class="fade">
    <header class="hero">
      <div class="kicker">${m.name} · ${w.label}</div>
      <h1 class="h1 title-jp"><span class="tj">${s.jp}</span>${s.name}</h1>
      <p class="sub mt8">${s.focus}</p>
    </header>
    <div class="mt16" id="bwSlot"></div>
    <div class="session">${blocks}</div>
    ${ui.callout('teal', '✓', 'Tap a movement name to open a demo search. Numbers are starting prescriptions — autoregulate to the RPE cap, do not chase the kg.')}
  </div>`;

  (async () => {
    document.getElementById('bwSlot').innerHTML = ui.sessionBWCard();
    ui.bindBW();
  })();
})();
