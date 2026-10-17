
const CACHE_NAME = 'my-app-cache-v1';
const ASSETS = [const CACHE_NAME = 'v1';
const ASSETS = [
  '/repository-name/',
  '/repository-name/index.html',
  '/repository-name/manifest.json',
  '/repository-name/icon-192.png',
  '/repository-name/icon-512.png'
];

// Install Service Worker and cache core assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch assets from cache or network
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

  '/',
  '/index.html',
  '/manifest.json'
];

// Install the service worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});// Listen for the install event
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
  // Optional: Force the waiting service worker to become active
  self.skipWaiting();
});

// Listen for the activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
});

// Listen for network fetch requests (Required by Chrome for PWA installation)
self.addEventListener('fetch', (event) => {
  // For a bare-minimum setup, we just let the browser fetch naturally
  event.respondWith(fetch(event.request));
});
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log("Service Worker Registered"));
  }
</script>
