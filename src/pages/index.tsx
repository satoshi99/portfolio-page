import type { NextPage } from 'next'
import NextLink from 'next/link'
import { Flex } from '@chakra-ui/react'

import { Hero } from '../components/Hero'

import bgImage from '../public/index_bg.jpg'
import { Layout } from '../components/Layout'

const Index: NextPage = () => (
  <Layout title="Welcome">
    <Flex direction="column" bgImage={bgImage.src} height="100vh">
      <Hero />
    </Flex>
  </Layout>
)

export default Index
