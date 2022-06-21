import React from 'react'
import {
  Icon,
  Flex,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const PaginationContainer = () => {
  return <Pagination />
}

const Pagination = () => {
  const mobileViewPages = [1, 2]
  const desktopViewPages = [1, 2, 3, 4]

  const pages = useBreakpointValue({
    base: mobileViewPages,
    sm: desktopViewPages,
  })

  return (
    <Flex
      as="nav"
      aria-label="Pagination"
      w="full"
      justify="flex-start"
      alignItems="center"
      mt={{ base: 5, md: 10 }}
    >
      <PaginationButton
        borderTopLeftRadius="md"
        borderBottomLeftRadius="md"
        isDisabled
      >
        <Icon as={FaChevronLeft} w={3} h={3} />
      </PaginationButton>
      {pages.map((pageNo, index) => (
        <PaginationButton key={index} isActive={pageNo === 1}>
          {pageNo}
        </PaginationButton>
      ))}
      <PaginationButton borderTopRightRadius="md" borderBottomRightRadius="md">
        <Icon as={FaChevronRight} w={3} h={3} />
      </PaginationButton>
    </Flex>
  )
}

const PaginationButton = ({ children, isDisabled, isActive, ...props }) => {
  const activeStyle = {
    bg: useColorModeValue('gray.300', 'gray.700'),
  }

  return (
    <Flex
      p={3}
      px={4}
      fontSize="md"
      fontWeight="500"
      lineHeight={0.8}
      opacity={isDisabled && 0.7}
      _hover={!isDisabled && activeStyle}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      border="1px solid"
      mr="-1px"
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      {...(isActive && activeStyle)}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default PaginationContainer
