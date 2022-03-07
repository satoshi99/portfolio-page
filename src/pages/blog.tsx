import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  ScaleFade,
  Text,
  VStack,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import { BlogSidebar } from '../components/BlogSidebar'
import { Layout } from '../components/Layout'
import { ChakraLink } from '../components/ChakraLink'
import { PostCard } from '../components/PostCard'
import bgImage from '../public/blog_bg.jpg'
import { useHandleScroll } from '../hooks/useHandleScroll'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { MotionBox } from '../components/MotionBox'

const Blog: NextPage = () => {
  const { scrollY, setScrollY } = useHandleScroll()

  return (
    <Layout title="Blog">
      <Flex direction="column" bgColor="darkBlue">
        <Box
          w="100%"
          h="100vh"
          bgImage={bgImage.src}
          bgSize="cover"
          position="relative"
        >
          <VStack
            alignItems="baseline"
            float="left"
            w={{ base: '100%', md: '80%' }}
            pt="200"
            px={{ base: '50', md: '100' }}
            color="white"
          >
            <Heading fontSize="5xl" color="yellow.200">
              Blog Title {scrollY}
            </Heading>
            <Text fontSize="2xl">
              Blog Post description Blog Post description Blog Post description
              Blog Post description Blog Post description Blog Post description
              Blog Post description Blog Post description
            </Text>
            <NextLink href="/" passHref>
              <ChakraLink>
                <Text fontSize="xl" _hover={{ color: 'whiteAlpha.600' }}>
                  continue reading ...
                </Text>
              </ChakraLink>
            </NextLink>
          </VStack>
          <ScaleFade in={scrollY < 50}>
            <Flex
              direction="column"
              position="absolute"
              w="100%"
              bottom="100"
              color="white"
              fontSize="3xl"
              alignItems="center"
            >
              <Text bgColor="blackAlpha.700" px="2">
                more articles
              </Text>
              <MotionBox
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'loop',
                  repeatDelay: 1,
                }}
              >
                <ArrowDownIcon bgColor="blackAlpha.700" rounded="full" />
              </MotionBox>
            </Flex>
          </ScaleFade>
        </Box>

        <Flex direction="column">
          <Grid templateColumns="repeat(4, 1fr)">
            <GridItem
              colSpan={{ base: 4, md: 3 }}
              zIndex="sticky"
              ml="10"
              mt="-44"
            >
              <Grid templateColumns="repeat(2, 1fr)" gap="5">
                <ScaleFade in={scrollY > 100}>
                  <GridItem colSpan={{ base: 2, sm: 1 }}>
                    <PostCard href="/" />
                  </GridItem>
                </ScaleFade>
                <ScaleFade in={scrollY > 300}>
                  <GridItem colSpan={{ base: 2, sm: 1 }}>
                    <PostCard href="/" />
                  </GridItem>
                </ScaleFade>
                <GridItem colSpan={{ base: 2, sm: 1 }}>
                  <PostCard href="/" />
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem colSpan={{ base: 4, md: 1 }} color="white">
              <BlogSidebar />
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Blog
