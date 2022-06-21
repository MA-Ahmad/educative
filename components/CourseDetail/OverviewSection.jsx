import React from 'react'
import { chakra, Box, Text } from '@chakra-ui/react'

const OverviewSection = () => {
  return (
    <Box>
      <chakra.h1 fontSize="3xl" fontWeight="bold" mb={4}>
        Overview
      </chakra.h1>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Text>
    </Box>
  )
}

export default OverviewSection
