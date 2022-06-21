import React from 'react'
import {
  Box,
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { BiChevronRight } from 'react-icons/bi'

const Main = () => {
  return (
    <Box>
      <BreadcrumbSection />
    </Box>
  )
}

const BreadcrumbSection = () => {
  return (
    <Breadcrumb spacing="8px" separator={<BiChevronRight color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">react_js</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default Main
