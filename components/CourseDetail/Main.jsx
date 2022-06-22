import React from 'react'
import {
  Box,
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
import { reviewData, ratingSummary } from '../../data/courses'

const Main = () => {
  return (
    <Box>
      <BreadcrumbSection />
      <HeroSection />
      <Stack spacing={10} maxW="3xl">
        <LessonsSection />
        <FeaturesSection />
        <SkillsSection />
        <OverviewSection />
        <ReviewsSection reviewData={reviewData} ratingSummary={ratingSummary} />
      </Stack>
    </Box>
  )
}

const BreadcrumbSection = () => {
  return (
    <Breadcrumb spacing="8px" separator={<BiChevronRight color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">react_js</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default Main
