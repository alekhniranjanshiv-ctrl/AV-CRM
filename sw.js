/* ============================================================
   AV/CRM Service Worker — offline-first cache
   Version: 1.0.0
   Files cached on install so the app works with no internet.
============================================================ */

const CACHE_NAME = 'avcrm-v1';

// All files that make the app work — must be in the same folder
const FILES_TO_CACHE = [
  './av-crm.html',
  './audioplan.html',
  './audiocalc.html',
  './cinemaplan.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Install: cache everything
self.addEventListener('install', function(event){
  console.log('[SW] Installing and caching files...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(FILES_TO_CACHE);
    }).then(function(){
      console.log('[SW] All files cached.');
      return self.skipWaiting();
    }).catch(function(err){
      // If some files (like icons) are missing, still proceed
      console.warn('[SW] Cache warning (non-fatal):', err);
      return self.skipWaiting();
    })
  );
});

// Activate: clean up old caches
self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(
        keys.filter(function(k){ return k !== CACHE_NAME; })
            .map(function(k){ return caches.delete(k); })
      );
    }).then(function(){
      console.log('[SW] Activated, old caches cleared.');
      return self.clients.claim();
    })
  );
});

// Fetch: serve from cache first, fall back to network
self.addEventListener('fetch', function(event){
  // Only handle GET requests for same-origin files
  if(event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(function(cached){
      if(cached){
        return cached;
      }
      // Not in cache — try network, and cache on success
      return fetch(event.request).then(function(response){
        if(response && response.status === 200){
          const clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache){
            cache.put(event.request, clone);
          });
        }
        return response;
      }).catch(function(){
        // Network failed and not in cache — return offline fallback
        return new Response(
          '<h2 style="font-family:sans-serif;padding:32px;color:#71717a;">Offline — open av-crm.html directly from your device.</h2>',
          { headers: { 'Content-Type': 'text/html' } }
        );
      });
    })
  );
});
