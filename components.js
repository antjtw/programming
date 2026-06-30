/* ============================================================
   components.js — shared render helpers used across pages
   ============================================================ */
(function(){
  const APP = (window.APP = window.APP || {});
  const store = APP.store;
  const WARM = APP.WARM;

  const fmtDate = d => d.toLocaleDateString('en-GB', { weekday:'short', day:'numeric', month:'short' });

  /* ---- movement row ---- */
  function movement(it){
    const nm = it.yt
      ? `<a class="nm" href="${it.yt}" target="_blank" rel="noopener">${it.n}</a>`
      : `<span class="nm">${it.n}</span>`;
    const nums = [];
    if (it.s) nums.push(`<span class="num"><b>${it.s}</b></span>`);
    if (it.r && it.r !== '—') nums.push(`<span class="num rpe">${it.r}</span>`);
    if (it.k && it.k !== '—') nums.push(`<span class="num kg"><b>${it.k}</b>${/^[0-9.]+$/.test(it.k) ? ' kg' : ''}</span>`);
    const flag = it.flag ? `<span class="flag">⚠ ${it.flag}:</span> ` : '';
    return `<div class="mv">
      <div class="top"><div>${nm}${it.v ? `<div class="var">${it.v}</div>` : ''}</div></div>
      ${nums.length ? `<div class="nums">${nums.join('')}</div>` : ''}
      ${it.nt ? `<div class="nt">${flag}${it.nt}</div>` : ''}
    </div>`;
  }

  /* ---- session block (warm-up / main / finish) ---- */
  function block(b){
    const cls = b.t === WARM ? 'warm' : (b.t === 'Main' ? '' : 'acc-s');
    return `<div class="sect-head ${cls}"><span class="sq"></span><span class="t">${b.t}</span></div>
      <div class="mv-grid">${b.items.map(movement).join('')}</div>`;
  }

  /* ---- generic tile (meso / week / session list item) ---- */
  function tile({jp, en, ttl, meta, href, tag, tagCls}){
    return `<a class="tile tap" href="${href}">
      <div class="badge"><span class="jp">${jp}</span><span class="en">${en}</span></div>
      <div class="body"><div class="ttl">${ttl}</div>${meta ? `<div class="meta">${meta}</div>` : ''}${tag ? `<div class="tags mt8"><span class="tag ${tagCls||''}">${tag}</span></div>` : ''}</div>
      <div class="arr">›</div>
    </a>`;
  }

  function callout(type, icon, html){
    return `<div class="callout ${type}"><div class="ic">${icon}</div><div class="tx">${html}</div></div>`;
  }

  function statStrip(pairs, cols){
    const style = cols ? ` style="grid-template-columns:repeat(${cols},1fr)"` : '';
    return `<div class="stats"${style}>${pairs.map(p =>
      `<div class="stat"><div class="v" style="font-size:${String(p[1]).length>6?'13px':'18px'}">${p[1]}</div><div class="k">${p[0]}</div></div>`
    ).join('')}</div>`;
  }

  function dl(label){ return `<div class="dl"><span class="t">${label}</span><span class="ln"></span></div>`; }

  /* ---- bodyweight ---- */
  function bwInput(scope){
    return `<div class="inrow">
      <input id="bwInput_${scope}" type="number" inputmode="decimal" step="0.1" placeholder="— —" aria-label="Bodyweight in kg">
      <span class="unit">kg</span>
      <button id="bwSave_${scope}" data-scope="${scope}">SAVE</button>
    </div>`;
  }

  function sessionBWCard(){
    return `<div class="bw">
      <div class="lab">今日の体重 — Today's bodyweight</div>
      <div class="date">${fmtDate(new Date())}</div>
      ${bwInput('sess')}
      <div class="hint">Saved <b>per day</b> and shared across every session — log it once today and it shows everywhere. <b>Persists</b> when you close and reopen.</div>
    </div>`;
  }

  async function bwHomeBlock(){
    const keys = (await store.list('bw:')).sort();
    const recent = keys.slice(-10);
    const vals = [];
    for (const k of recent){ const v = await store.get(k); if (v != null) vals.push(parseFloat(v)); }
    let spark = '', latest = '—', avg = '—';
    if (vals.length){
      const min = Math.min(...vals), max = Math.max(...vals), rng = (max - min) || 1;
      spark = `<div class="spark">` + vals.map((v,i) => {
        const h = 12 + ((v - min) / rng) * 28;
        return `<div class="b ${i === vals.length-1 ? 'last' : ''}" style="height:${h}px" title="${v}"></div>`;
      }).join('') + `</div>`;
      latest = vals[vals.length-1].toFixed(1);
      avg = (vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(1);
    }
    return `<div class="card">
      <div class="between">
        <div><div class="kicker" style="margin:0">Latest</div><div class="bw-big">${latest}<span> kg</span></div></div>
        <div class="tcenter"><div class="kicker" style="margin:0">10-day avg</div><div class="bw-mid">${avg}<span> kg</span></div></div>
      </div>
      ${spark || '<div class="sub mt8" style="font-size:12.5px">No entries yet — log today\'s weight below or inside any session.</div>'}
      ${bwInput('home')}
    </div>`;
  }

  async function bindBW(){
    const cur = await store.get(store.todayKey());
    document.querySelectorAll('[id^="bwInput_"]').forEach(inp => { if (cur != null) inp.value = cur; });
    document.querySelectorAll('[id^="bwSave_"]').forEach(btn => {
      btn.onclick = async () => {
        const inp = document.getElementById('bwInput_' + btn.dataset.scope);
        const val = parseFloat(inp.value);
        if (isNaN(val) || val <= 0) { inp.focus(); return; }
        await store.set(store.todayKey(), val);
        document.querySelectorAll('[id^="bwInput_"]').forEach(o => o.value = val);
        const old = btn.textContent;
        btn.textContent = 'SAVED ✓'; btn.classList.add('saved');
        setTimeout(() => { btn.textContent = old; btn.classList.remove('saved'); }, 1400);
      };
    });
  }

  APP.ui = { movement, block, tile, callout, statStrip, dl, bwInput, sessionBWCard, bwHomeBlock, bindBW, fmtDate };
})();
