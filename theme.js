/* ============================================================
   theme.js — light / dark
   Default follows prefers-color-scheme. Manual toggle persists.
   The pre-paint bootstrap (inline in each page <head>) sets the
   initial attribute; this module handles toggling + live OS changes.
   ============================================================ */
(function(){
  const APP = (window.APP = window.APP || {});
  const KEY = 'theme';
  const root = document.documentElement;

  function stored() {
    try { return window.localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function persist(v) {
    try { window.localStorage.setItem(KEY, v); } catch (e) {}
  }
  function systemPref() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  function current() {
    return root.getAttribute('data-theme') || stored() || systemPref();
  }
  function apply(v) {
    root.setAttribute('data-theme', v);
  }
  function toggle() {
    const next = current() === 'dark' ? 'light' : 'dark';
    apply(next);
    persist(next);
    document.dispatchEvent(new CustomEvent('themechange', { detail: next }));
    return next;
  }

  // react to OS changes only when the user hasn't pinned a preference
  if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = e => { if (!stored()) apply(e.matches ? 'light' : 'dark'); };
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else if (mq.addListener) mq.addListener(onChange);
  }

  APP.theme = { current, toggle, apply };
})();
