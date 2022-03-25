import { Flex, Heading, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { ChakraLink } from '../../atoms/ChakraLink'
import { TagButton } from '../../atoms/buttons/TagButton'
import { Tag } from '../../../types/main'

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
      <Heading>Tags</Heading>

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
