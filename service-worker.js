importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js");

workbox.routing.registerRoute(
({register}) => request.destination === 'image'),
new workbox.strategies.NetworkFirst()