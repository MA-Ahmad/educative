import React from 'react'
import { chakra, Box, Flex } from '@chakra-ui/react'
import Badge from '../shared/Badge'

const SkillsSection = ({ skills }) => {
  return (
    <Box>
      <chakra.h1 fontSize="3xl" fontWeight="bold" mb={4}>
        Skills You Will Gain
      </chakra.h1>
      <Flex direction="row" mt={2} flexWrap="wrap">
        {skills.map((skill, index) => (
          <Badge data={skill} size="md" key={index} />
        ))}
      </Flex>
    </Box>
  )
}

export default SkillsSection
