'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5fe936c03cf1f370803ce3514fba0ee4",
"version.json": "834fc0bb1911546ab17ff47193f00100",
"splash/img/light-2x.png": "42ea1dc0cb91f2de698701eeca8ddc62",
"splash/img/dark-4x.png": "d905ef67a6f9841b517c4d95832856a7",
"splash/img/light-3x.png": "7a98922fa21cf8c6320558bfbd06d4e9",
"splash/img/dark-3x.png": "7a98922fa21cf8c6320558bfbd06d4e9",
"splash/img/light-4x.png": "d905ef67a6f9841b517c4d95832856a7",
"splash/img/dark-2x.png": "42ea1dc0cb91f2de698701eeca8ddc62",
"splash/img/dark-1x.png": "b8d8f0e0c7c0d441ebf523562c912219",
"splash/img/light-1x.png": "b8d8f0e0c7c0d441ebf523562c912219",
"index.html": "d12fcd9b8b5d0e7761ce9d7e029bdf3f",
"/": "d12fcd9b8b5d0e7761ce9d7e029bdf3f",
"CNAME": "a321c69d4e56b84ab5457fa42c412c7f",
"main.dart.js": "c49b9a5b7268b58a0e98775ee5b07f22",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "8f22e4b2423f05444295d3207d0ce87f",
"icons/Icon-192.png": "9654402f5e1a1cf0a39c32adb6916b2c",
"icons/Icon-maskable-192.png": "9654402f5e1a1cf0a39c32adb6916b2c",
"icons/Icon-maskable-512.png": "42ea1dc0cb91f2de698701eeca8ddc62",
"icons/Icon-512.png": "42ea1dc0cb91f2de698701eeca8ddc62",
"manifest.json": "6ecbafb6ec37b38026ce868120e44786",
".git/config": "581fa7681920dd9c367110b6fa9942d4",
".git/objects/95/077fc34452a4b525eadddb7c77de6aabe40ced": "f74a2dc955e3afeaa435209e9744a1ef",
".git/objects/0c/9bcde04f7175e9761d61bbd85ebde934d67f1d": "4cc39e0f0b713103b63ecac14ce900a7",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/56/e2c03cbfbec7edceed4ffdfacb32a1b7ea7998": "a027183f4a9700db25fdb9825cc369a4",
".git/objects/58/5627de21b9e01e23c3a798b3932ac0614b7843": "6de23acd8e8f43393046848435195c3d",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/94/27054b3d66e34dfd29d70cb9ed985ab299e700": "dc623f841f61093f828ad094242eef22",
".git/objects/94/e6ec73b4c1fcd279de1da67d6ab9ff5c37b490": "f00bee792bcfce81fc55f439f5cf67b5",
".git/objects/5f/3bfdadda84109c377d8d46eff7e193c5961e3d": "370411df97cf4baf2f93a06a1923e456",
".git/objects/05/aa59e189bc1047da7d9cbd6abed47ccc2a326d": "e2d567cbd6ca886d9c8616f180ae3631",
".git/objects/9d/2e4c2c2251ea187958011465d33082ed0d77ec": "c2f7d9fcb46756ed4c026140c3dbd2b8",
".git/objects/9d/9efb06cfa61e150b2f0f66c61fe9f9792f0588": "0dcfa550e65b704b262cfaa17ea65d40",
".git/objects/9c/0bfc8344c495ffaabfa180d77cc7824a707678": "ae9cfa0dbc0da71362d8816540b6be44",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/bb/21de0434e6bb3af973cb04d8182395d8f9c6bc": "5fed370b633af0b7d0a4abe9404b6b60",
".git/objects/bb/2a8695653cd2839e3e52266c124c5dba1ca995": "1896334bada327ebaecf828a530f82b1",
".git/objects/df/2b8d8157ccd2837c51c51a8a3aa5738f4f0585": "bb0bcc388fe3db7f61460ac6656d1d26",
".git/objects/e5/fd3acf9e5373f87f4173fd2ec1bcbef2da39c4": "5348dc4b3c19aff6e40d6b2eef5ee642",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/fd/4775ba58502f1ddafa135286e354f9e8cf4136": "0f489664afb71399dd25b0ccf6921b24",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/e4ab32072b48997ad3881cee898403b05c7600": "9748d9e2201aa616f2ed1f1f913d6548",
".git/objects/c8/cc62065e5530616e2e9015bec5baf295953e69": "f13f9a139a3fe1c5c4508479fe9a64e2",
".git/objects/c1/011fed564822391bf8a85305dc9406fdafb318": "b3249b4994caf94e75796f0cfa73bd1b",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/16/96cbdf72c3944a163bebc712c26d1c2c88060c": "01a1d1481f36eb0e448655bdba997641",
".git/objects/89/69e270cd34dbbeb9862ce468ee1391ef4a23d3": "86f1dea1f4da84d3d9d5628f15856481",
".git/objects/89/cbcc2775a55b9273aeb1ce5e09c5c069fea197": "cdfb7a8964abd994476751dbf3fb61f7",
".git/objects/89/630c55ee8b5db43accd18fdbca6d777a387e05": "a9958aa16e285262553078c7ca7b40a4",
".git/objects/1f/bb1f7c32d46f5dcb89a50e10d00878ed43f1a1": "3054a239fb5bd32e2587389324e84ac6",
".git/objects/74/05169490927345e0fb3a74ca1b50f0d429b92e": "0e08ec5942bd7ac42efb4e335031e296",
".git/objects/7b/bfdf3e54bbd84816581ab26495d5d890ca9467": "0df4f9bf03f0e1fe938882b64d5f8b95",
".git/objects/19/ffdc823bcbaafe2bc1883bfde93a86f6620cfa": "ddc61d6be655cee027b33af7118c20ab",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/68715eac1e9683ee87b1c4e208c2cbf3733c6c": "643e27f5ef5b751d3398570416f6eadf",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/4d/f693c91abff85df69a2d309ac956989fd0cb5b": "3c704fd6fa7516acaa5a807a12d34f2a",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/72/e989943cfc923dd2bdfc3a6e3cd148c07efe37": "ce0dec315431a4c10563168723cc1a98",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/31/24ad9272dc46f3018e1560b99f97738682a0aa": "4f231637430218c4c83acde04ebe944c",
".git/objects/62/4363ceaf07b8cc4d06514d3aa0da52ac5c1f73": "44760dac766fe21883991f241835f187",
".git/objects/3a/5ed33821c9045cc0bbd82dc8476c24d4f7b141": "fb0afeac16393dba6e8b46c8277b5cd2",
".git/objects/54/9d68dc023ff6e31b8774d784c2cfcc231e7976": "870d052837dec274566bbdb429f02f4f",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5e/14403f79e29e8825fc91ab4335dbb29f33a502": "ea021338149391f55a0f24f69677ab26",
".git/objects/6c/380cf158be74ff07a348928a770d656a7473db": "d5f1f008a7b83054a5e86e56fa1e3d78",
".git/objects/52/1e17de62bf8b811534615e97a14177995c9ee2": "e19c351516ad2809d409cc81513330cc",
".git/objects/97/a80e823f25a9a2efeb6bf5b9c509f841db6c39": "060736ca132b5b8daef6cb8f5c4c7d47",
".git/objects/90/41c83787cdde065f8b477268ea7104b4c84453": "ed7de0cb1ab813701732f0a2a39ead8f",
".git/objects/90/9b7d5f30f404c8ed8687474236bec776506ea3": "caf4c038ddfb2bf8ce4b22d0823b2702",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/b6/b546d62674ab0c0e4b41199b5eafb8c52d6f7a": "4b6a8c287d5b26fceb340501a6e1e21e",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/a1/b026b0cacca22d74114496d039b424d9c1c336": "77ff81751f99ac889a5fd707ca4fd690",
".git/objects/ef/9ba8b5bba4da91ca1e3fba9c14fe2cab5de381": "f2ebfe51ce8953a9b19444dbbc6742eb",
".git/objects/e1/7ccb1c34e1455bf615294dc0509afa05983386": "74294090e31c4b5f6ab96a70dd123c91",
".git/objects/cd/e68a659bbdb500b6f3cfffa3825f16536f9efd": "74fa38d67a2f2c6745eaffc0cc65bcb7",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/e8/7343eddc083ee2b7deaf305610ac84cd8080fa": "28a545f8aa0dd76a1553de8657e041a7",
".git/objects/e8/f83390b05fdeff57f95c7878b3af8dabec6765": "6a2aac2efb0bfcc6c13c62fdb90bbc78",
".git/objects/c2/2e57af73e1e93f74c18d0e3f886ef8fe10a284": "5e7422499388a8a65fa88bafcd99ca0c",
".git/objects/f8/3e225012203cbb92c1c256cf532da3288677ce": "0d1b2c470e8115dd2965697a8444a7a0",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/46/5f166a64da3840befa5361e9e75fb91afdf8d5": "4711f7041962f2bcecfa00776632b709",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/ddad18dbd21388f34f29a05b495858238d4465": "4e0022270c1a6098d8f982930f2ea195",
".git/objects/41/f005802cfd697829dbf4b2fbb732de56486466": "4c1e96cf7dd1d55ffd876a6b587dceb3",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/bc20c8e333e00cb85dbe5b607bf3bf7106296c": "0fcbf40b04c95d4a8ace457542c05aaf",
".git/objects/70/690bba0b066156b1eacc7c5be12878a2ffb6d6": "19b0679af10a17bbc62266513cc225c6",
".git/objects/24/a85f5eaa763b93de1bc71f5a54a92e529538f7": "1a3587d761f37d4f4c3dfd89ee8c2bf0",
".git/objects/15/6c3f2b9914f077c62fa9eae2219df94172c71c": "3c5239ea915d66ffb9388625b8db1abb",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/82/09f77036655d8ecf486cdd18a05782e2e620e2": "9b6cad28330df1623ec7051c0aaa1b13",
".git/objects/40/f7eccb740418cc36b462a4ef1c0f6354b92670": "56f88300de3c9ac07907c626fe60c7a0",
".git/objects/78/fbe977c6ea8f1ee38f32efb3f4c1569a3816df": "55479ed8918b007dc686b52f89c84bcf",
".git/objects/78/ded7d32f3468a8603d9686b294e5c490ca684f": "243c2271b22e59b9db4f81b75dae9391",
".git/objects/14/39b1f9ef518ff134b635ec06bdc41a0c4d2ef7": "4c80ac0838f40c9ce01bd8c47756a62b",
".git/objects/22/526a909c0fe02103a5b408bf748b973e27352a": "6664a4343bf091b564ac0540ed26c94e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "648eba47f19da05289dd0010d7703028",
".git/logs/refs/heads/main": "0e1f7439eee7a53493435c221496d236",
".git/logs/refs/remotes/origin/HEAD": "e2f2f809c0870a58d2c8618af232875f",
".git/logs/refs/remotes/origin/main": "89a39723b5f23ea2c45e03a0dcfab14e",
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
".git/refs/heads/main": "44c3dc8ce4cbec141985f2e307b96645",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "44c3dc8ce4cbec141985f2e307b96645",
".git/index": "2355ae2f8adf506e8404eab95540255a",
".git/COMMIT_EDITMSG": "24307aa5af4c467eab6676deabb09686",
".git/FETCH_HEAD": "7adf9743f45670a33fe74a5dd34e2934",
"assets/AssetManifest.json": "4d70b3049fdff6d990c36359255809dd",
"assets/NOTICES": "b47a7ef7a2d4b9573ae38753d5208ee2",
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
