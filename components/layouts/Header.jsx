import { useState } from 'react'
import {
  Box,
  Flex,
  Text,
  Link,
  Button,
  Stack,
  Input,
  Avatar,
  Collapse,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import ColorModeSwitcher from './ColorModeSwitcher'

export default function Header() {
  const { isOpen, onToggle } = useDisclosure()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      color={useColorModeValue('gray.600', 'white')}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{
          base: 4,
          md: 8,
          lg: 10,
        }}
        bg={useColorModeValue('white', 'gray.900')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        align={'center'}
        justifyContent={'space-between'}
      >
        {/* Hamburger Icon */}
        <Flex ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        {/* Logo */}
        <Flex
          flex={{ base: 1, md: 'inherit' }}
          justify={{ base: 'center', md: 'start' }}
        >
          <NextLink
            href={{
              pathname: '/',
            }}
            passHref
          >
            <Text
              as={Link}
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
            >
              Logo
            </Text>
          </NextLink>
        </Flex>

        {/* Search Input field */}
        <Input
          placeholder="Search ..."
          bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
          border={0}
          _focus={{
            bg: 'whiteAlpha.300',
          }}
          display={{ base: 'none', md: 'block' }}
          w={'30%'}
        />

        {/* Buttons */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            alignItems="center"
            direction={'row'}
            spacing={3}
          >
            {isLoggedIn ? <LoggedInSection /> : <SignupSection />}
          </Stack>
          {/* Color Mode Switcher */}
          <ColorModeSwitcher />
        </Stack>
      </Flex>

      {/* Mobile Nav */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const SignupSection = () => {
  return (
    <>
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        href={'#'}
        colorScheme="teal"
        variant="outline"
      >
        Sign In
      </Button>
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        href={'#'}
        colorScheme="teal"
      >
        Sign Up
      </Button>
    </>
  )
}

const LoggedInSection = () => {
  return (
    <>
      <Button
        display={{ base: 'none', md: 'inline-flex' }}
        fontSize={'sm'}
        fontWeight={600}
        href={'#'}
        colorScheme="teal"
        variant="outline"
      >
        Enrollment
      </Button>
      <Avatar size="md" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
    </>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      <Button
        fontSize={'sm'}
        fontWeight={600}
        href={'#'}
        w="100%"
        colorScheme="teal"
        variant="outline"
      >
        Sign In
      </Button>
      <Button
        fontSize={'sm'}
        fontWeight={600}
        href={'#'}
        colorScheme="teal"
        w="100%"
      >
        Sign Up
      </Button>
    </Stack>
  )
}
