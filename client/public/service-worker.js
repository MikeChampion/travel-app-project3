const CACHE_NAME = "static-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/logo192.png",
    "/logo512.png",
    "/manifest.json",
    "tailwind.config.js",
    "/manifest.webmanifest",
    "favicon.ico"
    ];

    self.addEventListener("install", function (evt) {

        evt.waitUntil(
            caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
        );
    
        // self.skipWaiting();
    });

    