import { Flex, Heading, Stack } from '@chakra-ui/react'
import { AiOutlineTags } from 'react-icons/ai'
import Link from 'next/link'
import { ChakraLink } from '../atoms/ChakraLink'
import { TagButton } from '../atoms/buttons/TagButton'
import { Tag } from '../../types/types'

export const TagList = () => {
  const tags: Tag[] = [
    {
      _id: '1',
      title: 'Python',
      slug: 'python',
      posts: [],
    },
    {
      _id: '2',
      title: 'Next.js',
      slug: 'nextjs',
      posts: [],
    },
    {
      _id: '3',
      title: 'Django REST Framework',
      slug: 'django-rest-framework',
      posts: [],
    },
  ]

  return (
    <Stack direction="column" alignItems="baseline">
      <Flex color="darkblue">
        <Heading mt="1.5" mr="2">
          <AiOutlineTags />
        </Heading>
        <Heading>Tags</Heading>
      </Flex>
      <Flex direction="row" wrap="wrap" gap="2">
        {tags?.map((tag) => (
          <Link key={tag._id} href={`/posts/tags/${tag.slug}`} passHref>
            <ChakraLink>
              <TagButton title={tag.title} />
            </ChakraLink>
          </Link>
        ))}
      </Flex>
    </Stack>
  )
}
