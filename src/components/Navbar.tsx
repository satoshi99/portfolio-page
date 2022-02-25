import NextLink from 'next/link'
import { Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react'
import { DarkModeSwitch } from './DarkModeSwitch'
import { Link } from './Link'

export const Navbar = () => (
  <Flex
    px="10"
    py="1"
    bgColor="blackAlpha.500"
    w="100%"
    position="fixed"
    zIndex="tooltip"
    color="white"
  >
    <HStack justifyContent="center">
      <NextLink href="/" passHref>
        <Link>
          <Heading size="md" _hover={{ color: 'whiteAlpha.600' }}>
            Satoshi Tech Portfolio
          </Heading>
        </Link>
      </NextLink>
    </HStack>
    <Spacer />
    <HStack spacing="5">
      <NextLink href="/blog" passHref>
        <Link>
          <Text _hover={{ color: 'whiteAlpha.600' }}>Blog</Text>
        </Link>
      </NextLink>
      <NextLink href="/contact" passHref>
        <Link>
          <Text _hover={{ color: 'whiteAlpha.600' }}>Contact</Text>
        </Link>
      </NextLink>
      <DarkModeSwitch />
    </HStack>
  </Flex>
)
