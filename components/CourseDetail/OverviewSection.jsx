import React from 'react'
import { chakra, Box, Text } from '@chakra-ui/react'

const OverviewSection = ({ description }) => {
  return (
    <Box>
      <chakra.h1 fontSize="3xl" fontWeight="bold" mb={4}>
        Overview
      </chakra.h1>
      <Text>{description}</Text>
    </Box>
  )
}

export default OverviewSection
