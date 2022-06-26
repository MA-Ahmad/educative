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
      pt={{
        base: 4,
        md: 8,
      }}
      pb={{
        base: 10,
        md: 16,
      }}
    >
      {children}
    </Box>
  )
}

export default PageLayout
