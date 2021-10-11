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
    
    });

    
    self.addEventListener("fetch", function(evt) {
        if (evt.request.url.includes("/api")) {
            evt.respondWith(
                caches.open(DATA_CACHE_NAME).then(cache => {
                    return fetch(evt.request)
                    .then(response => {
                        if (response.status === 200) {
                            cache.put(evt.request.url, response.clone());
                        }
    
                        return response;
                    })
                    .catch(err => {
                        return cache.match(evt.request);
                    });
                }).catch(err => console.log(err))
            );
    
            return;
        }
        evt.respondWith(
            fetch(evt.request).cache(() => {
                return caches.match(evt.request).then(response => {
                    if (response) {
                        return response
                    }
                    if (evt.request.headers.get("accept").includes("text/html")){
                        return caches.match("/")
                    }
                })
            })
        );
    });