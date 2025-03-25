'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "73c364d02710c51a4ad9b5e839094006",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c0d5a7194f57dec75398a0e97e9b13ca",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c6b8cc976d5a431eb9f38b0a1be5a037",
".git/logs/refs/heads/main": "020ce06341aa070c1638518784a1b732",
".git/logs/refs/remotes/origin/main": "32615496c036db0cf0195d303899cb29",
".git/objects/00/86c7de1d62524e039de3f9c28c0bcbce781c90": "7bed8e5a25a46770125273ac70578496",
".git/objects/07/7cd493b6056c60c363bb7faa1f3abf64d58704": "585d763e88abecc1aa3671612e249905",
".git/objects/0c/17ae38639d3737859d81923b0905f3667b0f38": "d8b293f1e0e7be205ccbbc9dff393754",
".git/objects/0d/1d848868fdb28e8d33dd980a80833722c0e705": "fe9ffc9b7a71231d8224ffca64373f8d",
".git/objects/0f/a0e92d8126ae9d3fca8fc2b4a8460d21595925": "12338ee244240a1e2fb37713728cdca4",
".git/objects/17/744a48681753ef0c3baa0be7a75df1cc1a8449": "eac02bbc29c105718519bf85cbcfef38",
".git/objects/19/de254bec086f448cd303120afdcc2d7c376461": "76d6f1bb0924deebd5f87c856cf4a015",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/29/30b81361ed99978292d94748ae8cfef3089c6c": "008bcc798e197a39c5c9db49be6fd89b",
".git/objects/32/782ed884ac17fe6dfa929676ede8b87a2e493a": "63081b582d3a41b63b0cb1db520f0c79",
".git/objects/35/47724c1b8f7fe2f4a8248ee7a450c8985620e1": "0dcf2897a647fdf5a31222d1931cc919",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/c55746bb8e46d3e48c6adc88a53f76ada23f86": "6687b07f2d7e40c7f6fa6dc3618ce304",
".git/objects/39/86501558466ad91c2e8583f31dbba29340bc7d": "f1b6a09dbbf1386cee28b26142349083",
".git/objects/3a/8583fbe9d44a3b90d380c1ef1106293fe85854": "cac150b9b1a3013720170ce954ba0b79",
".git/objects/3a/ce84dea034c4cace0d8322ec09c1a59028bc80": "c3186da8f9d94114a97db7984163c7be",
".git/objects/3f/61230143d7d727beb0e564d13fed4c744cceec": "07be5298d3c9a4ac2c7881a829762437",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/47/13b6260f376c98dd409da4b476eaa1e4f801fb": "6bfcbf90ba09377bea6bb04190db2dee",
".git/objects/48/a24d10e806c1e92b77642f2e074a2a36a11786": "196ce727b08c9bb5520474b5c78bfdf1",
".git/objects/48/e8b72c0446cb4506aa8cef55bec7f7494f0009": "b892865daf28583400efba5941c0e000",
".git/objects/4d/4067260e07e75dc9fdcebca45c4cea78b1ae56": "4fb4d88fc71d6349fd202dca322d9aa5",
".git/objects/52/2121ed1994861d2202ca1b854c3bbc6d5419c3": "df072306d429ad15449ee0c5b7149d5c",
".git/objects/56/c6ba0bad790acf9ba38f495222d6657b79abb3": "d57bb36077fc6379151ef62e4c63cf34",
".git/objects/57/3da3791379f05cdd9ead3fa572bd8c4c2defd6": "810e9b113f073ce834e3065e3baa5a13",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5c/c6d2bb2748028dc17ac67ab2e68063a42e5625": "f9b2bbb40f8331fba7653a0e44629ea1",
".git/objects/5f/3c5d8ccd86a7ed637249418594c4ff7b7691d2": "42f1bab9bf92f47eecc210db403398ea",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/128cd9feb42ac1e117e8eb826af400c0f42ffc": "65a05d8645f5e60b9611c63212e81411",
".git/objects/61/82256ee21efdc39259bc0b842e44722ce51695": "faa5c2cb7fc8851e22d68385e2a17d70",
".git/objects/71/0fad74aeb3dc96a663814f4f59084ecbfb3102": "8b11448b16ade654c57e4d86a99c8872",
".git/objects/71/c3ecfdfc6a320764b076ee8b08498b08ce0e06": "10e1ee81a5f04195ea49bcbf7b48ab07",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/7d/6e7337660fe58954a4176802261a767ca2b743": "e15e14e2038f02996e9ce1cef0164cbc",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ab/0f4c4855b57eb16942feea380ba57d0b795ac9": "3a18019df02200edda3835fb5f03ece9",
".git/objects/ac/1e1b6dcd589a9a19bb4dd8b6157cc8fe92fa8f": "8a4b7075aae7f37036b2ed62906ea0f3",
".git/objects/ac/b676341f764d043307c0e9313f78071ef999cc": "14f09aa80179b30b865080887931e98b",
".git/objects/ae/a65e4bb061e62aad00363f4afeca8c53206575": "3a8b6bad55c14f39f7aeede7afd8f6e3",
".git/objects/b8/7b979640f9c4a130069f4a1522e164b23909d2": "24eee0567d1acb425165f2e897711333",
".git/objects/b8/f28c45176fd1a4c0a58e7e3bad8b4069fa3ea6": "26c0124c46eeab4ccfa055d5c97c9744",
".git/objects/bb/4b6f5c84d8d4b3e7dfc7a8d37800a04cc2668d": "598a19fd7349306415c49af21e7e03fe",
".git/objects/bd/643d5731c1b5a2e2bcef4e0daa056342aaacf3": "10921ef643a5d0f6cee832718435ca4a",
".git/objects/c3/1b8c2ca3ecf77a9ed4d9797cefd530f913c754": "3f177013d930e57949e9064fe8c874c8",
".git/objects/c8/71ab18db9279f5012e5baa29308d0c83186aaa": "d4cf4d6c07b2cb7f3097f4d609723a98",
".git/objects/cb/924746afda6d613af4000a2debf682abd262c0": "8f75b94d76d8acd1a7b90be6970844f2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/f0ef7e497bd63d2b00dc309b4ed2ac301572a0": "cdfe25496076c6f81ed356a84a4bc384",
".git/objects/dd/199d6137147daa2a328111607a50ec8ba4afab": "adb687b2665b6fe46be6612d9cea517a",
".git/objects/e2/3b86a624cb7cd09384cd0d914855fdab6929ea": "8313295104eaa5ce5d3d3f5d860396c2",
".git/objects/e5/38c60a5e3bffe03e0a2594b26e449f628ee8af": "1dc2f62e4948231bca3be0a8999cdb15",
".git/objects/e8/c8308689af12d1c06df0eabb61dd75cb5a95b0": "93f02037d248aef3abdb5b3547784063",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/af392fd5137f368bee615714f30592db99033b": "953cf38116d9fa8d0ee1de08bf841208",
".git/objects/f3/56d7d0472ad77dac8653a017cba8845a913f99": "ff12859f620fd706b5892aa0bea18406",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f6/ae8d12424a9c3a7192a75557e2da0bc8449c0e": "dcd43ccafa57ba778cbcce3a58afbb28",
".git/objects/f7/2e1596316010057a52580e8c734faf97a7fc03": "46a15db84f4753b83818f2d580a5e70d",
".git/objects/f9/a703013ff25d523979a1dee4bf96b095608e2f": "0caf01e4a07d4c2dffd2d176d73c8193",
".git/objects/fb/488131dda593c47eddb7832b3848e6bf15c6e6": "3e588d24bd3e4234ee42cca2d850a142",
".git/objects/fc/ee511d4694159f469681c679a5bebc2b2244ae": "1bf35ca2a6459d2567a5facc7c838657",
".git/objects/fe/c2fc9d11a0b0fd594131ce9759bda94716f3da": "070e813e7f478606ba1ac2d0d15650c6",
".git/objects/fe/cfddc3810be54bb4d20f67da5acc7175beed87": "e91b61a7633ffe3c6d66d0b20d71d628",
".git/refs/heads/main": "e9858572381f3c57ad04cff9839c0a91",
".git/refs/remotes/origin/main": "e9858572381f3c57ad04cff9839c0a91",
"assets/AssetManifest.bin": "5997c9d79142987481bca391393970b8",
"assets/AssetManifest.bin.json": "617ea53ef399b43398bf03c66f3ae255",
"assets/AssetManifest.json": "082109395679ef870454495dcca49662",
"assets/assets/fonts/IBMPlexSansThai-Bold.ttf": "349b7a81784d32544b940eef1b732d61",
"assets/assets/fonts/IBMPlexSansThai-Regular.ttf": "fc735dbc25f53b2e86fa1bc9b48dcd07",
"assets/assets/Intermittent_images/gcs_image.jpg": "e430b95282684c0c674728489b176f80",
"assets/assets/Intermittent_images/ipc_image.png": "32a2174ba3002a6c523ffd120e04726b",
"assets/assets/introduction.png": "a2eb939f2e465f7322af7d77ba275c8c",
"assets/assets/lmwh_images/Picture1.jpg": "88b23e5b07c455ad30e24c6772c6ef98",
"assets/assets/lmwh_images/Picture2.jpg": "d7743a9847bb26724c62df34865c4e0c",
"assets/assets/lmwh_images/Picture3.jpg": "032270f7346b0428583cbcf417975076",
"assets/assets/lmwh_images/Picture4.jpg": "388b1e473530a33b9ad717e08617dbff",
"assets/assets/lmwh_images/Picture5.jpg": "5fe0c2b7f76a62ec6924ca952b49d968",
"assets/assets/lmwh_images/Picture6.jpg": "5a2b0aa0bad25ae3fe2b275a00ad681e",
"assets/FontManifest.json": "6ffe724f340296066e45de18c6900bb8",
"assets/fonts/MaterialIcons-Regular.otf": "b98f25f0a9b4afe7de6455da5fe6f27c",
"assets/NOTICES": "32940ef1a48d87d1504391a53a0cc003",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "8bbf9c52b43104d37ca91af9ac5259da",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "8e960fa159d502323b2cd746a50582c4",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "40937a6e310331bc0a990bdddc0a7ec1",
"icons/Icon-192.png": "adaf6aaee84f77e4aa84b2d63ac7cad9",
"icons/Icon-512.png": "26c6f069aeb901b63bbfdde7cb67301b",
"icons/Icon-maskable-192.png": "adaf6aaee84f77e4aa84b2d63ac7cad9",
"icons/Icon-maskable-512.png": "26c6f069aeb901b63bbfdde7cb67301b",
"index.html": "46a109e67eac205f6bc6b071cbdfcbde",
"/": "46a109e67eac205f6bc6b071cbdfcbde",
"main.dart.js": "180fcb0bb6d2f6bbacbe7d1fed62ce60",
"manifest.json": "5fe61cfb27dbe7f55d0eb6e1b0acb7fd",
"README.md": "bb1491d706c463fb739fa867bab76d6e",
"version.json": "d8acd3287b175253afbf05dbde5ec5a1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
