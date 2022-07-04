import React from 'react'
import { Container } from '@chakra-ui/react'
import TopBar from './TopBar'
import VideoSection from './VideoSection'
import TabsSection from './TabsSection'

const Main = () => {
  return (
    <Container maxWidth="6xl">
      <TopBar />
      <VideoSection />
      <TabsSection />
    </Container>
  )
}

export default Main
