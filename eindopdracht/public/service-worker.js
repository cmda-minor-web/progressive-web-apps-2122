
// Maintain Cache Versions
const CURRENT_CACHES = {
    font: "google-font-cache-v3"
  };


  const cacheName = 'TMDB_Cache_v1';

  // Default files to always cache
const cacheFiles = [
    '/scripts/bundle.js',
	'/styles/style.css',
    '/manifest.json',
    '/pages/offline',
    'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap',
	'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,400italic,700italic'
]


// Call Install Event
self.addEventListener('install', e => {
	console.log('Service Worker: Installing');

	e.waitUntil(
		caches
			.open(cacheName)
			.then(cache => {
				console.log('Service Worker: Caching Files');
				return cache.addAll(cacheFiles);
			})
			.then(() => self.skipWaiting())
			.catch(err => console.log(err))
	);
});

// Call Activate Event
self.addEventListener('activate', e => {
	console.log('Serice Worker: Activated');
	e.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cache => {
					if (cache !== cacheName) {
						console.log('Service Worker: Clearing Old Cache');
						return caches.delete(cache);
					}
				})
			);
		})
	);
});

// Call Fetch event
self.addEventListener('fetch', e => {
	console.log('Service Worker: Fetching');
	e.respondWith(
		caches
			.match(e.request)
			.then(response => {
				if (response) {
					return response;
				}

				return fetch(e.request);
			})
			.catch(() => caches.match('/offline'))
	);
});



// self.addEventListener('install', (e) => {
//     console.log('[Service Worker] Install');
//   });


//   self.addEventListener('install', function(e) {
//     console.log('[ServiceWorker] Installed');

//     // e.waitUntil Delays the event until the Promise is resolved
//     e.waitUntil(

//     	// Open the cache
// 	    caches.open(cacheName).then(function(cache) {

// 	    	// Add all the default files to the cache
// 			console.log('[ServiceWorker] Caching cacheFiles');
// 			return cache.addAll(cacheFiles);
// 	    })
// 	); // end e.waitUntil
// });