import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { GlobalStyles, theme } from "@/theme";
import { ThemeProvider } from "styled-components";
import { persistor, store } from "@/features/Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { ImageProvider } from "@/Components/Capture/ImageContext";
import { ImageProvider } from "@/components/Capture/ImageContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <ChakraProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <ImageProvider>
                <Component {...pageProps} />
              </ImageProvider>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </ChakraProvider>
    </ThemeProvider>
  );
}
