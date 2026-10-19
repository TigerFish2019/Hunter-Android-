// Hunter Systeem – offline cache. Verhoog VERSION bij een nieuwe versie van de app.
const VERSION = "hunter-v1";
const CORE = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // Lettertypen: eerst uit de cache, anders ophalen en bewaren
  if (url.hostname.endsWith("fonts.googleapis.com") || url.hostname.endsWith("fonts.gstatic.com")) {
    e.respondWith(caches.open(VERSION).then(async c => {
      const hit = await c.match(e.request);
      if (hit) return hit;
      try { const res = await fetch(e.request); c.put(e.request, res.clone()); return res; } catch (err) { return new Response("", {status: 504}); }
    }));
    return;
  }
  if (url.origin !== location.origin) return;
  // App-bestanden: eerst cache (werkt offline), op de achtergrond verversen
  e.respondWith(caches.open(VERSION).then(async c => {
    const hit = await c.match(e.request, {ignoreSearch: true});
    const net = fetch(e.request).then(res => { if (res.ok) c.put(e.request, res.clone()); return res; }).catch(() => null);
    return hit || (await net) || c.match("index.html");
  }));
});
