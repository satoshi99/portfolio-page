import type { NextPage } from 'next'
import { Flex, Heading } from '@chakra-ui/react'

import bgImage from '../public/index_bg.jpg'
import { Layout } from '../components/templates/Layout'

const Index: NextPage = () => (
  <Layout title="Welcome">
    <Flex direction="column" w="full" bgImage={bgImage.src} height="100vh">
      <Flex
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
      >
        <Heading fontSize={{ base: '8vw', md: '6vw' }}>
          Satoshi Tech Portfolio
        </Heading>
      </Flex>
    </Flex>
  </Layout>
)

export default Index
