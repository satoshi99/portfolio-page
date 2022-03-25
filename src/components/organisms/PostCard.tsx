import { Box, Divider, Heading, Stack, Tag, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChakraLink } from '../atoms/ChakraLink'

type Props = {
  href: string
}

export const PostCard = ({ href }: Props) => {
  const readTime = 15

  return (
    <>
      <NextLink href={href} passHref>
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
                  Blog Post Title
                </Heading>
                <Text>
                  Blog Post description Blog Post description Blog Post
                  description Blog Post description Blog Post description Blog
                  Post description Blog Post description Blog Post description
                </Text>
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
      </NextLink>
      <Divider my="3" />
    </>
  )
}
