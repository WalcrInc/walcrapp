// hooks/useUpdateChecker.js
import { useState, useEffect } from 'react';

const useUpdateChecker = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      let refreshing;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });

      const checkForUpdates = async () => {
        try {
          const registration = await navigator.serviceWorker.ready;
          await registration.update();
          if (registration.waiting) {
            setUpdateAvailable(true);
          }
        } catch (error) {
          console.error('Error checking for updates:', error);
        }
      };

      checkForUpdates();
      const intervalId = setInterval(checkForUpdates, 60 * 60 * 1000); // Check every hour

      return () => clearInterval(intervalId);
    }
  }, []);

  const applyUpdate = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        if (registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
      });
    }
  };

  return { updateAvailable, applyUpdate };
};

export default useUpdateChecker;