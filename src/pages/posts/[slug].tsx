import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Layout } from '../../components/organisms/Layout'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { PostText } from '../../components/organisms/PostText'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { TOC } from '../../components/organisms/TOC'

import headerImg1 from '../../public/post_header/post_header_1.jpg'
import headerImg2 from '../../public/post_header/post_header_2.jpg'
import headerImg3 from '../../public/post_header/post_header_3.jpg'
import headerImg4 from '../../public/post_header/post_header_4.jpg'
import { useQueryPublicPosts } from '../../hooks/useQueryPublicPosts'
import { dehydrate, QueryClient } from 'react-query'
import { getSinglePost } from '../../hooks/useQuerySinglePost'

const headerImgList = [headerImg1, headerImg2, headerImg3, headerImg4]
const headerImg =
  headerImgList[Math.floor(Math.random() * headerImgList.length)]

// export const getStaticPaths: GetStaticPaths = async () => {
//   const { data: posts } = await useQueryPublicPosts()
//   const paths = posts?.map((post) => ({
//     params: { slug: post.url_slug },
//   }))
//   return { paths, fallback: true }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const queryClient = new QueryClient()
//   const post = queryClient.prefetchQuery(
//     'singlePost',
//     getSinglePost(params.slug as string)
//   )
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//     revalidate: 3,
//   }
// }

const PostDetail: NextPage = () => {
  // const queryClient = new QueryClient()
  // const post = queryClient.getQueryData("singlePost")
  const contentBgColor = useColorModeValue('white', 'gray.900')

  return (
    <Layout title="post detail">
      <Box h="md" w="full" bgImage={headerImg1.src} bgSize="cover">
        <Flex
          direction="column"
          position="absolute"
          top="24"
          left="10"
          gap="5"
          color="white"
        >
          <Breadcrumb
            fontSize="sm"
            spacing="8px"
            separator={<ChevronRightIcon color="white" />}
          >
            <BreadcrumbItem>
              <Link href="/" passHref>
                <BreadcrumbLink>Home</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link href="/blog" passHref>
                <BreadcrumbLink>Blog</BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <Link href="c-slug" passHref>
                <BreadcrumbLink>
                  Augmented CycleGAN: Learning Many-to-Many Mappings from
                  Unpaired Data
                </BreadcrumbLink>
              </Link>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading w="70%">
            Augmented CycleGAN: Learning Many-to-Many Mappings from Unpaired
            Data
          </Heading>
          <Text fontFamily="monospace" fontWeight="bold" fontSize="md">
            March 12, 2022 - 15 min read
          </Text>
        </Flex>
        <Box h="full" bgColor="blackAlpha.500"></Box>
      </Box>
      <Flex
        direction="column"
        position="relative"
        w="full"
        minH="100vh"
        zIndex="toast"
        bgColor={contentBgColor}
        align="center"
      >
        <Box position="absolute" top="20" left="5">
          <TOC />
        </Box>
        <Flex direction="column" w="3xl" mt="20">
          <PostText />
        </Flex>
      </Flex>
    </Layout>
  )
}

export default PostDetail
