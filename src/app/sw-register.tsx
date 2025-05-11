'use client';

import { useEffect } from 'react';

// Añadimos esta declaración para extender la interfaz Window
declare global {
  interface Window {
    workbox?: unknown;
  }
}

export default function SwRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator && typeof window !== 'undefined') {
      console.log('Service Worker is supported');
      
      // Log when service worker is ready
      navigator.serviceWorker.ready.then((registration) => {
        console.log('Service Worker is active:', registration.active);
      });
      
      // Check if service worker is controlled
      if (navigator.serviceWorker.controller) {
        console.log('Service Worker is controlling the page');
      }

      // Listen for controllerchange events
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('Service Worker controller changed');
      });

      // Log any errors
      navigator.serviceWorker.addEventListener('error', (event) => {
        console.error('Service Worker error:', event);
      });
    } else {
      console.warn('Service Workers are not supported in this browser');
    }
  }, []);

  return null;
}