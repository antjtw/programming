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
