var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/page1',
  '/page2'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(response => response ? response : fetch(event.request))
  );
});