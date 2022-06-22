import React from 'react'
import {
  Box,
  Link,
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { BiChevronRight } from 'react-icons/bi'
import HeroSection from './HeroSection'
import LessonsSection from './LessonsSection'
import FeaturesSection from './FeaturesSection'
import SkillsSection from './SkillsSection'
import OverviewSection from './OverviewSection'
import ReviewsSection from './ReviewSection'
import NextLink from 'next/link'
import {
  courses,
  lessons,
  features,
  skills,
  reviewData,
  ratingSummary,
  overviewDescription,
} from '../../data/courses'

const Main = () => {
  return (
    <Box>
      <BreadcrumbSection />
      <HeroSection course={courses[0]} />
      <Stack spacing={10} maxW="3xl">
        <LessonsSection lessons={lessons} />
        <FeaturesSection features={features} />
        <SkillsSection skills={skills} />
        <OverviewSection description={overviewDescription} />
        <ReviewsSection reviewData={reviewData} ratingSummary={ratingSummary} />
      </Stack>
    </Box>
  )
}

const BreadcrumbSection = () => {
  return (
    <Breadcrumb spacing="8px" separator={<BiChevronRight color="gray.500" />}>
      <BreadcrumbItem>
        <NextLink
          href={{
            pathname: '/',
          }}
          passHref
        >
          <BreadcrumbLink as={Link}>Home</BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">react_js</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default Main
