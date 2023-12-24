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
    "revision": "83ea898d9501960755536cf2d20900d4"
  },
  {
    "url": "assets/css/0.styles.46ca355f.css",
    "revision": "652823b5638f6ccea5f7ab2bec45fb9b"
  },
  {
    "url": "assets/img/ABAC.65898cd8.svg",
    "revision": "65898cd8e222590a52de7faed74f1aef"
  },
  {
    "url": "assets/img/api.e9f8c58f.svg",
    "revision": "e9f8c58fa9da64cdda4348ecec07d5e3"
  },
  {
    "url": "assets/img/dalete_datafolder.3d620a33.png",
    "revision": "3d620a33e56ba84e2bb0712c988fe4ac"
  },
  {
    "url": "assets/img/data_life_cycle.c5c3f545.svg",
    "revision": "c5c3f545d58bc65e0d5d2368b7499ad5"
  },
  {
    "url": "assets/img/database_extraction.c814b4fc.svg",
    "revision": "c814b4fcee5f85f20560fa7ac46064fa"
  },
  {
    "url": "assets/img/delete_user.2d3a3736.png",
    "revision": "2d3a3736b8635819fd2c69871a02beef"
  },
  {
    "url": "assets/img/get_all_datafolder.2d3e907e.png",
    "revision": "2d3e907e5df7ded7928684c92c405a88"
  },
  {
    "url": "assets/img/get_all_user.d07e6f4d.png",
    "revision": "d07e6f4d5f00df2d920338eeba84defd"
  },
  {
    "url": "assets/img/get_datafolder.3e557826.png",
    "revision": "3e5578266285920d3d7dd29cf699394e"
  },
  {
    "url": "assets/img/get_user.e7420e1e.png",
    "revision": "e7420e1eb3263c3e108ca4d01bd9f0d9"
  },
  {
    "url": "assets/img/post_datafolder.083a245d.png",
    "revision": "083a245db59525ca283bd15a26209c73"
  },
  {
    "url": "assets/img/post_user.dba2c2b5.png",
    "revision": "dba2c2b5e72137cb9c093781ffc82cf8"
  },
  {
    "url": "assets/img/put_datafolder.cb1b2612.png",
    "revision": "cb1b2612b33bb03688d60025111520cd"
  },
  {
    "url": "assets/img/put_user.ac1ddba2.png",
    "revision": "ac1ddba27d263fbc1775db7f90ce4ecb"
  },
  {
    "url": "assets/img/relation_diagram.ba3b7cbf.svg",
    "revision": "ba3b7cbfb1b908c59adfc21776437ab2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/webscraping.88223cb1.svg",
    "revision": "88223cb1f8ff7767300cbf1968dab084"
  },
  {
    "url": "assets/js/1.867c0f2c.js",
    "revision": "9d881fc6bf811b6c0499978616732e3f"
  },
  {
    "url": "assets/js/10.c0ae28bb.js",
    "revision": "434dfbd2b81a1cd994c6e3ba4bcbdeaa"
  },
  {
    "url": "assets/js/13.5ca4c53f.js",
    "revision": "e9f82966852b43f6deb62fe14658de79"
  },
  {
    "url": "assets/js/14.95c7baf1.js",
    "revision": "6aa3e0074c55a4cf322405c899dff600"
  },
  {
    "url": "assets/js/15.e5ffa7c9.js",
    "revision": "42016bd1dd3340316afd5ecdd81256bd"
  },
  {
    "url": "assets/js/16.b893074f.js",
    "revision": "ee175b955f7bc9f7a92b95eb317de8f6"
  },
  {
    "url": "assets/js/17.35e5fee0.js",
    "revision": "66ad228049f637dde2ad568c6fb8d082"
  },
  {
    "url": "assets/js/18.175fabf9.js",
    "revision": "1a3997ded3c80f5ca2fbb2bad182bce3"
  },
  {
    "url": "assets/js/19.99b3a24a.js",
    "revision": "475da125779744edcbe741a56ec7602a"
  },
  {
    "url": "assets/js/2.68df30af.js",
    "revision": "23f22e7dfbbf3c517feb4d1cdf644412"
  },
  {
    "url": "assets/js/20.29310f27.js",
    "revision": "548e0257f99c7727b31f8727a86a3750"
  },
  {
    "url": "assets/js/21.d1592fa0.js",
    "revision": "820ab6cad94d0917696313a18773705f"
  },
  {
    "url": "assets/js/22.3363910a.js",
    "revision": "5e7fccb0e242f1a609fcdf2414d14b0b"
  },
  {
    "url": "assets/js/23.86b3af67.js",
    "revision": "4555c74a1cb11688d48327b8dc174116"
  },
  {
    "url": "assets/js/24.3529e98c.js",
    "revision": "ede587200ad35ae7ff610f903ba79bb8"
  },
  {
    "url": "assets/js/25.ffc99fee.js",
    "revision": "d8e4223eb0b44b83cda35bc4cb435d45"
  },
  {
    "url": "assets/js/26.7442b853.js",
    "revision": "ec31877c917f450d7c9d79ef06229c14"
  },
  {
    "url": "assets/js/27.0808db5e.js",
    "revision": "02582a3c26ccb388d744b5ebdcdfee64"
  },
  {
    "url": "assets/js/28.2af5642a.js",
    "revision": "5d43a2f4b2e4e505bf242362ae7b4be4"
  },
  {
    "url": "assets/js/29.d87f4acb.js",
    "revision": "fc82849e73480e5d65524419b66c0512"
  },
  {
    "url": "assets/js/3.5083964d.js",
    "revision": "97ad2b45f469fde528b03464ed4e2da6"
  },
  {
    "url": "assets/js/30.286ac80b.js",
    "revision": "9082dce4b1aedbe28dfa55bcba0a679a"
  },
  {
    "url": "assets/js/31.6a92c70f.js",
    "revision": "7185499dc5c84713c6bdefbc80a23342"
  },
  {
    "url": "assets/js/32.d8c228f5.js",
    "revision": "3fe9c9e03f8e16e0c244abe3190557a3"
  },
  {
    "url": "assets/js/33.92e3e947.js",
    "revision": "11290737d26a8ea5f7ddbb2c9afec07a"
  },
  {
    "url": "assets/js/34.92855bff.js",
    "revision": "7fdef71184f0dfa544476dfada662f44"
  },
  {
    "url": "assets/js/35.6b145e28.js",
    "revision": "6475fb75f8d5e8c4d0f61fd146e42865"
  },
  {
    "url": "assets/js/36.4260ad4c.js",
    "revision": "39ea6b4557f91f37e2728710822724fc"
  },
  {
    "url": "assets/js/37.7c8f1e14.js",
    "revision": "5f07a3ca59be670e169fd55326d195d4"
  },
  {
    "url": "assets/js/38.b2c66415.js",
    "revision": "f24ecf97fea2b7a59f33e6c7e4615b95"
  },
  {
    "url": "assets/js/39.72e4e174.js",
    "revision": "ffa38586ae89d8c6e9051a80c60b0897"
  },
  {
    "url": "assets/js/4.989fd55a.js",
    "revision": "5a8b9f614be6d05f364f85e7e2106a27"
  },
  {
    "url": "assets/js/41.8467d1f8.js",
    "revision": "1d9ab7b4fab02a0cb16175f203653fb4"
  },
  {
    "url": "assets/js/5.c6908bbb.js",
    "revision": "310bbfa2074b42d824c78f6321988470"
  },
  {
    "url": "assets/js/6.f2c7890f.js",
    "revision": "6f956f09c4c1bdae70d6bdb3e9b734bb"
  },
  {
    "url": "assets/js/7.4fe3b566.js",
    "revision": "63b30998f81c8dceeda8aecc21fdba7d"
  },
  {
    "url": "assets/js/8.faccddfe.js",
    "revision": "1022e80971791fb2ff2e7306c0f7f1a3"
  },
  {
    "url": "assets/js/9.94ad7241.js",
    "revision": "bdd4231a7ce58219fb7449519a874840"
  },
  {
    "url": "assets/js/app.a05454e3.js",
    "revision": "0b2eebe8fcc5c8d67b07ae99e0d5d069"
  },
  {
    "url": "assets/js/vendors~docsearch.8bdb2884.js",
    "revision": "1dc7282dc3e2408f5e5762c4ebaefb05"
  },
  {
    "url": "conclusion/index.html",
    "revision": "a6dd6ee29cfb55ff2fd7557dbe76bb0f"
  },
  {
    "url": "design/index.html",
    "revision": "551767055216f4d5f92c1f93f433f755"
  },
  {
    "url": "index.html",
    "revision": "e6fd33b760f96b1a41afb0f69be49d8d"
  },
  {
    "url": "intro/index.html",
    "revision": "4a1794273cf1af733c22fad8b6308f9c"
  },
  {
    "url": "license.html",
    "revision": "46786d47463140b51aa58fd09c3198f6"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "5cef84ed4afa2f7f6f8e095e4f40f5bb"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "238ea69056418bac13ee469f6a13d13b"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "da38d9cd771302007ec3ec694abd2f1c"
  },
  {
    "url": "software/index.html",
    "revision": "51767a7a6002a3ced672a82cd2d5c7b9"
  },
  {
    "url": "test/index.html",
    "revision": "f8fb0c70eefddb7f7c2855e4ce9cbd0f"
  },
  {
    "url": "use cases/index.html",
    "revision": "7c344ae36c651ac98f76fbe95e798cfa"
  }
].concat(self.__precacheManifest || []);
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
