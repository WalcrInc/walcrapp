// hooks/useServiceWorker.js
import { useEffect } from 'react';

const useServiceWorker = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });

      navigator.serviceWorker.register('/sw.js').then((registration) => {
        registration.addEventListener('updatefound', () => {
          const installingWorker = registration.installing;
          if (installingWorker) {
            installingWorker.addEventListener('statechange', () => {
              if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New update available
                window.confirm('New update available! Click OK to refresh.') && window.location.reload();
              }
            });
          }
        });
      });
    }
  }, []);
};

export default useServiceWorker;
