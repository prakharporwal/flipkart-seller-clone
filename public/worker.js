const cacheName = "cache-v1";
const resourcesToPreCache = [
  "/",
  "index.html",
  "script.js",
  "style.css",
  "manifest.json",
];

// todo : need to open this
// self.addEventListener("install", (e) => {
//   e.waitUntil(
//     caches.open(cacheName).then((cache) => cache.addAll(resourcesToPreCache))
//   );
// });

// self.addEventListener("fetch", (e) => {
//   e.respondWith(
//     caches.match(e.request).then((cachedResponse) => {
//       return cachedResponse || fetch(e.request);
//     })
//   );
// });

// self.addEventListener("activate", (e) => {
//   e.waitUntil(
//     caches.open(cacheName).then((cache) => cache.addAll(resourcesToPreCache))
//   );
// });

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
