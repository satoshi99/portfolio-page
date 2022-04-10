import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { dehydrate, QueryClient, useQueryClient } from 'react-query'
import { Pagination } from '../../../components/organisms/Pagination'
import { PostList } from '../../../components/templates/blog/PostList'
import { TagList } from '../../../components/templates/blog/TagList'
import { Layout } from '../../../components/templates/Layout'
import { getTagWithPosts } from '../../../hooks/useQueryTagPosts'
import { getTags, useQueryTags } from '../../../hooks/useQueryTags'
import { Post, Tag } from '../../../types/post'

type TagWithPosts = {
  tag: Tag
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
  // const tags = queryClient.getQueryData<Tag[]>('tags')

  return (
    <Layout title="Tagged">
      <Flex direction="column" bgColor="teal.500" minH="100vh" p="5">
        <Grid templateColumns="repeat(4, 1fr)">
          <GridItem colSpan={{ base: 4, lg: 3 }} p={{ base: '10', lg: '16' }}>
            <PostList posts={tagWithPosts?.posts} />
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
            {/* <TagList tags={tags} /> */}
          </GridItem>
        </Grid>
      </Flex>
    </Layout>
  )
}

export default TaggedPosts
