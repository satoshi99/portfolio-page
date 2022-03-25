import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Layout } from '../components/templates/Layout'
import { PostCard } from '../components/organisms/PostCard'
import bgImage from '../public/blog_bg.jpg'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { MotionBox } from '../components/atoms/MotionBox'
import { TopPost } from '../components/templates/blog/TopPost'
import { TagList } from '../components/templates/blog/TagList'
import { Pagination } from '../components/organisms/Pagination'

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

  const onClick = () => {
    return
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

        <Flex direction="column" minH="100vh" p="5">
          <Grid templateColumns="repeat(4, 1fr)">
            <GridItem colSpan={{ base: 4, lg: 3 }} p={{ base: '10', lg: '16' }}>
              <PostCard href="posts/a-slug" />
              <PostCard href="posts/b-slug" />
              <PostCard href="posts/d-slug" />
              <PostCard href="posts/c-slug" />
              <Box mt="10">
                <Pagination
                  totalObj={50}
                  numObjInPage={10}
                  currentPage={2}
                  onClick={onClick}
                />
              </Box>
            </GridItem>
            <GridItem
              colSpan={{ base: 4, lg: 1 }}
              py={{ base: '10', lg: '16' }}
              px={{ base: '10', lg: '0' }}
            >
              <TagList />
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Blog
