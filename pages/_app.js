import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { GlobalStyles, theme } from "@/theme";
import { ThemeProvider } from "styled-components";
import { persistor, store } from "@/features/Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from 'react';
import useUpdateChecker from '../hooks/useUpdateChecker';
import UpdateBanner from '../components/UpdateBanner';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const { updateAvailable, applyUpdate } = useUpdateChecker();
  const [showUpdateBanner, setShowUpdateBanner] = useState(false);

  useEffect(() => {
    setShowUpdateBanner(updateAvailable);
  }, [updateAvailable]);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              newWorker.postMessage({ type: 'SKIP_WAITING' });
            }
          });
        });
      });
    }
  }, []);

  const handleUpdate = () => {
    applyUpdate();
    setShowUpdateBanner(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <ChakraProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
              <ReactQueryDevtools initialIsOpen={true} />
              {showUpdateBanner && <UpdateBanner onUpdate={handleUpdate} />}
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </ChakraProvider>
    </ThemeProvider>
  );
}