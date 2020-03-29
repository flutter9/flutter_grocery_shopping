'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "e6e25ef07ab061f3396db68372e4cc59",
"/main.dart.js": "63c6cbf3b4844c5fdd3051e915f13401",
"/assets/LICENSE": "954706ef951b9553ecb95d1a66a0f589",
"/assets/AssetManifest.json": "9b00fa560b945dd943219ce7d55fd9cd",
"/assets/FontManifest.json": "151292a5b28e66e1d17e50efa631618a",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/Open_Sans/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"/assets/assets/papaya.png": "eac40d58c5f97ed2b1b3ea4405d85445",
"/assets/assets/mango.png": "3f7701635253be874d44db9b8b184e69",
"/assets/assets/avocado.png": "a44e5b9ecbe4ba58d87c9eb26709273b",
"/assets/assets/strawberry.png": "4e99a25c2a409a6221146c1c4878d9ee",
"/assets/assets/kiwi.png": "ec4d8f24655aea94890bcc82c227f9c2"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
