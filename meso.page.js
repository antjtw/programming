/* meso.page.js — expects ?m=mesoId */
(function(){
  const { PROGRAMME:P, ui, mesoBy } = window.APP;
  const id = new URLSearchParams(location.search).get('m');
  const m = mesoBy(id);
  if (!m) { location.replace('programme.html'); return; }

  const view = window.APP.chrome.mount({
    active:'prog', crumb:`計画 / <b>${m.code}</b>`, title:m.name, back:'programme.html'
  });

  const accCls = m.accent === 'warn' ? 'danger' : (m.accent === 'teal' ? 'teal' : 'acc');
  const caps = ui.statStrip(m.caps, 4);
  const goals = `<div class="card"><ul class="blist">${m.goals.map(g => `<li>${g}</li>`).join('')}</ul></div>`;

  // weeks: each week as a section with its sessions as tappable links
  const weeks = m.weeks.map((w, i) => {
    const sess = w.sessions.map((s, j) => ui.tile({
      jp: s.jp, en: 'S' + (j+1), ttl: s.name, meta: s.focus,
      href: `session.html?m=${m.id}&w=${w.id}&s=${s.id}`
    })).join('');
    return `<div class="week-block">
      <div class="week-head">
        <div class="wh-badge">${w.jp}</div>
        <div class="wh-text"><div class="wh-ttl">${w.label}</div><div class="wh-meta">Week ${i+1} · ${w.sessions.length} sessions</div></div>
      </div>
      ${w.note ? ui.callout('acc', '↻', w.note) : ''}
      <div class="grid-tiles mt12">${sess}</div>
    </div>`;
  }).join('');

  view.innerHTML = `
  <div class="stagger">
    <header class="hero">
      <div class="kicker">${m.code} · ${m.dates}</div>
      <h1 class="h1 title-jp"><span class="tj">${m.jp}</span>${m.name}</h1>
    </header>
    ${ui.callout(accCls, '!', m.intent)}
    ${m.gate ? ui.callout('danger', '⚷', `<b>${m.gate}</b>`) : ''}
    ${caps}
    ${ui.dl('Goals')}
    ${goals}
    ${ui.dl('Cardiac note')}
    ${ui.callout('danger', '心', m.cardiac)}
    ${m.targets ? ui.dl('Loading targets') + `<div class="card"><div class="targets">${m.targets}</div></div>` : ''}
    ${ui.dl('Weeks')}
    <div class="weeks">${weeks}</div>
  </div>`;
})();
