import React from 'react'
import { Text, Box, Link, Stack, Icon, HStack } from '@chakra-ui/react'
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
import TrainerProfile from './TrainerProfile'

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
        <TrainerProfile />
        <ReviewsSection reviewData={reviewData} ratingSummary={ratingSummary} />
      </Stack>
    </Box>
  )
}

const BreadcrumbSection = () => {
  return (
    <HStack alignItems="center">
      <NextLink
        href={{
          pathname: '/',
        }}
        passHref
      >
        <Link>Home</Link>
      </NextLink>
      <Icon as={BiChevronRight} mt="2px !important" />
      <Text>react_js</Text>
    </HStack>
  )
}

export default Main
