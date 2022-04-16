import { ChevronRightIcon } from '@chakra-ui/icons'
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
import Link from 'next/link'
import { Post } from '../../types/post'
import { Layout } from '../organisms/Layout'
import { TOC } from '../organisms/TOC'
import { PostText } from '../organisms/PostText'

type Props = {
  // post: Post
  headerImg: StaticImageData
}

export const PostContentTemplate = ({ headerImg }: Props) => {
  const contentBgColor = useColorModeValue('white', 'gray.900')
  return (
    <Layout title="post detail">
      <Box h="md" w="full" bgImage={headerImg.src} bgSize="cover">
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
