import React from 'react'
import { chakra, Stack, Icon, HStack } from '@chakra-ui/react'
import VerticalDivider from '../../shared/VerticalDivider'
import { FaReact, FaChalkboardTeacher, FaRegFolderOpen } from 'react-icons/fa'
import { BsClock } from 'react-icons/bs'

const data = [
  { text: 'REACT JS BASICS', icon: FaReact },
  { text: 'NAGS', icon: FaChalkboardTeacher },
  { text: 'TOTAL LESSONS - 5', icon: FaRegFolderOpen },
  { text: 'TOTAL DURATION - 02H:30M', icon: BsClock },
]

const TopBar = () => {
  return (
    <Stack
      direction={{ base: 'column', sm: 'row' }}
      spacing={5}
      alignItems={{ base: 'flex-start', sm: 'center' }}
      justifyContent="center"
      mb={6}
      flexWrap="wrap"
      divider={<VerticalDivider display={{ base: 'none', sm: 'block' }} />}
    >
      {data.map((item, index) => (
        <BarItem key={index} icon={item.icon} text={item.text} />
      ))}
    </Stack>
  )
}

const BarItem = ({ icon, text }) => {
  return (
    <HStack spacing={3}>
      <Icon as={icon} w={5} h={5} />
      <chakra.h3 fontSize="md" fontWeight="bold">
        {text}
      </chakra.h3>
    </HStack>
  )
}

export default TopBar
