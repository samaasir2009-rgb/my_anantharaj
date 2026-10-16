const CACHE_NAME = "sam-portfolio-v1";
const FILES=[
    "/",
    "/index.html",
    "/style.css",
    "/data.js"
    ];
    self.addEventListener("install", (event) => {
        event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
                return cache.addAll(FILES);
            })
        );
    });
    self.addEventListener("fetch", (event) => {
        event.respondWith(
            caches.match(event.request).then((response => response || fetch(event.request)))
        );
    });