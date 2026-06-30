/* home.page.js */
(function(){
  const { PROGRAMME:P, ui } = window.APP;
  const view = window.APP.chrome.mount({ active:'home', crumb:'復帰 / トレーニング計画', title:'復帰' });

  (async () => {
    const m = P.meta;
    const bw = await ui.bwHomeBlock();
    view.innerHTML = `
    <div class="stagger">
      <header class="hero">
        <div class="kicker">Return-to-Sport · 20 weeks</div>
        <h1 class="jp-huge">復帰<span class="hero-sub">Comeback</span></h1>
        <p class="lead mt12">A staged powerlifting return built around an active cardiac recovery. Five mesocycles plus an interim reconditioning block. Patience now buys years of training.</p>
      </header>

      <section class="heart mt16">
        <div class="t"><span class="dot"></span> Cardiac intent — read first</div>
        <div class="tx">Diagnosis: <b>${m.dx}</b>, on <b>${m.med}</b>. <b>Stress test clean to 180 bpm, no symptoms</b> — the heart-rate caps are lifted and the cardiac brake on the back half of the programme largely stands down. What stays: <b>finish the colchicine course</b> (stopping early is how pericarditis recurs), and <b>stop and contact cardiology</b> on any chest pain, palpitations, breathlessness, or unusual fatigue — a clean test is a snapshot, not a permanent pass.</div>
        <div class="tags mt12"><span class="tag teal">HR caps lifted</span><span class="tag danger">finish colchicine</span><span class="tag">log symptoms</span></div>
      </section>

      ${ui.statStrip([['Old total', m.total], ['S / B / D', m.best], ['Macro', '20 wk']])}

      ${ui.dl('体重 — Bodyweight')}
      ${bw}

      ${ui.dl('The plan')}
      <a class="card tap nav-card" href="programme.html">
        <div class="between"><div><div class="h2">計画 — Programming</div><div class="sub">6 blocks · Meso 0 → Meso 5</div></div><span class="chev">›</span></div>
      </a>
      <a class="card tap nav-card" href="goals.html">
        <div class="between"><div><div class="h2">修正 — Movement Goals</div><div class="sub">6 issues we're rebuilding around</div></div><span class="chev">›</span></div>
      </a>

      ${ui.dl('Accountability')}
      <div class="card">
        <ul class="blist">
          <li><strong>Readiness gate every day.</strong> Log TRAC in your tracker. Symptoms or an HRV crash = modify or stop.</li>
          <li><strong>Frequency before load.</strong> Add days before adding weight, especially early.</li>
          <li><strong>RPE-capped, not %-driven.</strong> Intensity is earned. The targets are ceilings, not goals.</li>
          <li><strong>Log bodyweight daily</strong> (above / in any session). Track the weekly average, not the daily wobble.</li>
          <li><strong>Fitness test done ✓</strong> — clean to 180 bpm, no symptoms. Meso 2→3 gate now hinges only on finishing the colchicine course.</li>
        </ul>
      </div>

      ${ui.callout('teal', 'i', 'Built around <b>RTS</b> fatigue-percent methodology and JoeyFlexx-style autoregulated volume, merged with cardiac-rehab and tendon-rehab principles for the early blocks.')}
    </div>`;
    ui.bindBW();
  })();
})();
