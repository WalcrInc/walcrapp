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
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();
const modaltheme = extendTheme({
  components: {
    Modal: {
      variants: {
        wide: {
          content: {
            maxWidth: ["95%", "95%", "95%"],
            minWidth: "95%",
            bg: "#00ff00"
          }
        }
      }
    }
  }
});
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer/>
      <ChakraProvider theme={modaltheme}>
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
