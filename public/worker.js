const cacheName = "cache-v1";
const resourcesToPreCache = [
  "/",
  "index.html",
  "script.js",
  "style.css",
  "manifest.json",
  "https://static-assets-web.flixcart.com/fk-sp-static/images/welcome_potal_banner_Desktop_V2_02.svg",
  "src_Pages_ServicesPage_jsx.bundle.js",
  "src_Components_NavBar_tsx.bundle.js",
  "src_Pages_FeeStructurePage_tsx.bundle.js",
  "src_Pages_ServicesPage_jsx.bundle.js",
  "bundle.js",
];

// todo : need to open this
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(resourcesToPreCache))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(resourcesToPreCache))
  );
});

self.addEventListener("push", (e) => {
  debugger;
  console.log("hello");

  e.waitUntil(
    self.registration.showNotification("title", {
      body: "Hey I am body",
      tag: "tagging",
    })
  );
});
