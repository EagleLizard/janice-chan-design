"use strict";var precacheConfig=[["/index.html","9d4c5842e4e44e8085b5b4c2792ad92a"],["/static/css/main.98787612.css","9c92e452c02221aded4a58bd5f9fd2e9"],["/static/js/main.3dae18fe.js","633d2b120506cd2da83d5a1502b5acd2"],["/static/media/BYU1.96ba9cc2.jpg","96ba9cc217d9ae63586d6bf355827893"],["/static/media/BYU2.02251151.jpg","022511511f00d406fe4b1b39fab8d247"],["/static/media/BYU3.eebb5e8f.jpg","eebb5e8fb6f8b4c9a48755d5d39816a6"],["/static/media/BYU4.b56dc132.jpg","b56dc1326915a493a568f69ab71491c3"],["/static/media/BYU5.544bcccd.jpg","544bcccd2fae6b0186b605be75787234"],["/static/media/BYU6.1cff156e.jpg","1cff156ef8ef79b01967f9e2f6084f1e"],["/static/media/BYU7.c79e5af5.jpg","c79e5af5d4f6d1a199070d32e9505c3b"],["/static/media/BYU8.f287c269.jpg","f287c269c7ed55c7f4346ee2765d396c"],["/static/media/BYU9.948aa050.jpg","948aa05020c88dc409909b895d74f4c6"],["/static/media/Shield1.8ade1738.png","8ade17386fe7b819d7faabc1ccdfb58f"],["/static/media/Shield2.4c35efa7.png","4c35efa728e1f883b4a5b4e4203eb06b"],["/static/media/Shield3.ee6d40eb.png","ee6d40ebc6603938b6fcb3ab01df335c"],["/static/media/Shield4.ec29a4ae.png","ec29a4ae7967e7be80ef1a8b60920adb"],["/static/media/renaissancenow1.809e9df0.jpg","809e9df02904ab2633d46c3e1993d17a"],["/static/media/renaissancenow2.776686ed.jpg","776686edce180f5fabc86176e886c51d"],["/static/media/renaissancenow3.bf9df66e.jpg","bf9df66e389c6530156baf35871074c9"],["/static/media/renaissancenow4.cfb5747a.jpg","cfb5747aad7d63d28bc1bce1a9b1b4ab"],["/static/media/renaissancenow5.b9844300.jpg","b98443005c33409d1d24ac3120651100"],["/static/media/sundance1.58605434.jpg","5860543403dda124e556b178ab40342e"],["/static/media/sundance10.94a43374.jpg","94a43374bcc62ffa312bfc7311486a6b"],["/static/media/sundance11.07fc938b.jpg","07fc938b9f2d908a2d45d789e6b8db7b"],["/static/media/sundance2.e5fe7ebe.jpg","e5fe7ebe969b356a3cc0054c7f87dbcc"],["/static/media/sundance3.7869e076.jpg","7869e0768dccbf60c133c4ae2bd9ade5"],["/static/media/sundance4.7bfa87ba.jpg","7bfa87ba67bcb4072fab28c91a9d7060"],["/static/media/sundance5.3e6e7ebd.jpg","3e6e7ebd4ad76d6486363b62fb7c3e14"],["/static/media/sundance6.795d6b9a.jpg","795d6b9ad6c110fb43e1465e80e3c54d"],["/static/media/sundance7.4a7c01d1.jpg","4a7c01d1c6f844bd6a52ede65de0193f"],["/static/media/sundance8.71ca0b69.jpg","71ca0b692dc262df9dcdc4d82e75fb96"],["/static/media/sundance9.11a276a7.jpg","11a276a74adf0629ab11eae9c74e46a4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});