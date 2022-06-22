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
import VerticalDivider from '../shared/VerticalDivider'

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
      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <chakra.h3
          fontSize="lg"
          fontWeight="bold"
          display={{ base: 'none', md: 'block' }}
        >
          Course Content
        </chakra.h3>
        <VerticalDivider display={{ base: 'none', md: 'block' }} />
        <chakra.h3 fontSize="lg" fontWeight="bold">
          {lessons.length} Sections
        </chakra.h3>
        <VerticalDivider />
        <chakra.h3 fontSize="lg" fontWeight="bold">
          02H:30M
        </chakra.h3>
      </Stack>

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
              <Stack direction="column" spacing={4}>
                {lesson.content.map((content, index) => (
                  <Flex
                    direction={{ base: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems={{ base: 'flex-start', sm: 'center' }}
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
                    <HStack mt={{ base: 2, sm: 0 }}>
                      <Button colorScheme="teal" size="xs">
                        Preview
                      </Button>
                      <VerticalDivider height="15px" />
                      {/* <chakra.span>|</chakra.span> */}
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
