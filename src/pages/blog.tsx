import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { BlogSidebar } from '../components/templates/blog/BlogSidebar'
import { Layout } from '../components/templates/Layout'
import { PostCard } from '../components/organisms/PostCard'
import bgImage from '../public/blog_bg.jpg'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { MotionBox } from '../components/atoms/MotionBox'
import { TopPost } from '../components/templates/blog/TopPost'

const Blog: NextPage = () => {
  const topPost = {
    _id: '1',
    title: 'Post Title',
    description:
      'Blog Post description Blog Post description Blog Post description Blog Post description Blog Post description Blog Post description Blog Post description Blog Post description',
    slug: 'top-post-slug',
    isPublic: true,
    tags: [],
  }

  return (
    <Layout title="Blog">
      <Flex direction="column">
        <Box
          w="100%"
          h="100vh"
          bgImage={bgImage.src}
          bgSize="cover"
          position="relative"
        >
          <TopPost topPost={topPost} />

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
        </Box>

        <Flex direction="column" bgColor="teal.500" minH="100vh">
          <Grid templateColumns="repeat(4, 1fr)">
            <GridItem
              colSpan={{ base: 4, lg: 3 }}
              zIndex="sticky"
              ml="10"
              mt="10"
            >
              <Heading color="darkblue" mb="5">
                TECHNOLOGY
              </Heading>

              <Grid
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(2, 1fr)',
                }}
                gap="5"
              >
                <GridItem colSpan={{ base: 2, sm: 1 }}>
                  <PostCard href="posts/a-slug" />
                </GridItem>

                <GridItem colSpan={{ base: 2, sm: 1 }}>
                  <PostCard href="posts/b-slug" />
                </GridItem>
                <GridItem colSpan={{ base: 2, sm: 1 }}>
                  <PostCard href="posts/d-slug" />
                </GridItem>

                <GridItem colSpan={{ base: 2, sm: 1 }}>
                  <PostCard href="posts/c-slug" />
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem colSpan={{ base: 4, lg: 1 }} color="white">
              <BlogSidebar />
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Blog
