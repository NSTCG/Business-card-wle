const CACHE = 'mindar-image-tracking-static-v1';
const files = [
    "index.html",
    "wonderland.min.js",
    "wasm-featuredetect.js",
    "vr-button.svg",
    "ar-button.svg",
    "WonderlandRuntime.wasm",
    "WonderlandRuntime.js",
    "WonderlandRuntime-simd.wasm",
    "WonderlandRuntime-simd.js",
    "WonderlandRuntime-threads.wasm",
    "WonderlandRuntime-threads.js",
    "WonderlandRuntime-threads.worker.js",
    "WonderlandRuntime-simd-threads.wasm",
    "WonderlandRuntime-simd-threads.js",
    "WonderlandRuntime-simd-threads.worker.js",
    "target0.png",
    "target1.png",
    "targets.mind",
    "json/final.txt",
    "json/ID_key(Json private).json",
    "json/JsonPublic.json",
    "sfx/click.wav",
    "sfx/unclick.wav",
    "tracking/qr.fset",
    "tracking/qr.fset3",
    "tracking/qr.iset",
];

self.addEventListener('install', event => {
    event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(files) ));
});
self.addEventListener('activate', event => {
    console.log('Service worker initialized.');
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    const base = url.pathname.split('?')[0];
    if(url.origin == location.origin && files.includes(base)) {
        event.respondWith(caches.match(base));
    }
});
