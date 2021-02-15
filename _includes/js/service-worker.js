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
    "url": "404.html",
    "revision": "35c20df57cbb0b8d1ab73df7b5831a4e"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-114x114.png",
    "revision": "6ac8732c1919484f4890b56e95d24879"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-120x120.png",
    "revision": "519ead36e68a3b73c7386aaf33f69bff"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-144x144.png",
    "revision": "742e59e7f1cea398dfd56dbd6b504b31"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-152x152.png",
    "revision": "9bf65b62f1b105cff96d2d288b59b7a6"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-168x168.png",
    "revision": "fdfb4faa7f8a24c6497768c75a3cc871"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-16x16.png",
    "revision": "cb318ebb0936e8e110839591229396d9"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-180x180.png",
    "revision": "4d0d6e623229657e944ab9657f112ca9"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-192x192.png",
    "revision": "f1678b0d72933559637c7fcb7a88d64e"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-32x32.png",
    "revision": "c11de2a8dd79eeb15b321c4377ed27dc"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-48x48.png",
    "revision": "a216557ae6a958f330788209adbd337a"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-512x512.png",
    "revision": "fe20c5c4da42b100bda9dc08a84086f5"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-57x57.png",
    "revision": "ef714bb484dac284abc4568fbc1ab924"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-60x60.png",
    "revision": "b80b2512224417ef33694b3105fddd4e"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-72x72.png",
    "revision": "7c2a0f8a1bbdb34e079fa819cabc4c89"
  },
  {
    "url": "assets/theme/icons/kroniki-icon-96x96.png",
    "revision": "d5b0472d8ca44956a6697f6473d1ee44"
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
    "url": "favicon.png",
    "revision": "593e91841822ebb418a27f5cad4464d4"
  },
  {
    "url": "feed.xml",
    "revision": "788e874e287cb73fee46f7f834dcf971"
  },
  {
    "url": "index.html",
    "revision": "97f35114b12ed838097f6c475f726f46"
  },
  {
    "url": "main.js",
    "revision": "3d042e4825d16293d4958c3c4eaf8f38"
  },
  {
    "url": "manifest.json",
    "revision": "68c8c442811b6bcc8275a4a3f876e8d9"
  },
  {
    "url": "Readme.md",
    "revision": "0cc773fff51d1e59638ae296a4321d49"
  },
  {
    "url": "stories/en/test_3.html",
    "revision": "294813934a23c352bbb3d79cec00bc45"
  },
  {
    "url": "stories/en/test.html",
    "revision": "a006d8f0145800d70f0f4929dc5ba668"
  },
  {
    "url": "stories/en/test2.html",
    "revision": "d19402d50840d14a817b41ff1d3a8b64"
  },
  {
    "url": "stories/pl/gawron.html",
    "revision": "c07ca1ed34dfdbb821cc602955f1f76f"
  },
  {
    "url": "workbox-config.js",
    "revision": "e21b45cd0fc09490acd0ee482b6052e6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
