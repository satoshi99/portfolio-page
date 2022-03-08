import {
  Box,
  Grid,
  GridItem,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import { Layout } from '../../components/templates/Layout'
import type { NextPage } from 'next'
import { PostSidebar } from '../../components/templates/post/PostSidebar'
import { PostContent } from '../../components/templates/post/PostContent'

const PostDetail: NextPage = () => {
  const headerBgColor = useColorModeValue(
    'linear(to-r, blue.300, yellow.400, red.200)',
    'linear(to-r, purple.900, teal.800, yellow.900)'
  )
  const sidebarBgColor = useColorModeValue('blue.50', 'blue.900')
  const contentBgColor = useColorModeValue('white', 'gray.900')

  return (
    <Layout title="post detail">
      <Box pt="24" pb="16" px="10" bgGradient={headerBgColor}>
        <Heading>Post Title</Heading>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" minH="100vh">
        <GridItem colSpan={{ base: 4, md: 1 }} bgColor={sidebarBgColor}>
          <PostSidebar />
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 3 }} bgColor={contentBgColor}>
          <PostContent />
        </GridItem>
      </Grid>
    </Layout>
  )
}

export default PostDetail
