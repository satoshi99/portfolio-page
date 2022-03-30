import { Box, Divider, Heading, Stack, Tag, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { Post } from '../../types/main'
import { ChakraLink } from '../atoms/ChakraLink'

type Props = {
  post: Post
}

export const PostCard = ({ post }: Props) => {
  const readTime = 15

  return (
    <>
      <Link href={post?.url_slug ? `posts/${post.url_slug}` : '#'} passHref>
        <ChakraLink>
          <Box
            overflow="hidden"
            _hover={{
              opacity: '0.7',
            }}
          >
            <Box>
              {/* <Image
              src={thumbnail.src}
              fallbackSrc="https://via.placeholder.com/300x200"
              objectFit="fill"
              alt="thumbnail"
            /> */}
              <Stack direction="column" p="3">
                <Heading fontSize="3xl" color="teal">
                  {post?.title}
                </Heading>
                <Text>{post?.description}</Text>
                <Stack direction="row">
                  <Tag size="sm" variant="solid">
                    Python
                  </Tag>
                  <Tag size="sm" variant="solid">
                    Next.js
                  </Tag>
                  <Tag size="sm" variant="solid">
                    Django REST Framework
                  </Tag>
                </Stack>
                <Text textAlign="right" fontSize="sm">
                  Aug 12, 2022 - {readTime} min read
                </Text>
              </Stack>
            </Box>
          </Box>
        </ChakraLink>
      </Link>
      <Divider my="3" />
    </>
  )
}
