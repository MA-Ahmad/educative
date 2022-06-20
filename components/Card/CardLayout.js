import * as React from 'react'
import { Box } from '@chakra-ui/react'
import { courses } from './data'
import CourseCard from './CourseCard'
import CourseGrid from './CourseGrid'

const CardLayout = () => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{
      base: '4',
      md: '8',
      lg: '12',
    }}
    py={{
      base: '4',
      md: '8',
      lg: '12',
    }}
  >
    <CourseGrid>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </CourseGrid>
  </Box>
)

export default CardLayout
