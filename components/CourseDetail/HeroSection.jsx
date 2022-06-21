import React from 'react'
import {
  chakra,
  Text,
  Box,
  Image,
  Button,
  HStack,
  Stack,
  Flex,
  Icon,
  Avatar,
  Divider,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import Badge from '../Card/Badge'
import { BsClock, BsBarChartLine } from 'react-icons/bs'
import { MdLanguage } from 'react-icons/md'
import { FaPlay, FaStar } from 'react-icons/fa'

const HeroSection = () => {
  const textColor = useColorModeValue('gray.600', 'gray.400')

  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={10}
      justifyContent="space-between"
      mb={10}
      w="100%"
    >
      <Stack spacing={5} mt={5} w={{ base: '100%', md: '60%' }}>
        <chakra.h1 fontSize="3xl" fontWeight="bold">
          React JS Basics
        </chakra.h1>
        <Text fontWeight="medium" color={textColor} noOfLines={2}>
          React js is a javascript library and useful in building interfaces
        </Text>
        <Stack spacing="2" direction="row" alignItems="center">
          <Avatar src="" size="sm" />

          <Text fontWeight="medium" color={textColor}>
            Trainer Name
          </Text>
        </Stack>
        <Stack direction="row" alignItems="center">
          <HStack>
            <Icon as={FaStar} color="yellow.400" />
            <Text fontSize="sm" color={textColor}>
              4.4 (12 Reviews)
            </Text>
          </HStack>
          <chakra.span>|</chakra.span>
          <Text fontSize="sm" color={textColor}>
            100 Enrollments
          </Text>
        </Stack>
        <Divider />
        <Flex direction="row" mt={2} flexWrap="wrap">
          <Badge icon={MdLanguage} data="English" size="md" />
          <Badge icon={BsBarChartLine} data="Intermediate" size="md" />
          <Badge icon={BsClock} data="01H:30M" size="md" />
          <Badge icon={BsClock} data="01H:30M" size="md" />
          <Badge icon={BsClock} data="01H:30M" size="md" />
        </Flex>
      </Stack>
      <Stack spacing={2} w={{ base: '100%', md: '40%' }}>
        <Text
          fontWeight="medium"
          color={textColor}
          noOfLines={2}
          textAlign="center"
        >
          Text container
        </Text>
        <Button
          w={{ base: '100%', sm: 'auto' }}
          h={12}
          px={6}
          size="lg"
          rounded="md"
          mb={{ base: 2, sm: 0 }}
          zIndex={5}
          lineHeight={1}
          colorScheme="teal"
        >
          Enroll Now (Free)
        </Button>
        <Box
          position="relative"
          height="200px"
          rounded="2xl"
          boxShadow="2xl"
          width="full"
          overflow="hidden"
          _after={{
            content: '""',
            bg: 'black',
            filter: 'blur(5px)',
            position: 'absolute',
            w: '100%',
            bottom: '0',
            height: '70',
            borderRadius: '5px',
          }}
        >
          <IconButton
            aria-label="Play Button"
            colorScheme="teal"
            icon={<FaPlay />}
            rounded="full"
            size="lg"
            color="white"
            position="absolute"
            left="50%"
            top="50%"
            _hover={{ shadow: 'md' }}
            transform="translateX(-50%) translateY(-50%)"
          />
          <Image
            alt="Hero Image"
            fit="cover"
            align="center"
            w="100%"
            h="100%"
            src={
              'https://die54k.fra1.a.restack.io/assets/d05a08aa-f0ec-40a2-8ebe-c4d49a779a05'
            }
          />
        </Box>
      </Stack>
    </Stack>
  )
}

export default HeroSection
