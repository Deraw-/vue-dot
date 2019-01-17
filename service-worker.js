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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a07080bb71f93da204682e224660b061"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "08c1f9e8ce74c60f72419cce132f1bf6"
  },
  {
    "url": "android-chrome-384x384.png",
    "revision": "e48d04df8df61f3734488f063b83b1bf"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "5856f8725143fa5aeff4fde752e71c3d"
  },
  {
    "url": "assets/css/0.styles.ade12491.css",
    "revision": "e939390d2c0892e7904f910d769470e9"
  },
  {
    "url": "assets/js/10.5c0a74d5.js",
    "revision": "603c418d55f539866d62bbac77dda69e"
  },
  {
    "url": "assets/js/11.8c1aa433.js",
    "revision": "8d40aaa2e8539078d0128673c1d84835"
  },
  {
    "url": "assets/js/12.c7ae2b0e.js",
    "revision": "8e23d0c34f43f2c9051cd1f04886f57d"
  },
  {
    "url": "assets/js/13.1bd49c57.js",
    "revision": "ece5360e7261b7ee51f2727fa0a1f7fb"
  },
  {
    "url": "assets/js/14.c90a28db.js",
    "revision": "3a81d366d40fca9dac0814c2ce9e2ba1"
  },
  {
    "url": "assets/js/15.650830c4.js",
    "revision": "23e2cb3b605367bb991649a6b3c5d9bb"
  },
  {
    "url": "assets/js/16.90c5611e.js",
    "revision": "06f93349d47644618faff48e641509a6"
  },
  {
    "url": "assets/js/17.522e75ed.js",
    "revision": "be2e71fb7904b4810375529092c148ba"
  },
  {
    "url": "assets/js/18.1a552d51.js",
    "revision": "afe393e74b38642d2a1607c05b578ec1"
  },
  {
    "url": "assets/js/19.00b9514c.js",
    "revision": "634f7595df7dc4a4a4e5d72a150e609c"
  },
  {
    "url": "assets/js/20.05e3e9fe.js",
    "revision": "2691f2e6a20a1ed02731cb8c17d34e98"
  },
  {
    "url": "assets/js/21.1324a3e8.js",
    "revision": "8a586a7cc649d32791043f4bdb4b0a28"
  },
  {
    "url": "assets/js/22.415506ea.js",
    "revision": "e37bdfae9d2a6626f06d78f91e92132d"
  },
  {
    "url": "assets/js/23.76df7b0b.js",
    "revision": "cd7449b5c22c1b55506d5281c9d1fd5b"
  },
  {
    "url": "assets/js/24.249359e0.js",
    "revision": "bfd41c5fdb5a94a53287f800b9f8bd7d"
  },
  {
    "url": "assets/js/25.8bae96d9.js",
    "revision": "0c00eb42b3d43b396cfaaee5d286a6ef"
  },
  {
    "url": "assets/js/26.5eabc63f.js",
    "revision": "751a13dbff8f5a5a48b00b1793a77fd7"
  },
  {
    "url": "assets/js/27.b8115a95.js",
    "revision": "08224993d8a493a22f5cb5935b0fe293"
  },
  {
    "url": "assets/js/28.96c679cf.js",
    "revision": "6ba95f968feedf4b85f9c535fec7af53"
  },
  {
    "url": "assets/js/29.f23f113b.js",
    "revision": "f0ee569100a751753b05df16c66cf908"
  },
  {
    "url": "assets/js/30.7c7a74a5.js",
    "revision": "2cfa861beb7baa16595da8fff130f81b"
  },
  {
    "url": "assets/js/31.9b6d9702.js",
    "revision": "c1f665aa805c8c4a7e1b5f1fd90ce564"
  },
  {
    "url": "assets/js/32.41ce0624.js",
    "revision": "cac068f5b541aa685fb69298827eed0c"
  },
  {
    "url": "assets/js/33.ee8c9683.js",
    "revision": "0784c8e677a76736c0fd9b3d33e2d410"
  },
  {
    "url": "assets/js/6.492b061c.js",
    "revision": "0ba4580033ef98dfafddf051a24dc358"
  },
  {
    "url": "assets/js/7.30edcd64.js",
    "revision": "060781fbebba0f69bfc647e52d63bc49"
  },
  {
    "url": "assets/js/8.98429239.js",
    "revision": "432c6b3371a8b98cd6210919d0398b71"
  },
  {
    "url": "assets/js/9.e48ef259.js",
    "revision": "a6cac7dec65afcb9a3ba714f7d6906eb"
  },
  {
    "url": "assets/js/app.c6be5664.js",
    "revision": "9479f725053ca54a75e4f4c9e9bc433e"
  },
  {
    "url": "assets/js/examples-source.bd679bdd.js",
    "revision": "8f8275b084fc3d6910b9e7d793d06a0c"
  },
  {
    "url": "assets/js/examples.e75df843.js",
    "revision": "93f8df9245eac1ecd13083356982fa53"
  },
  {
    "url": "assets/js/translations-en.f996a87f.js",
    "revision": "06e6819dacb4e81f6f6b5a5d7c212f53"
  },
  {
    "url": "assets/js/translations-fr.cd830576.js",
    "revision": "1c0cbbd5cd95b677b853d7328e09ae79"
  },
  {
    "url": "components/data-list/index.html",
    "revision": "f41bee1afbc719c96e7916107263d88a"
  },
  {
    "url": "components/date-picker/index.html",
    "revision": "91c59749d14a3a5e6483963995231d0e"
  },
  {
    "url": "components/lang-btn/index.html",
    "revision": "eef4c3939c8f18049c63876e300b0a1d"
  },
  {
    "url": "components/svg-icon/index.html",
    "revision": "f758612f0b84121306c0836ee949385e"
  },
  {
    "url": "directives/debounce/index.html",
    "revision": "dbe0c891c30625a108d042ed1b541f74"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "372afa89f047c469a1c4e3e4ed2df281"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "041d83a00290499d4952e15befc6b85e"
  },
  {
    "url": "fr/components/date-picker/index.html",
    "revision": "4d36b6f05daae6e7e78195e2dd419180"
  },
  {
    "url": "fr/components/lang-btn/index.html",
    "revision": "2671199a4c6b735619af3ea390a19bee"
  },
  {
    "url": "fr/components/svg-icon/index.html",
    "revision": "826404b211c59b22db6e947fa40f8188"
  },
  {
    "url": "fr/directives/delai/index.html",
    "revision": "b599e460642939c980488710a987f079"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "0ba440fafb71ee7dc6a9c590beceeaf6"
  },
  {
    "url": "fr/guide/themes/comment/index.html",
    "revision": "7bff17de0c9da13b8f80a296839b0fea"
  },
  {
    "url": "fr/guide/themes/index.html",
    "revision": "8c9f26a8b026cdd1bab9f7cfe8648d62"
  },
  {
    "url": "fr/index.html",
    "revision": "d1728b42d81ddb2229b1a300e1a97ff5"
  },
  {
    "url": "fr/roadmap/index.html",
    "revision": "837ece9314ad107eaecdb8b0fa42a646"
  },
  {
    "url": "guide/index.html",
    "revision": "2c831e848258c3e471ce9a68faca824e"
  },
  {
    "url": "guide/themes/how/index.html",
    "revision": "9ec17d14fbb60b69f97e58cca12da8a0"
  },
  {
    "url": "guide/themes/index.html",
    "revision": "68aa72d02a58d5a4ee77a3c890b77ab0"
  },
  {
    "url": "img/code.png",
    "revision": "83f539e4b52b6f04723c7ca1793b7cf0"
  },
  {
    "url": "img/community.png",
    "revision": "c3a74950168c5ac1a734a3f3df04ac64"
  },
  {
    "url": "img/logo-am.svg",
    "revision": "95ecdcedda6e52f93fff1f58290958a2"
  },
  {
    "url": "img/tools.png",
    "revision": "a7f1f6033d521af73f9aad676f0ad462"
  },
  {
    "url": "img/vue.js.svg",
    "revision": "37f58d211dab8f8632023c6f47b6f6d3"
  },
  {
    "url": "index.html",
    "revision": "fc3b1904d9384a2f813ef579e95046c2"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "0b9598e27d9e745bf32644c3ed074d0d"
  },
  {
    "url": "roadmap/index.html",
    "revision": "95d96a518f2802c435222e25c64e2238"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "b505fa21478113461af6ffd645d0423d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
