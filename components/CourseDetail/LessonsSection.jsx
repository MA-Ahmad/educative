import React from 'react'
import {
  chakra,
  Box,
  Icon,
  Text,
  Button,
  Flex,
  Stack,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const lessons = [
  {
    id: 1,
    title: 'section 1 - Introduction',
    content: [{ title: 'Welcome to the course' }, { title: 'What is Reactjs' }],
  },
  {
    id: 2,
    title: 'section 2 - Fundamentals',
    content: [{ title: 'Fundamentals detail ' }],
  },
  {
    id: 3,
    title: 'section 3 - Advance topics',
    content: [{ title: 'What is usememo' }],
  },
]

const LessonsSection = () => {
  return (
    <Box>
      <chakra.h1 fontSize="3xl" fontWeight="bold" mb={4}>
        Lessons
      </chakra.h1>
      <Accordion defaultIndex={[0]} allowMultiple>
        {lessons.map((lesson, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton>
                <AccordionIcon />
                <Box flex="1" textAlign="left" fontWeight="bold">
                  {lesson.title}
                </Box>
                {lesson.content.length}{' '}
                {`Lesson${lesson.content.length > 1 ? 's' : ''}`} | 10 min
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack direction="column">
                {lesson.content.map((content, index) => (
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    key={index}
                  >
                    <HStack>
                      <Icon
                        as={BsFillPlayCircleFill}
                        w={5}
                        h={5}
                        color="teal"
                      />
                      <chakra.h2 fontSize="lg" fontWeight="500">
                        {index + 1}) {content.title}
                      </chakra.h2>
                    </HStack>
                    <HStack>
                      <Button colorScheme="teal" size="xs">
                        Preview
                      </Button>
                      <chakra.span>|</chakra.span>
                      <Text>5 min</Text>
                    </HStack>
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
