import React from 'react'
import { chakra, Box, List, ListItem, ListIcon } from '@chakra-ui/react'
import { AiFillCheckCircle } from 'react-icons/ai'

const FeaturesSection = () => {
  return (
    <Box>
      <chakra.h1 fontSize="3xl" fontWeight="bold" mb={4}>
        What You Will Learn
      </chakra.h1>
      <List spacing={3}>
        {[
          'How to install React JS',
          'How to write code',
          'All the JSX elements and tags',
          'Yarn vs NPM packages',
        ].map((item, index) => {
          return (
            <ListItem key={index}>
              <ListIcon as={AiFillCheckCircle} color="green.500" />
              {item}
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

export default FeaturesSection
