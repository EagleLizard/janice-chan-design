"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","3bd2adb9988021131b4208c03d09861b"],["/static/css/main.f0c99abd.css","96f0f26f7ec27a203e1b797fb3475f52"],["/static/js/main.e13f2f72.js","596fbba2b15aca4b40d13dbedac871f4"],["/static/media/BYU1.96ba9cc2.jpg","96ba9cc217d9ae63586d6bf355827893"],["/static/media/BYU2.02251151.jpg","022511511f00d406fe4b1b39fab8d247"],["/static/media/BYU3.eebb5e8f.jpg","eebb5e8fb6f8b4c9a48755d5d39816a6"],["/static/media/BYU4.b56dc132.jpg","b56dc1326915a493a568f69ab71491c3"],["/static/media/BYU5.544bcccd.jpg","544bcccd2fae6b0186b605be75787234"],["/static/media/BYU6.1cff156e.jpg","1cff156ef8ef79b01967f9e2f6084f1e"],["/static/media/BYU7.c79e5af5.jpg","c79e5af5d4f6d1a199070d32e9505c3b"],["/static/media/BYU8.f287c269.jpg","f287c269c7ed55c7f4346ee2765d396c"],["/static/media/BYU9.948aa050.jpg","948aa05020c88dc409909b895d74f4c6"],["/static/media/Shield1.8ade1738.png","8ade17386fe7b819d7faabc1ccdfb58f"],["/static/media/Shield2.4c35efa7.png","4c35efa728e1f883b4a5b4e4203eb06b"],["/static/media/Shield3.ee6d40eb.png","ee6d40ebc6603938b6fcb3ab01df335c"],["/static/media/Shield4.ec29a4ae.png","ec29a4ae7967e7be80ef1a8b60920adb"],["/static/media/WebsiteLogo-min.f567e26f.png","f567e26ff710e7a483f7fa3f69da294b"],["/static/media/WebsiteLogo.6169bd8d.png","6169bd8de5bf0a9fd92fe393703f6979"],["/static/media/bigbird.327c2700.jpg","327c27008a1f368bec45109ac4fe3ef7"],["/static/media/brighamyounguniversity.fb835d79.jpg","fb835d797cbd1dde8241d0e9142b6bc0"],["/static/media/fatpig.26f777dd.jpg","26f777dd5f5c8e9dfa5243d934e959b0"],["/static/media/fatpig1.687099ee.jpg","687099eed4848f12adfc9248f48d5959"],["/static/media/fatpig10.f2777133.jpg","f27771338b330c6801b1fa59ddaf6e0d"],["/static/media/fatpig11.39e83cd6.jpg","39e83cd65bce7d312f842f652111fde7"],["/static/media/fatpig12.d2291bc5.jpg","d2291bc5d73099a9c386197e9d224142"],["/static/media/fatpig2.7fc5537b.jpg","7fc5537b7fb6a05f8149fb94a4bca2bf"],["/static/media/fatpig3.3af22524.jpg","3af22524316ebed16f78fbb7f9558a8b"],["/static/media/fatpig4.e6553b46.jpg","e6553b468de345c07c0a85d48bb70cc2"],["/static/media/fatpig5.411fcb4b.jpg","411fcb4b661298901ea40bb89fdab8da"],["/static/media/fatpig6.c2412286.jpg","c241228622b176834bf7daf18202926f"],["/static/media/fatpig7.f02f3aab.jpg","f02f3aab672ce91800a6e119191b23e7"],["/static/media/fatpig8.58ddc7ba.jpg","58ddc7ba0b60a4c94e79485ea9b9ed7a"],["/static/media/fatpig9.b495b8b2.jpg","b495b8b2fe703ed69b7c1596599bba75"],["/static/media/janu.6543b32e.png","6543b32e956723535f5b000de8e9b792"],["/static/media/lucy-liu.9ad663fd.jpg","9ad663fd2375f704ded048b7e38218fc"],["/static/media/projects-home.153b055c.png","153b055c2a64be78cd4353e0d16f0403"],["/static/media/renaissancenow.b2e287bc.jpg","b2e287bc453b9be3cba35232d404de01"],["/static/media/renaissancenow1.809e9df0.jpg","809e9df02904ab2633d46c3e1993d17a"],["/static/media/renaissancenow2.776686ed.jpg","776686edce180f5fabc86176e886c51d"],["/static/media/renaissancenow3.bf9df66e.jpg","bf9df66e389c6530156baf35871074c9"],["/static/media/renaissancenow4.cfb5747a.jpg","cfb5747aad7d63d28bc1bce1a9b1b4ab"],["/static/media/renaissancenow5.b9844300.jpg","b98443005c33409d1d24ac3120651100"],["/static/media/sundance1.58605434.jpg","5860543403dda124e556b178ab40342e"],["/static/media/sundance10.94a43374.jpg","94a43374bcc62ffa312bfc7311486a6b"],["/static/media/sundance11.07fc938b.jpg","07fc938b9f2d908a2d45d789e6b8db7b"],["/static/media/sundance2.e5fe7ebe.jpg","e5fe7ebe969b356a3cc0054c7f87dbcc"],["/static/media/sundance3.7869e076.jpg","7869e0768dccbf60c133c4ae2bd9ade5"],["/static/media/sundance4.7bfa87ba.jpg","7bfa87ba67bcb4072fab28c91a9d7060"],["/static/media/sundance5.3e6e7ebd.jpg","3e6e7ebd4ad76d6486363b62fb7c3e14"],["/static/media/sundance6.795d6b9a.jpg","795d6b9ad6c110fb43e1465e80e3c54d"],["/static/media/sundance7.4a7c01d1.jpg","4a7c01d1c6f844bd6a52ede65de0193f"],["/static/media/sundance8.71ca0b69.jpg","71ca0b692dc262df9dcdc4d82e75fb96"],["/static/media/sundance9.11a276a7.jpg","11a276a74adf0629ab11eae9c74e46a4"],["/static/media/sundancesummertheatre.46460ae3.jpg","46460ae385d87aa017434b61297abab6"],["/static/media/tribes.70bec91d.jpg","70bec91d9c19fdb0994bc1ddf6f3a31b"],["/static/media/tribes1.53603cad.jpg","53603cadfbad84c60d43a8ffe2b7921b"],["/static/media/tribes10.a318f57d.jpg","a318f57dc154cf6d2bf27211075ca7f8"],["/static/media/tribes11.3792ba15.jpg","3792ba150f21c35993d89c22121e7e6f"],["/static/media/tribes12.59d2d9d3.jpg","59d2d9d3b0987b2b12eeba2cabec37c6"],["/static/media/tribes13.ccada5f9.jpg","ccada5f96222b6ebecb9efb7cc11f78b"],["/static/media/tribes14.353133b0.jpg","353133b066fde735a2703765538f0cbf"],["/static/media/tribes2.c24a2e5b.jpg","c24a2e5b1176dc52889b448a4463bd1a"],["/static/media/tribes3.e8bb54a9.jpg","e8bb54a9e828c6d8634919875a6c49d6"],["/static/media/tribes4.d4fe24d0.jpg","d4fe24d083f62285f14a9d1a4679aaa4"],["/static/media/tribes5.ca62f75b.jpg","ca62f75b30c5c27c6fd4dd6607e18fe6"],["/static/media/tribes6.46de7409.jpg","46de74095c44a61138166a6395cc9c0f"],["/static/media/tribes7.e7000355.jpg","e70003555ae1f75b80c3fa8beb083567"],["/static/media/tribes8.64048925.jpg","64048925f50966c249dd14ac81fb02ed"],["/static/media/tribes9.2f24a5c4.jpg","2f24a5c436bb8bd46499af0d9e69ef9a"],["/static/media/utahrenaissancefaire.72e3e51b.png","72e3e51b97911594df09a71772d48d44"],["/static/media/utahvalleyuniversity.c1d73d23.jpg","c1d73d23dd7920246e9e832404c1499e"],["/static/media/uvu1.bcb688d9.jpg","bcb688d9310f27487afb54d23f9b4a99"],["/static/media/uvu10.f545e7d2.jpg","f545e7d2044c150834b112935255fffd"],["/static/media/uvu11.2484db47.jpg","2484db47ef85a4029633834561718075"],["/static/media/uvu12.e39d227c.jpg","e39d227cd5b0b7722725411d41a6bb7d"],["/static/media/uvu13.65e9e971.jpg","65e9e97165630c2eb6f27c8fa20045ca"],["/static/media/uvu14.0f32e2dc.jpg","0f32e2dcb662c20fc0260a3ef191acd8"],["/static/media/uvu2.8eb1dbbc.jpg","8eb1dbbcbdcbfcc289570858d12ca3bc"],["/static/media/uvu3.3d51f425.jpg","3d51f42596ed380fdcc0033fd3410c6b"],["/static/media/uvu4.5184335b.jpg","5184335b36ab557562a5022c5ed8c4a5"],["/static/media/uvu5.d3d01f05.jpg","d3d01f05f5ca035815e8479efafbdfec"],["/static/media/uvu6.a59dad61.jpg","a59dad6186a4bc66a72f8804c3cfadb2"],["/static/media/uvu7.c0911003.jpg","c0911003de9069dab4704c5ed717fc39"],["/static/media/uvu8.4121cd52.jpg","4121cd5235f3f9f4c26b8840abde1e82"],["/static/media/uvu9.56b29c09.jpg","56b29c093a304be66e1829f160a77d4e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});