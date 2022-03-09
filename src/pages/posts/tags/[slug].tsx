import { Flex, Grid, GridItem, Heading, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { AiOutlineTags } from 'react-icons/ai'
import { PostCard } from '../../../components/organisms/PostCard'
import { TagList } from '../../../components/organisms/TagList'
import { PostList } from '../../../components/templates/blog/PostList'
import { Layout } from '../../../components/templates/Layout'

const TaggedPosts: NextPage = () => {
  return (
    <Layout title="Tagged">
      <Flex direction="column" bgColor="teal.500" minH="100vh">
        <Grid templateColumns="repeat(4, 1fr)">
          <GridItem>
            <TagList />
          </GridItem>
          <GridItem></GridItem>
        </Grid>
      </Flex>
    </Layout>
  )
}

export default TaggedPosts
