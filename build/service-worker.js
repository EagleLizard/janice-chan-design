"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","21c723ec53a17bb725b2ec53635e09c8"],["/static/css/main.39ee4cb6.css","0156abddf7a1a83d964e048518bdf4ce"],["/static/js/main.049a8304.js","4eedf948e96ff725e7175a81d76f4bc7"],["/static/media/BYU1.d6f43fef.jpg","d6f43fef15b094fcf06e1562e78dcac9"],["/static/media/BYU2.3087d784.jpg","3087d784d03b508f6ef769dfa676860d"],["/static/media/BYU3.95acbfc2.jpg","95acbfc2f78f5083376294b58379709a"],["/static/media/BYU4.22fe4617.jpg","22fe4617fbea5c6ff6f5c346db4ef8e9"],["/static/media/BYU5.bfb18e6b.jpg","bfb18e6b60b8ffb18979d3073c9b12f6"],["/static/media/BYU6.c324ecbc.jpg","c324ecbcd899708e9ee795bc2c1c94e6"],["/static/media/BYU7.95b68f23.jpg","95b68f236f3105bf04dd572865609688"],["/static/media/BYU8.8fdef4e5.jpg","8fdef4e52efc471977025704a22857a0"],["/static/media/BYU9.0824d3db.jpg","0824d3db2575f7f3f81fa40ad4858316"],["/static/media/Shield1.3535d899.png","3535d89944ae72f757361a579df8d36b"],["/static/media/Shield2.d8ed6da2.png","d8ed6da287d818b3369e1efa887b8cae"],["/static/media/Shield3.591eae1d.png","591eae1dd3b9d78f46717bf7a140517a"],["/static/media/Shield4.30e1602f.png","30e1602fff9c7ddb04ddda45bf0d5e89"],["/static/media/WebsiteLogo-min.8ff33f7e.png","8ff33f7e761aa32a68e340e3f60ffd0f"],["/static/media/WebsiteLogo-min.a799f0bc.png","a799f0bcbcfbef13e4055575ee93cfe3"],["/static/media/WebsiteLogo.0034d50d.png","0034d50df8441f0ca26b6e3d9d2fd633"],["/static/media/bigbird.3f0e22b3.jpg","3f0e22b38c54f421c864b202efae970a"],["/static/media/brighamyounguniversity.35e948c7.jpg","35e948c780590562e079ba1f90bca2fb"],["/static/media/janu.e3ea43d8.png","e3ea43d8ce7ecde6ed01cc4e8a496918"],["/static/media/lucy-liu.5db7e8cb.jpg","5db7e8cb48edea1dd5e10b63e23307ba"],["/static/media/renaissancenow.3cd483d4.jpg","3cd483d45d408fad77db77fff5c02e12"],["/static/media/renaissancenow1.219ac96e.jpg","219ac96e83689b6f92b4d3f7b0261ab4"],["/static/media/renaissancenow2.7807adb6.jpg","7807adb68d0217191ea1d5c34898a47b"],["/static/media/renaissancenow3.4ffd8293.jpg","4ffd8293626e3abeb41a8ad4bbd9b52c"],["/static/media/renaissancenow4.03ed8516.jpg","03ed85161f0e85f2c115977ff06bcc57"],["/static/media/renaissancenow5.e1e243cc.jpg","e1e243cc7c1710641898ebed8333f6ef"],["/static/media/sundance1.8804b551.jpg","8804b5514dbe2e7d18911ee172ef2d71"],["/static/media/sundance10.b24ea553.jpg","b24ea55386023540c6bcf327c941e65f"],["/static/media/sundance11.c51e062e.jpg","c51e062e7b2938ba721ef28f77889eaa"],["/static/media/sundance2.4ead0c46.jpg","4ead0c461a0b0fd4267562aa0892b556"],["/static/media/sundance3.1bdd548b.jpg","1bdd548b2bf3ab3f314b0c0f2de24e98"],["/static/media/sundance4.d388002f.jpg","d388002f549c60df4c3e2dc8822a1ded"],["/static/media/sundance5.1c5e676f.jpg","1c5e676f1e3225980ac3b50bbf36c822"],["/static/media/sundance6.0c6af2a7.jpg","0c6af2a7d2a27e023734e5661755d43f"],["/static/media/sundance7.ac6167e4.jpg","ac6167e4082498509d0da60e7038c8c9"],["/static/media/sundance8.194b4e60.jpg","194b4e601e1fae8405c5b1d9370714d9"],["/static/media/sundance9.600e6ee7.jpg","600e6ee77bd7ef3ae738b0a3b7e9f85f"],["/static/media/sundancesummertheatre.a3c44a2b.jpg","a3c44a2bd96c0d9b1ca1682ce510f765"],["/static/media/utahrenaissancefaire.071358c9.png","071358c95b73562dbd15369e16a963dd"],["/static/media/utahvalleyuniversity.63640d15.jpg","63640d1549b060b29c30ef5e60202966"],["/static/media/uvu1.d28d9d4c.jpg","d28d9d4cf6d76f112d478b2acec8d85d"],["/static/media/uvu10.7e4c5197.jpg","7e4c519754948f730e02d9d0cfc5fb60"],["/static/media/uvu11.d5769d18.jpg","d5769d18174fbdf546e0c7ba9199e3b9"],["/static/media/uvu12.1ba08c7b.jpg","1ba08c7b875c2c6a530c8798caf5c97f"],["/static/media/uvu13.a64d43c9.jpg","a64d43c9b8a2f5a59fe63f235aeba72e"],["/static/media/uvu14.9931c9e6.jpg","9931c9e679361d27377664a7f921c55a"],["/static/media/uvu2.316b3d48.jpg","316b3d486d185fd2e7a95a12701a4100"],["/static/media/uvu3.2aafdd29.jpg","2aafdd29a98ad92fb6aed564e8a30ec0"],["/static/media/uvu4.2d4b840e.jpg","2d4b840e91bf441cd16af05e7eb755ee"],["/static/media/uvu5.2e3609a3.jpg","2e3609a3889327257d7e320bf9e79ddc"],["/static/media/uvu6.eff7f04d.jpg","eff7f04da02336126fac0cc62f91e56a"],["/static/media/uvu7.bfa195f9.jpg","bfa195f9d933eb88ab3a7826075b11ff"],["/static/media/uvu8.9d546143.jpg","9d546143a6a9e0d58d64c9b738ed525a"],["/static/media/uvu9.ee0da36a.jpg","ee0da36a67d8397183217aa5e7b4731c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var d=new URL(e);return c&&d.pathname.match(c)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),d=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),d]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});