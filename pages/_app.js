import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyles, theme } from "@/theme";
import { ThemeProvider } from "styled-components";
import { persistor, store } from "@/features/Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
              <ReactQueryDevtools initialIsOpen={true} />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      </ChakraProvider>
    </ThemeProvider>

    // </ChakraProvider>
  );
}
