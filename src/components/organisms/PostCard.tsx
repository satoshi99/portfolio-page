import { Box, Divider, Heading, Stack, Tag, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { Post } from '../../types/post'
import { ChakraLink } from '../atoms/ChakraLink'
import { DateFormat } from './DateFormat'

type Props = {
  post: Post
}

export const PostCard = ({ post }: Props) => {
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
                  {post?.tags.map((tag) => (
                    <Tag key={tag.id} size="sm" variant="solid">
                      {tag.title}
                    </Tag>
                  ))}
                </Stack>
                <DateFormat date={post?.updated_at} />
              </Stack>
            </Box>
          </Box>
        </ChakraLink>
      </Link>
      <Divider my="3" />
    </>
  )
}
