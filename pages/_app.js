import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import theme from "../components/layouts/Theme";
import { ClerkProvider } from "@clerk/nextjs";
import "../clerk.css";

function MyApp({ Component, pageProps }) {
  const customThemeOptions_dark = {
    general: {
      fontColor: "#FFFFFF",
      fontFamily:
        "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
    },
    // buttons: {
    //   fontColor: "#FFFFFF",
    //   fontFamily:
    //     "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
    // },
  };

  const customThemeOptions_light = {
    general: {
      fontColor: "#1A202C",
      fontFamily:
        "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
    },
    // buttons: {
    //   fontColor: "#1A202C",
    //   fontFamily:
    //     "-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol",
    // },
  };
  const { colorMode } = useColorMode();
  console.log("color", colorMode);

  // const themefun = () => {
  //   if (colorMode == "dark") {
  //     final_mode = customThemeOptions_dark;
  //     return final_mode;
  //   }

  //   if (colorMode == "dark") {
  //     final_mode = customThemeOptions_light;
  //     return final_mode;
  //   }
  // };

  return (
    <ChakraProvider theme={theme}>
      <ClerkProvider {...pageProps}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ClerkProvider>
    </ChakraProvider>
  );
}

export default MyApp;
