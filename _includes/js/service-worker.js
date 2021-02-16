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
    "url": "assets/stories/gawron/cover.jpeg",
    "revision": "9dc4eecbcdb0d3eb4e9a008e503a9267"
  },
  {
    "url": "assets/stories/gawron/soldier.jpg",
    "revision": "0fe2b9602542abd50facc7bbf9c69cac"
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
    "revision": "e45f9191fa15d109819f8b22caad898f"
  },
  {
    "url": "main.js",
    "revision": "346de6893c181e39cb7ca10ca69d25e4"
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
    "url": "workbox-config.js",
    "revision": "710e44dd2cc9f6e07ce16661e535daeb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
