import { Button, Flex, Heading, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { ChakraLink } from '../../atoms/ChakraLink'
import { Tag } from '../../../types/post'

type Props = {
  tags: Tag[]
}

export const TagList = ({ tags }: Props) => {
  return (
    <Stack direction="column" alignItems="baseline">
      <Heading>Tags</Heading>

      <Flex direction="row" wrap="wrap" gap="2">
        {tags?.map((tag) => (
          <Link key={tag.id} href={`/posts/tags/${tag.slug}`} passHref>
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
  )
}
