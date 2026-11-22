// 預覽版已併入正式版：清掉預覽版的快取並停用自己
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("maddog-preview")).map(k => caches.delete(k)))).then(() => self.registration.unregister())); });
