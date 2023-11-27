// service-worker.js

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open("v1")
      .then(function (cache) {
        return cache.addAll([
          "/index.html",
          "/css/styles.css",
          "/css/normalize/node_modules/normalize.css/normalize.css",
          "/script.js",
        ]);
      })
      .catch(function (error) {
        console.error("Erreur lors de la mise en cache des ressources:", error);
      })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheName !== "v1") {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
