import React, { useState } from 'react'
import {
  chakra,
  Box,
  Icon,
  Text,
  Flex,
  Stack,
  HStack,
  Progress,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react'
import VerticalDivider from '../../shared/VerticalDivider'
import { FaRegHandPointRight } from 'react-icons/fa'
import { TiTickOutline } from 'react-icons/ti'

const LessonsSection = ({ lessons }) => {
  const [selectedId, setSelectedId] = useState(0)

  return (
    <Box>
      <Box mb={3}>
        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
          <Heading icon={FaRegHandPointRight} text="Current Lesson - 1" />
          <VerticalDivider />
          <Heading icon={TiTickOutline} text="Completed Lessons - 2/2" />
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Progress value={20} size="xs" colorScheme="yellow" w="90%" />
          <chakra.span>20%</chakra.span>
        </Stack>
      </Box>

      <Accordion defaultIndex={[0]} allowMultiple h="21rem" overflowY="scroll">
        {lessons.map((lesson, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <AccordionIcon />
                <Box flex="1" textAlign="left" fontWeight="bold" fontSize="sm">
                  {lesson.title}
                </Box>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  alignItems="center"
                  fontSize="sm"
                >
                  <chakra.span>
                    {lesson.content.length}{' '}
                    {`Lesson${lesson.content.length > 1 ? 's' : ''}`}
                  </chakra.span>
                  <VerticalDivider
                    height="15px"
                    display={{ base: 'none', sm: 'block' }}
                  />{' '}
                  <chakra.span>10 min</chakra.span>
                </Stack>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack direction="column" spacing={2}>
                {lesson.content.map((content, index) => (
                  <Flex
                    key={index}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    w="100%"
                  >
                    <HStack
                      bg={
                        selectedId === content.id ? 'teal.400' : 'transparent'
                      }
                      w="90%"
                      p={2}
                      cursor="pointer"
                      onClick={() => setSelectedId(content.id)}
                    >
                      <Flex direction="column">
                        <chakra.h2 fontSize="md" fontWeight="500">
                          {index + 1}) {content.title}
                        </chakra.h2>
                        <chakra.span pl={4}>{content.duration}</chakra.span>
                      </Flex>
                    </HStack>
                    <Checkbox colorScheme="teal" />
                  </Flex>
                ))}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  )
}

const Heading = ({ icon, text }) => {
  return (
    <Flex alignItems="center">
      <Icon as={icon} w={4} h={4} />
      <Text fontSize="xs" fontWeight="500" textTransform="uppercase" ml={1}>
        {text}
      </Text>
    </Flex>
  )
}

export default LessonsSection
