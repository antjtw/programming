/* ============================================================
   store.js — bodyweight persistence
   Tries, in order:
     1. window.storage   (Claude artifact API)
     2. localStorage     (normal web / GitHub Pages)
     3. in-memory        (last resort; lost on reload)
   Same async interface regardless of backend.
   ============================================================ */
(function(){
  const APP = (window.APP = window.APP || {});

  const mem = {};
  let backend = 'memory';

  // detect localStorage availability (wrapped — sandboxes can throw)
  let hasLS = false;
  try {
    const k = '__t__' + Date.now();
    window.localStorage.setItem(k, '1');
    window.localStorage.removeItem(k);
    hasLS = true;
  } catch (e) { hasLS = false; }

  const hasArtifact = !!window.storage;
  backend = hasArtifact ? 'artifact' : (hasLS ? 'localStorage' : 'memory');

  const store = {
    backend,
    persists: backend !== 'memory',

    async get(key) {
      try {
        if (hasArtifact) { const r = await window.storage.get(key); return r ? r.value : null; }
        if (hasLS) { const v = window.localStorage.getItem(key); return v === null ? null : v; }
      } catch (e) {}
      return key in mem ? mem[key] : null;
    },

    async set(key, value) {
      try {
        if (hasArtifact) { await window.storage.set(key, value); return true; }
        if (hasLS) { window.localStorage.setItem(key, String(value)); return true; }
      } catch (e) {}
      mem[key] = value;
      return backend !== 'memory';
    },

    async list(prefix) {
      try {
        if (hasArtifact) { const r = await window.storage.list(prefix); return r ? r.keys : []; }
        if (hasLS) {
          const out = [];
          for (let i = 0; i < window.localStorage.length; i++) {
            const k = window.localStorage.key(i);
            if (k && k.startsWith(prefix)) out.push(k);
          }
          return out;
        }
      } catch (e) {}
      return Object.keys(mem).filter(k => k.startsWith(prefix));
    }
  };

  // helpers
  store.todayKey = () => {
    const d = new Date();
    return `bw:${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  };

  APP.store = store;
})();
