import {
  Box,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChakraLink } from './ChakraLink'
import thumbnail from '../public/index_bg.jpg'

type Props = {
  href: string
}

export const PostCard = ({ href }: Props) => {
  const readTime = 15
  const bgColor = useColorModeValue('white', 'black')
  const dateAndTimeColor = useColorModeValue('gray.500', 'gray.400')

  return (
    <NextLink href={href} passHref>
      <ChakraLink>
        <Box bgColor={bgColor} boxShadow="lg" rounded="xl" overflow="hidden">
          <Box _hover={{ opacity: '0.8' }}>
            <Image
              src={thumbnail.src}
              fallbackSrc="https://via.placeholder.com/300x200"
              objectFit="fill"
              alt="thumbnail"
            />
            <Stack direction="column" p="3">
              <Heading fontSize="3xl">Blog Post Title</Heading>
              <Text>
                Blog Post description Blog Post description Blog Post
                description Blog Post description Blog Post description Blog
                Post description Blog Post description Blog Post description
              </Text>
              <Stack direction="row">
                <Tag size="sm" variant="solid" colorScheme="blue">
                  Python
                </Tag>
                <Tag size="sm" variant="solid" colorScheme="blue">
                  Next.js
                </Tag>
                <Tag size="sm" variant="solid" colorScheme="blue">
                  Django REST Framework
                </Tag>
              </Stack>
              <Text color={dateAndTimeColor} textAlign="right" fontSize="sm">
                Aug 12, 2022 - {readTime} min read
              </Text>
            </Stack>
          </Box>
        </Box>
      </ChakraLink>
    </NextLink>
  )
}
