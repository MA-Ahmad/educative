import React from 'react'
import { Box } from '@chakra-ui/react'
import TopBar from './TopBar'
import VideoSection from './VideoSection'
import TabsSection from './TabsSection'

const Main = () => {
  return (
    <Box>
      <TopBar />
      <VideoSection />
      <TabsSection />
    </Box>
  )
}

export default Main
