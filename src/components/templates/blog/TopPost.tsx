import { Heading, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { ChakraLink } from '../../atoms/ChakraLink'
import { Post } from '../../../types/post'

type Props = {
  topPost: Post
}

export const TopPost = ({ topPost }: Props) => {
  return (
    <Stack
      alignItems="baseline"
      float="left"
      w={{ base: '100%', lg: '80%' }}
      pt="200"
      px={{ base: '50', md: '100' }}
      color="white"
    >
      <Heading fontSize="5xl" color="yellow.200">
        {topPost.title}
      </Heading>
      <Text fontSize="2xl">{topPost.description}</Text>
      <Link href={`/posts/${topPost.url_slug}`} passHref>
        <ChakraLink>
          <Text fontSize="xl" _hover={{ color: 'whiteAlpha.600' }}>
            continue reading ...
          </Text>
        </ChakraLink>
      </Link>
    </Stack>
  )
}
