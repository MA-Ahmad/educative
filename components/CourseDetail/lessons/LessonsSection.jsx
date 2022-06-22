import React, { useState } from 'react'
import {
  chakra,
  Box,
  Icon,
  Text,
  Button,
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
import { BsFillPlayCircleFill } from 'react-icons/bs'
import VerticalDivider from '../../shared/VerticalDivider'
import NextLink from 'next/link'

const LessonsSection = ({ lessons }) => {
  const [selectedId, setSelectedId] = useState(0)

  return (
    <Box>
      <Box mb={4}>
        <Stack direction="row" spacing={2} alignItems="center" mb={2}>
          <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            fontWeight="500"
            textTransform="uppercase"
          >
            Current Lesson - 1
          </Text>
          <VerticalDivider />
          <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            fontWeight="500"
            textTransform="uppercase"
          >
            Completed Lessons - 2/2
          </Text>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Progress value={20} size="xs" colorScheme="yellow" w="90%" />
          <chakra.span>20%</chakra.span>
        </Stack>
      </Box>

      <Accordion defaultIndex={[0]} allowMultiple>
        {lessons.map((lesson, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <AccordionIcon />
                <Box flex="1" textAlign="left" fontWeight="bold">
                  {lesson.title}
                </Box>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  alignItems="center"
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
                      p={3}
                      cursor="pointer"
                      onClick={() => setSelectedId(content.id)}
                    >
                      <chakra.h2 fontSize="lg" fontWeight="500">
                        {index + 1}) {content.title}
                      </chakra.h2>
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

export default LessonsSection
