import { ArrowDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Post, Tag } from '../../types/post'
import { ChakraLink } from '../atoms/ChakraLink'
import { MotionBox } from '../atoms/MotionBox'
import { Layout } from '../organisms/Layout'
import { Pagination } from '../molecules/Pagination'
import { PostCard } from '../organisms/PostCard'
import bgImage from '../../public/blog_bg.jpg'

type Props = {
  tags: Tag[]
  posts: Post[]
}

export const BlogTemplate = ({ tags, posts }: Props) => {
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
          {/* <TopPost topPost={topPost} /> */}

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
              {posts?.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
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
              <Stack direction="column" alignItems="baseline">
                <Heading>Tags</Heading>

                <Flex direction="row" wrap="wrap" gap="2">
                  {tags?.map((tag) => (
                    <Link
                      key={tag.id}
                      href={`/posts/tags/${tag.slug}`}
                      passHref
                    >
                      <ChakraLink>
                        <Button
                          size="xs"
                          variant="outline"
                          borderColor="black"
                          _hover={{ bgColor: 'black', color: 'white' }}
                        >
                          {tag.title}
                        </Button>
                      </ChakraLink>
                    </Link>
                  ))}
                </Flex>
              </Stack>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Layout>
  )
}
