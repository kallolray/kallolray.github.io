const staticDev = "dev-WheelSpin-site-20210610 9:19p";
const assets = [
  "/",
  "/wheel.html",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/favicon-32x32.png",
  "/images/favicon-16x16.png",
  "images/apple-touch-icon-60x60.png",
  "images/apple-touch-icon.png",
  "https://unpkg.com/idb/build/iife/with-async-ittr-min.js"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDev).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
