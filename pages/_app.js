import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import theme from '../components/layouts/Theme'
import { ClerkProvider } from '@clerk/nextjs'
import ProgressBar from '../components/Util/ProgressBar'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ProgressBar />
      {/* <ClerkProvider {...pageProps}> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
      {/* </ClerkProvider> */}
    </ChakraProvider>
  )
}

export default MyApp
