import { Box } from '@chakra-ui/react'
import Header from './Header'
import Footer from './Footer'

function PageLayout({ children }) {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      p={{
        base: 4,
        md: 8,
        lg: 12,
      }}
    >
      {children}
    </Box>
  )
}

export default PageLayout