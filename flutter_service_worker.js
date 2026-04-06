'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "844d62e25e5e542beefcb131e3d8eef0",
"version.json": "0d08f53dca60f2483ae8bcfbf1bb25c0",
"index.html": "ad2ab618a8ddb552df84be03c07a7ef3",
"/": "ad2ab618a8ddb552df84be03c07a7ef3",
"main.dart.js": "d77f7182204cb00fc7fcf90c84503c87",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "ba15bfa6df9c0f15dbbdf6348808d50b",
"icons/Icon-192.png": "9b8ce21985996fda89b23f1bb32da280",
"icons/Icon-maskable-192.png": "9b8ce21985996fda89b23f1bb32da280",
"icons/Icon-maskable-512.png": "d664ac9993a242677cd9d3d5f4c7d27c",
"icons/Icon-512.png": "d664ac9993a242677cd9d3d5f4c7d27c",
"manifest.json": "6ecbafb6ec37b38026ce868120e44786",
".git/config": "581fa7681920dd9c367110b6fa9942d4",
".git/objects/95/077fc34452a4b525eadddb7c77de6aabe40ced": "f74a2dc955e3afeaa435209e9744a1ef",
".git/objects/92/aed4fc8fcd2e25f4dbf428236041c04fa42638": "350256727376b4a66d0e8b0486d4ad7f",
".git/objects/68/0592d71a84dfcb0637d3fd99bc891c74928f3e": "229cc2cbc52db5d3cc685b704e27a2b3",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/5f/3bfdadda84109c377d8d46eff7e193c5961e3d": "370411df97cf4baf2f93a06a1923e456",
".git/objects/9c/0bfc8344c495ffaabfa180d77cc7824a707678": "ae9cfa0dbc0da71362d8816540b6be44",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/bb/21de0434e6bb3af973cb04d8182395d8f9c6bc": "5fed370b633af0b7d0a4abe9404b6b60",
".git/objects/bb/f35d5ce01f430abe96eff3cdc2b04d1f3a1272": "45dee5b5974898e02debf20e15090a9e",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/e4ab32072b48997ad3881cee898403b05c7600": "9748d9e2201aa616f2ed1f1f913d6548",
".git/objects/89/cbcc2775a55b9273aeb1ce5e09c5c069fea197": "cdfb7a8964abd994476751dbf3fb61f7",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/68715eac1e9683ee87b1c4e208c2cbf3733c6c": "643e27f5ef5b751d3398570416f6eadf",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/5d/71ac730b9eed96b41a8a1a830b1b45187f9b4c": "2c40f8e5591f9541295f3327445a9e23",
".git/objects/62/4363ceaf07b8cc4d06514d3aa0da52ac5c1f73": "44760dac766fe21883991f241835f187",
".git/objects/3a/485d4be6aaa32105b8318bd3955e9fb918214e": "c4076a11e4c3c11e2265c44c8d400a08",
".git/objects/5e/0f2edadf16144c30ef7d4402383d1a2158011c": "a6543f5753ac18a72657765d3e5fb262",
".git/objects/90/9b7d5f30f404c8ed8687474236bec776506ea3": "caf4c038ddfb2bf8ce4b22d0823b2702",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/e1/7ccb1c34e1455bf615294dc0509afa05983386": "74294090e31c4b5f6ab96a70dd123c91",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/46/5f166a64da3840befa5361e9e75fb91afdf8d5": "4711f7041962f2bcecfa00776632b709",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/24/a85f5eaa763b93de1bc71f5a54a92e529538f7": "1a3587d761f37d4f4c3dfd89ee8c2bf0",
".git/objects/15/6c3f2b9914f077c62fa9eae2219df94172c71c": "3c5239ea915d66ffb9388625b8db1abb",
".git/objects/82/09f77036655d8ecf486cdd18a05782e2e620e2": "9b6cad28330df1623ec7051c0aaa1b13",
".git/objects/40/f7eccb740418cc36b462a4ef1c0f6354b92670": "56f88300de3c9ac07907c626fe60c7a0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5138106f2a579eeee34158ee0e2e9615",
".git/logs/refs/heads/main": "0df4995099ab2d3a8aa0c255d92b4862",
".git/logs/refs/remotes/origin/main": "35d223dab80cc24330a09901a148d2d3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "74fea709f1252b2c5c03e162877a63e5",
".git/refs/remotes/origin/main": "74fea709f1252b2c5c03e162877a63e5",
".git/index": "54d60b54ae9e629efe3dd421ce9d430f",
".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
"assets/AssetManifest.json": "4d70b3049fdff6d990c36359255809dd",
"assets/NOTICES": "d59016cfe1d571f3c4a1839252431c4f",
"assets/FontManifest.json": "7735189998bf436a6fe6d9cc012ffd63",
"assets/AssetManifest.bin.json": "a8480c93fe191d9f2d08516fb7352241",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_iconpicker/fonts/fa-solid-900.ttf": "0a95f951745ba02faa8773ea6a1ebaed",
"assets/packages/flutter_iconpicker/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/flutter_iconpicker/fonts/fa-regular-400.ttf": "3c264849ff4eb9b6e99eab9cd54c80ae",
"assets/packages/flutter_iconpicker/fonts/fa-brands-400.ttf": "b7dee83cb5ee2c47b053e2620f4bbb78",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "eb708e7f1a6a6ebc09eee74fe6eb7c76",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/sounds/hero_decorative-celebration-01.wav": "fa5a3afc1ffa16c38348e26f7379bdc8",
"assets/assets/sounds/hero_simple-celebration-01.wav": "1f4a54d0fa4ebcda65f5447c04fc5be7",
"assets/assets/sounds/alert_error-02.wav": "06837ac78d914a2b16690cb255ebe8f7",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
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
