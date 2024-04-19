import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyles, theme } from "@/theme";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    
      <ThemeProvider theme={theme}>
        <ChakraProvider>
        <Component {...pageProps} />
        </ChakraProvider>
     
       </ThemeProvider>
    
    // </ChakraProvider>
  );
}
