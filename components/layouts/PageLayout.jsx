import { Box } from '@chakra-ui/react'

function PageLayout({ children }) {
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{
        base: 4,
        md: 8,
        lg: 10,
      }}
      py={{
        base: 4,
        md: 8,
      }}
    >
      {children}
    </Box>
  )
}

export default PageLayout
