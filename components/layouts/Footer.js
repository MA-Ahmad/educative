import {
  Box,
  chakra,
  Link,
  Stack,
  Text,
  Divider,
  Center,
  SimpleGrid,
  VisuallyHidden,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Stack
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
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>Logo</Box>
            <Text fontSize={'sm'}>© 2022 All rights reserved</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact us</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Testimonials</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Satus</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact us</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Testimonials</Link>
          </Stack>
        </SimpleGrid>
      </Stack>
      <Divider />
      <Center
        maxW="7xl"
        mx="auto"
        px={{
          base: 4,
          md: 8,
          lg: 10,
        }}
        py={{
          base: 4,
          md: 6,
        }}
      >
        <Stack direction="column" alignItems="center">
          <Text textAlign="center">
            Education’s purpose is to replace an empty mind with an open one -
            Malcolm Forbes
          </Text>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
        </Stack>
      </Center>
    </Box>
  )
}

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}
