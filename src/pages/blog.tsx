import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import { BlogSidebar } from '../components/BlogSidebar'
import { Layout } from '../components/Layout'
import { Link } from '../components/Link'
import { PostCard } from '../components/PostCard'
import bgImage from '../public/blog_bg.jpg'

const Blog: NextPage = () => {
  return (
    <Layout title="Blog">
      <Flex minH="100vh" direction="column" bgColor="darkBlue">
        <Box w="100%" h="100vh" bgImage={bgImage.src} bgSize="cover">
          <VStack
            alignItems="baseline"
            float="left"
            w="100%"
            pt="200"
            px={{ md: '50', lg: '100' }}
            color="white"
          >
            <Heading fontSize="5xl" color="yellow.200">
              Blog Title
            </Heading>
            <Text fontSize="2xl">
              Blog description --------------------------------------------
            </Text>
            <NextLink href="/" passHref>
              <Link>
                <Text fontSize="xl" _hover={{ color: 'whiteAlpha.600' }}>
                  continue reading ...
                </Text>
              </Link>
            </NextLink>
          </VStack>
        </Box>
        <Flex>
          <Box w="75%" bg="transparent" zIndex="sticky" ml="10" mt="-44">
            <Grid templateColumns="repeat(2, 1fr)" gap="5">
              <GridItem colSpan={1}>
                <PostCard href="/" />
              </GridItem>
              <GridItem colSpan={1}>
                <PostCard href="/" />
              </GridItem>
              <GridItem colSpan={1}>
                <PostCard href="/" />
              </GridItem>
            </Grid>
          </Box>
          <Box color="white" maxW="25%">
            <BlogSidebar />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Blog
