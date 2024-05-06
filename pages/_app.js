import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyles, theme } from "@/theme";
import { ThemeProvider } from "styled-components";
import { persistor, store } from "@/features/Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </ChakraProvider>
    </ThemeProvider>

    // </ChakraProvider>
  );
}
