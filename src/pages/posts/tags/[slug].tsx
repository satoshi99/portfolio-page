import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
} from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { dehydrate, QueryClient, useQueryClient } from 'react-query'
import { Pagination } from '../../../components/molecules/Pagination'
import { TagList } from '../../../components/organisms/TagList'
import { Layout } from '../../../components/organisms/Layout'
import { getTagWithPosts } from '../../../hooks/useQueryTagPosts'
import { getTags } from '../../../hooks/useQueryTags'
import { Post, Tag } from '../../../types/post'
import { AiFillTag } from 'react-icons/ai'

type TagWithPosts = Tag & {
  posts: Post[]
}

export const getStaticPaths: GetStaticPaths = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('tags', getTags)
  const tags = queryClient.getQueryData<Tag[]>('tags')
  const paths = tags?.map((tag) => ({
    params: { slug: tag.slug },
  }))
  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('tagWithPosts', () =>
    getTagWithPosts(params.slug as string)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  }
}

const TaggedPosts: NextPage = () => {
  const queryClient = useQueryClient()
  const tagWithPosts = queryClient.getQueryData<TagWithPosts>('tagWithPosts')
  const tags = queryClient.getQueryData<Tag[]>('tags')

  return (
    <Layout title={`Posts list tagged with ${tagWithPosts?.title}`}>
      <Flex direction="column" bgColor="gray.50" minH="100vh" w="full" p="5">
        <Grid templateColumns="repeat(4, 1fr)">
          <GridItem colSpan={{ base: 4, lg: 3 }} p={{ base: '10', lg: '16' }}>
            <Flex direction="row" mt={{ base: '10', lg: '0' }}>
              <Icon as={AiFillTag} w="6" h="6" mr="3" />
              <Heading color="gray.900" mb="10">
                {tagWithPosts?.title}
              </Heading>
            </Flex>
            {/* <PostList posts={tagWithPosts?.posts} /> */}
            <Box mt="10">
              <Pagination
                totalObj={50}
                numObjInPage={10}
                currentPage={2}
                onClick={null}
              />
            </Box>
          </GridItem>
          <GridItem
            colSpan={{ base: 4, lg: 1 }}
            py={{ base: '10', lg: '16' }}
            px={{ base: '10', lg: '0' }}
          >
            <Flex direction="row">
              <Divider
                orientation="vertical"
                height="100vh"
                mr="10"
                display={{ base: 'none', lg: 'inline-block' }}
              />
              <TagList tags={tags} />
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Layout>
  )
}

export default TaggedPosts
