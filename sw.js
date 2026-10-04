// Service Worker بسيط لتلبية شروط المتصفح لتثبيت التطبيق دون تخزين أوفلاين
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});