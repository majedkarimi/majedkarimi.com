const CACHE_STATIC_NAME = "static-1";
const CACHE_DYNAMIC_NAME = "dynami-1";
self.addEventListener("install", function (event) {
  const preCache = function () {
    caches.open(CACHE_STATIC_NAME).then((cache) => {
      cache.addAll(["/"]);
    });
  };
  event.waitUntil(preCache());
});

self.addEventListener("activate", function (event) {
  // solve problme 1 :
  event.waitUntil(
    caches.keys().then((keyList) =>
      // for response us to the one time we use promis all
      Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  return self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then((reponse) => {
      // Try to get the response from a cache.
      if (reponse) {
        // Return it if we found one.
        return reponse;
      } else {
        // If we didn't find a match in the cache, use the network.
        return fetch(event.request).then(function (res) {
          // we want to cache eveyting we recive from server dynamic
          return caches.open(CACHE_DYNAMIC_NAME).then((cache) => {
            cache.put(event.request.url, res.clone());
            return res;
          });
        });
      }
    })
  );
});
