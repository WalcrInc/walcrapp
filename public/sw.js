if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>a(e,n),f={module:{uri:n},exports:r,require:t};s[n]=Promise.all(i.map((e=>f[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/SKt03ElYOhIFouSsKUGOz/_buildManifest.js",revision:"0699cab83de7c47501da69b06e816173"},{url:"/_next/static/SKt03ElYOhIFouSsKUGOz/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/2c796e83-4a83a331aa58c010.js",revision:"4a83a331aa58c010"},{url:"/_next/static/chunks/312-c1050505bff2391b.js",revision:"c1050505bff2391b"},{url:"/_next/static/chunks/315-e99a33fe907c2135.js",revision:"e99a33fe907c2135"},{url:"/_next/static/chunks/366-595574299323c631.js",revision:"595574299323c631"},{url:"/_next/static/chunks/441-5ff460678fd5c0d9.js",revision:"5ff460678fd5c0d9"},{url:"/_next/static/chunks/562-fe175bfa91eb2758.js",revision:"fe175bfa91eb2758"},{url:"/_next/static/chunks/664-ad0bdc10e05f98c5.js",revision:"ad0bdc10e05f98c5"},{url:"/_next/static/chunks/697-fab3d9b6238e1080.js",revision:"fab3d9b6238e1080"},{url:"/_next/static/chunks/71-912eb421232310ad.js",revision:"912eb421232310ad"},{url:"/_next/static/chunks/720-57be86bd60a85325.js",revision:"57be86bd60a85325"},{url:"/_next/static/chunks/871-2bdbb8b66b5a37ef.js",revision:"2bdbb8b66b5a37ef"},{url:"/_next/static/chunks/903-88f82493d4f51385.js",revision:"88f82493d4f51385"},{url:"/_next/static/chunks/967-e9cba0b985b4e0fd.js",revision:"e9cba0b985b4e0fd"},{url:"/_next/static/chunks/d9bc6bad-8cc9c2c3a9b2b428.js",revision:"8cc9c2c3a9b2b428"},{url:"/_next/static/chunks/framework-ab60ce50b7979761.js",revision:"ab60ce50b7979761"},{url:"/_next/static/chunks/main-390c6a51b7c85e39.js",revision:"390c6a51b7c85e39"},{url:"/_next/static/chunks/pages/_app-e1bc3eab854a60d7.js",revision:"e1bc3eab854a60d7"},{url:"/_next/static/chunks/pages/_error-f16efdb67263f024.js",revision:"f16efdb67263f024"},{url:"/_next/static/chunks/pages/add-cash-81e66d14f7610e3c.js",revision:"81e66d14f7610e3c"},{url:"/_next/static/chunks/pages/address-1fdab3919003fbdd.js",revision:"1fdab3919003fbdd"},{url:"/_next/static/chunks/pages/become_taskwalcr-a388974dd5131c93.js",revision:"a388974dd5131c93"},{url:"/_next/static/chunks/pages/card-92f02d13d33217b0.js",revision:"92f02d13d33217b0"},{url:"/_next/static/chunks/pages/dashboard-d99fd486052b920e.js",revision:"d99fd486052b920e"},{url:"/_next/static/chunks/pages/dashboard/activities-d3f4024064d856ae.js",revision:"d3f4024064d856ae"},{url:"/_next/static/chunks/pages/dashboard/profile-921d947e53e45894.js",revision:"921d947e53e45894"},{url:"/_next/static/chunks/pages/dashboard/services-e854a51b1bf8c263.js",revision:"e854a51b1bf8c263"},{url:"/_next/static/chunks/pages/find_service-cebce5d6546ee503.js",revision:"cebce5d6546ee503"},{url:"/_next/static/chunks/pages/find_taskworker-9a142d879ab0fff8.js",revision:"9a142d879ab0fff8"},{url:"/_next/static/chunks/pages/forgot-password-1270f20e99e1406c.js",revision:"1270f20e99e1406c"},{url:"/_next/static/chunks/pages/forgot-password/otp-cdefbf164b01ad3e.js",revision:"cdefbf164b01ad3e"},{url:"/_next/static/chunks/pages/help-c131e2e21905b18f.js",revision:"c131e2e21905b18f"},{url:"/_next/static/chunks/pages/index-c7ceda89761cb53f.js",revision:"c7ceda89761cb53f"},{url:"/_next/static/chunks/pages/login-be6a3f5c9af46c6d.js",revision:"be6a3f5c9af46c6d"},{url:"/_next/static/chunks/pages/message-07f8e59d64ee3295.js",revision:"07f8e59d64ee3295"},{url:"/_next/static/chunks/pages/onboarding-62ff3479b77d4581.js",revision:"62ff3479b77d4581"},{url:"/_next/static/chunks/pages/register-0725eec5f66a7f1f.js",revision:"0725eec5f66a7f1f"},{url:"/_next/static/chunks/pages/services-16d645c797aae836.js",revision:"16d645c797aae836"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-eeb1e4a6befe36e1.js",revision:"eeb1e4a6befe36e1"},{url:"/_next/static/css/2e2751e26baf52dd.css",revision:"2e2751e26baf52dd"},{url:"/_next/static/css/4f72e4bdff8ee70c.css",revision:"4f72e4bdff8ee70c"},{url:"/_next/static/css/e6e73a6e7dd7e168.css",revision:"e6e73a6e7dd7e168"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/images/Apple.svg",revision:"bcb69becf976d9e8adc70ec82d622796"},{url:"/images/Mastercard.svg",revision:"90ffa928693c5414d287ecc53b0eced2"},{url:"/images/Venmo.svg",revision:"5ff42642c865dfc79285f645675f5458"},{url:"/images/Visa.svg",revision:"bd6871616c0fbbc600bb4e75209bd2d2"},{url:"/images/Wallet.svg",revision:"96c003e979eee3ac301c52c96f24c3c4"},{url:"/images/address.svg",revision:"f8c75be00548b13dc841576724de684c"},{url:"/images/bike.svg",revision:"ce2b8ea0807ef6274b2c32ed7af71008"},{url:"/images/call.svg",revision:"109979a5b43c43d44a5ae5768e85b645"},{url:"/images/car.svg",revision:"fca09680668bfb9e6f409875346bba2e"},{url:"/images/chat.svg",revision:"febff3f60c1b184a31d015f5ae3e7ddb"},{url:"/images/discover.svg",revision:"406ec2dc5a8e926f0ad7539fabee9dcf"},{url:"/images/dress.png",revision:"e93d965c908e1701a40755ef44b58ede"},{url:"/images/dress.svg",revision:"d9d8f10a30651db0e81fc0b50aa51b70"},{url:"/images/help.svg",revision:"9318c06801919e81208cb31054cf4f4d"},{url:"/images/home.svg",revision:"e2f7bc4d59b4da15277d3820112f29ef"},{url:"/images/home1.png",revision:"2cef0bedb81aa55a79abeb4b9e922c87"},{url:"/images/home1.svg",revision:"9e694bb9e250b8b437eafccee6dfce98"},{url:"/images/home5.png",revision:"b392aa07377097314669acc872dae448"},{url:"/images/home5.svg",revision:"9ce302375b1f050a267def2f869eb415"},{url:"/images/icon.png",revision:"3e433654b54b35e18efb16e39bd22ff1"},{url:"/images/logo-144.png",revision:"bbff93405f263651e94bc62e5fe33fe8"},{url:"/images/logo-192.png",revision:"4a871145a832f52958b2da868565af60"},{url:"/images/logo-256.png",revision:"00a687e38ee99807ac22a955a5adb1ee"},{url:"/images/logo-512.png",revision:"10fbd720b613fe71a843d35ec3e0bccf"},{url:"/images/logo-square.png",revision:"8f311948ef09572d04d91586fbdee0be"},{url:"/images/logo.jpg",revision:"6666bf5d4f6c31616c5a7b72e4387e0a"},{url:"/images/logo.png",revision:"053cbaea1a7e08b33e9db4f65b18b379"},{url:"/images/map.svg",revision:"09a194c4a7c4e65153581d43a94ac5ac"},{url:"/images/master-card.svg",revision:"d20c3efb3d6e462cf4ee9678c7d25104"},{url:"/images/one.svg",revision:"9164f02911ce6465d2fe0fa69eca008d"},{url:"/images/overlay.svg",revision:"3c9b8523fd8fdee8267254d5c530675e"},{url:"/images/person.svg",revision:"ce955962963bdb79c999c7693dc4a158"},{url:"/images/profile.svg",revision:"cf2854e1e00f0d3195c70f4efcfd815d"},{url:"/images/screenshot-dashboard.png",revision:"24ec30c29f1452a6ee7f5268fd7f1bfb"},{url:"/images/screenshot-home.png",revision:"a364b9601bb785148ecafb253f7c69f2"},{url:"/images/takeout.svg",revision:"9365c34a3347821e998068bdf31f51d7"},{url:"/images/visa-card.svg",revision:"6f0eb383ff2c3fbba0c4b8bfe30660e5"},{url:"/images/walcr-l-144.png",revision:"682cc8435ffba1e44fcbbf428a5afb42"},{url:"/images/walcr-l-152.png",revision:"161d155b7fb4a84bbbf1c84e063226a4"},{url:"/images/walcr-l-180.png",revision:"1829902ac50942f9253948013169426c"},{url:"/images/walcr-l-192.png",revision:"c5fd09ac92b9746bb1ff1365fdb5e47e"},{url:"/images/walcr-l-256.png",revision:"0d23de982b52bf4a04f6f8f44b42019e"},{url:"/images/walcr-l-512.png",revision:"812a14b6f27fae23265db5b947fe88eb"},{url:"/manifest.json",revision:"231977d14a1768d301d520ef3dcce39d"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/test.json",revision:"48229e459ae61c55a92a3a46049344d5"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
