const VERSION = "v1";

self.addEventListener("install", (event) => event.waitUntil(precache()));

self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Comprueba si el método de la petición es GET
  if (request.method !== "GET") {
    return;
  }

  // Busca los datos en caché
  event.respondWith(cachedResponse(request));

  // Actualizar caché
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  return cache.addAll([
    "./",
    "./index.html",
    "./style.css",
    "./index.js",
    "./js/MediaPlayer.js",
    "./js/plugins/AutoPlay.js",
    "./js/plugins/AutoPause.js",
    "./assets/videos/BigBuckBunny.mp4",
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return response.status === 200
    ? cache.put(request, response)
    : new Promise((resolve, reject) => resolve(":D"));
}
