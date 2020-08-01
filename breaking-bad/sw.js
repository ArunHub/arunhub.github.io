self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('meth-cache').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/style.css',
        'images/im-the-one-who-knocks.png',
        '/images/breaking-bad-truck.png',
        'images/favicon.png',
        'images/404-broken-link-page.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function (response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        // IMPORTANT: Clone the response. A response is a stream
        // and because we want the browser to consume the response
        // as well as the cache consuming the response, we need
        // to clone it so we have two streams.

        let responseClone = response.clone();

        caches.open('meth-cache').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/gallery/myLittleVader.jpg');
      });
    }
  }));
});