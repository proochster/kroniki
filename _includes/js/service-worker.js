/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404/index.html",
    "revision": "8cd104f19c5d80072c63765ea8a9a09a"
  },
  {
    "url": "assets/stories/gawron/companions.jpeg",
    "revision": "7f102b17231f7cd3cfd86caa9726f045"
  },
  {
    "url": "assets/stories/gawron/cover.jpeg",
    "revision": "9dc4eecbcdb0d3eb4e9a008e503a9267"
  },
  {
    "url": "assets/stories/gawron/jano.jpeg",
    "revision": "4ae1d745297c86c69c9f9c5e1fd47ba4"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-114x114.png",
    "revision": "41fca34059820df24254b90a773da2ab"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-120x120.png",
    "revision": "1ff6f344971af525cb4b9f2eef76bbbe"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-144x144.png",
    "revision": "cb8ec8f79ce5d50f3bf7f7ac38aa6410"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-152x152.png",
    "revision": "f86568fc4741915edd373d3005797665"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-168x168.png",
    "revision": "911b2c408d37503bc18ef0ae9bc77841"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-16x16.png",
    "revision": "4df65aa050e3e0dfdf60c9e4285fa8e7"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-180x180.png",
    "revision": "7fef7a5400a1710f4a9b0d4cc76f9ab9"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-192x192.png",
    "revision": "67059c79fd017e94cae01fe00486bf82"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-32x32.png",
    "revision": "fa896f0e8c31a293b5b15cd4cefe3959"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-48x48.png",
    "revision": "633b4363cfb7093c203f4c616100c3cb"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-512x512.png",
    "revision": "115ad072c87671164f8f0182948d1f28"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-57x57.png",
    "revision": "3a15aa3d8fbc4014843477b4f199f393"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-60x60.png",
    "revision": "544c0f1e3ddb285c90ffc098b7cab98f"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-72x72.png",
    "revision": "6c45c5f5e6e98a9f638642f003f2121d"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-96x96.png",
    "revision": "9b1f369a8da0b58c7881b4dedfb2261d"
  },
  {
    "url": "assets/theme/intro_large.jpeg",
    "revision": "a9ebfcf074758b3957d93a8b6c2bd264"
  },
  {
    "url": "assets/theme/intro_small.jpeg",
    "revision": "9dc4eecbcdb0d3eb4e9a008e503a9267"
  },
  {
    "url": "feed.xml",
    "revision": "9b3887e20c71f81c7740d1223668c3c3"
  },
  {
    "url": "index.html",
    "revision": "63ff2abf6f7b91c5bbe75a6bad71d1bc"
  },
  {
    "url": "main.js",
    "revision": "29b3f2085c1db057ef342226749f6372"
  },
  {
    "url": "manifest.json",
    "revision": "6ea3208c55c0f3919809ded4a640d3ee"
  },
  {
    "url": "Readme.md",
    "revision": "d6bfd272519e998587713818a4a1f763"
  },
  {
    "url": "stories/pl/gawron/index.html",
    "revision": "f95990e8fe380a46c9a9fedde543dbe2"
  },
  {
    "url": "workbox-config.js",
    "revision": "446cb19f38953b68905391fc5e257fbe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
