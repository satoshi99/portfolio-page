import { Button, Flex, Heading, Stack } from '@chakra-ui/react'
import { AiOutlineTags } from 'react-icons/ai'
import NextLink from 'next/link'
import { Link } from './Link'

export const TagList = () => {
  return (
    <Stack direction="column" alignItems="baseline">
      <Flex color="yellow.200">
        <Heading mt="1.5" mr="2">
          <AiOutlineTags />
        </Heading>
        <Heading>Tags</Heading>
      </Flex>
      <Flex direction="row" wrap="wrap" gap="2">
        <NextLink href="/" passHref>
          <Link>
            <Button
              size="xs"
              variant="outline"
              _hover={{ bgColor: 'white', color: 'black' }}
            >
              Next.js
            </Button>
          </Link>
        </NextLink>
        <NextLink href="/" passHref>
          <Link>
            <Button
              size="xs"
              variant="outline"
              _hover={{ bgColor: 'white', color: 'black' }}
            >
              Python
            </Button>
          </Link>
        </NextLink>
        <NextLink href="/" passHref>
          <Link>
            <Button
              size="xs"
              variant="outline"
              _hover={{ bgColor: 'white', color: 'black' }}
            >
              Django REST Framework
            </Button>
          </Link>
        </NextLink>
      </Flex>
    </Stack>
  )
}
