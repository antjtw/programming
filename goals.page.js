/* goals.page.js */
(function(){
  const { PROGRAMME:P, ui } = window.APP;
  const view = window.APP.chrome.mount({ active:'goals', crumb:'復帰 / <b>修正</b>', title:'Movement Goals' });

  const tagCls = { primary:'acc', managed:'warn', secondary:'teal' };
  const tagLabel = { primary:'Primary driver', managed:'Active management', secondary:'Secondary' };

  const cards = P.goals.map(g => `
    <div class="card goal">
      <div class="goal-head">
        <div class="goal-jp">${g.jp}</div>
        <div class="goal-meta">
          <div class="h2">${g.area}</div>
          <div class="tags mt8"><span class="tag ${tagCls[g.tag]}">${tagLabel[g.tag]}</span></div>
        </div>
      </div>
      <div class="goal-sec">
        <div class="goal-lab">Problem</div>
        <div class="goal-tx">${g.problem}</div>
      </div>
      <div class="goal-sec">
        <div class="goal-lab">Why it happens</div>
        <div class="goal-tx">${g.why}</div>
      </div>
      <div class="goal-sec">
        <div class="goal-lab accent">The fix</div>
        <ul class="blist">${g.fix.map(f => `<li>${f}</li>`).join('')}</ul>
      </div>
      ${g.protocol ? `
      <div class="goal-sec">
        <div class="goal-lab accent">Progression — tracked · advance on criteria</div>
        ${g.protocol.stages.map(st => `
          <div style="margin-top:12px">
            <div style="font-family:var(--mono);font-size:11.5px;font-weight:700;color:var(--ink)">${st.n}</div>
            <ul class="blist" style="margin-top:6px">${st.items.map(i => `<li>${i}</li>`).join('')}</ul>
            <div style="font-size:12px;color:var(--ink-faint);margin-top:5px"><b style="color:var(--ink-dim)">Advance when:</b> ${st.advance}</div>
          </div>`).join('')}
      </div>
      ${ui.callout('acc', '✓', '<b>Completion criterion:</b> ' + g.protocol.completion)}
      <div class="goal-tx" style="margin-top:8px;font-size:12.5px">${g.protocol.cadence}</div>
      ` : ''}
      ${g.redflags ? ui.callout('danger', '⚠', '<b>Stop, or get it assessed, if:</b><ul style="margin:7px 0 0;padding-left:16px;display:flex;flex-direction:column;gap:5px">' + g.redflags.map(r => `<li>${r}</li>`).join('') + '</ul>') : ''}
      ${ui.callout('teal', '⏱', g.time)}
    </div>`).join('');

  view.innerHTML = `
  <div class="stagger">
    <header class="hero">
      <div class="kicker">What we're rebuilding around</div>
      <h1 class="h1">修正 <span class="hero-sub">Corrections</span></h1>
      <p class="lead mt8">Six interacting issues. Most trace back to one thing — 18 years of compensating around an under-rehabbed right knee. The programme's exercise selection is shaped by these, not bolted on as separate "rehab".</p>
    </header>
    <div class="grid-goals mt16">${cards}</div>
  </div>`;
})();
