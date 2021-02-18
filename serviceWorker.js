const VERSION = "v1";

// Escucha la instalación del SW para guardar los datos en caché
self.addEventListener("install", (event) => event.waitUntil(precache()));

// Obtiene los datos de la caché
self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Comprueba si el método de la respuesta de la petición es GET
  if (request.method !== "GET") {
    return;
  }

  // Busca los datos en caché
  event.respondWith(cachedResponse(request));

  // Actualiza la caché
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION); // Abre el objeto indicado de la caché
  // Añade los datos al objeto
  return cache.addAll([
    "./",
    "./index.html",
    "./style.css",
    "./index.js",
    "./js/MediaPlayer.js",
    "./js/plugins/AutoPlay.js",
    "./js/plugins/AutoPause.ts",
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
  if (response.status === 200) {
    return cache.put(request, response);
  }
  return;
}
