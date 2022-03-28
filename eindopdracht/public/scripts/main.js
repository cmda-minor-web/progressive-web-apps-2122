if('serviceWorker' in navigator) {

    navigator.serviceWorker.register('/service-worker.js')
console.log("service worker detected")
} else {
console.log("geen service worker bro")
}

