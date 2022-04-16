import type { GetStaticProps, NextPage } from 'next'
import { getTags } from '../hooks/useQueryTags'
import { getPublicPosts } from '../hooks/useQueryPublicPosts'
import { dehydrate, QueryClient, useQueryClient } from 'react-query'
import { Post, Tag } from '../types/post'
import { BlogTemplate } from '../components/templates/BlogTemplate'

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('publicPosts', getPublicPosts)
  await queryClient.prefetchQuery('tags', getTags)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  }
}

const Blog: NextPage = () => {
  const queryClient = useQueryClient()
  const publicPosts = queryClient.getQueryData<Post[]>('publicPosts')
  const tags = queryClient.getQueryData<Tag[]>('tags')

  return <BlogTemplate posts={publicPosts} tags={tags} />
}

export default Blog
