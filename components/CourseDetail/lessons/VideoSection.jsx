import React from 'react'
import { Flex, Stack, AspectRatio } from '@chakra-ui/react'
import LessonsSection from './LessonsSection'
import { lessons } from '../../../data/courses'

const VideoSection = () => {
  return (
    <Flex direction={{ base: 'column', lg: 'row' }} mb={{ base: 5, md: 1 }}>
      {/* Left Video Panel */}
      <AspectRatio w={{ base: '100%', lg: '70%' }} ratio={18 / 9}>
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>

      {/* Right Lessons List */}
      <Stack
        mt={{ base: 5, md: 0 }}
        ml={{ base: 0, md: 5 }}
        w={{ base: '100%', lg: '30%' }}
      >
        <LessonsSection lessons={lessons} />
      </Stack>
    </Flex>
  )
}

export default VideoSection
