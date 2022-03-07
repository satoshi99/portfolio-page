import { Button, Flex, Heading, Stack } from '@chakra-ui/react'
import { AiOutlineTags } from 'react-icons/ai'
import Link from 'next/link'
import { ChakraLink } from './ChakraLink'

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
        <Link href="/" passHref>
          <ChakraLink>
            <Button
              size="xs"
              variant="outline"
              _hover={{ bgColor: 'white', color: 'black' }}
            >
              Next.js
            </Button>
          </ChakraLink>
        </Link>
        <Link href="/" passHref>
          <ChakraLink>
            <Button
              size="xs"
              variant="outline"
              _hover={{ bgColor: 'white', color: 'black' }}
            >
              Python
            </Button>
          </ChakraLink>
        </Link>
        <Link href="/" passHref>
          <ChakraLink>
            <Button
              size="xs"
              variant="outline"
              _hover={{ bgColor: 'white', color: 'black' }}
            >
              Django REST Framework
            </Button>
          </ChakraLink>
        </Link>
      </Flex>
    </Stack>
  )
}
