import { Flex, Grid, GridItem, Heading, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { TagList } from '../../../components/templates/blog/TagList'
import { Layout } from '../../../components/templates/Layout'

const TaggedPosts: NextPage = () => {
  return (
    <Layout title="Tagged">
      <Flex direction="column" bgColor="teal.500" minH="100vh">
        <Grid templateColumns="repeat(4, 1fr)">
          <GridItem>
            <TagList />
          </GridItem>
        </Grid>
      </Flex>
    </Layout>
  )
}

export default TaggedPosts
