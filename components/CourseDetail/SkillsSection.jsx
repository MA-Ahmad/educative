import React from 'react'
import { chakra, Box, Flex } from '@chakra-ui/react'
import Badge from '../Card/Badge'
import { BsClock, BsBarChartLine } from 'react-icons/bs'
import { MdLanguage } from 'react-icons/md'

const SkillsSection = () => {
  return (
    <Box>
      <chakra.h1 fontSize="3xl" fontWeight="bold" mb={4}>
        Skills You Will Gain
      </chakra.h1>
      <Flex direction="row" mt={2} flexWrap="wrap">
        <Badge icon={MdLanguage} data="English" size="md" />
        <Badge icon={BsBarChartLine} data="Intermediate" size="md" />
        <Badge icon={BsClock} data="01H:30M" size="md" />
      </Flex>
    </Box>
  )
}

export default SkillsSection
