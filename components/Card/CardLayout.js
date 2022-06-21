import * as React from 'react'
import { courses } from './data'
import CourseCard from './CourseCard'
import CourseGrid from './CourseGrid'

const CardLayout = () => (
  <CourseGrid>
    {courses.map((course) => (
      <CourseCard key={course.id} course={course} />
    ))}
  </CourseGrid>
)

export default CardLayout
