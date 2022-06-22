import React from 'react'
import { Flex, Stack, AspectRatio } from '@chakra-ui/react'
import LessonsSection from './LessonsSection'
import { lessons } from '../../../data/courses'

const VideoSection = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} mb={5}>
      {/* Left Video Panel */}
      <AspectRatio w={{ base: '100%', md: '60%' }} ratio={16 / 9}>
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
        w={{ base: '100%', md: '40%' }}
      >
        <LessonsSection lessons={lessons} />
      </Stack>
    </Flex>
  )
}

export default VideoSection
