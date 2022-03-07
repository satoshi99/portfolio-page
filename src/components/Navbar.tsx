import Link from 'next/link'
import { Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react'
import { DarkModeSwitch } from './DarkModeSwitch'
import { ChakraLink } from './ChakraLink'

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
      <Link href="/" passHref>
        <ChakraLink>
          <Heading size="md" _hover={{ color: 'whiteAlpha.600' }}>
            Satoshi Tech Portfolio
          </Heading>
        </ChakraLink>
      </Link>
    </HStack>
    <Spacer />
    <HStack spacing="5">
      <Link href="/blog" passHref>
        <ChakraLink>
          <Text _hover={{ color: 'whiteAlpha.600' }}>Blog</Text>
        </ChakraLink>
      </Link>
      <Link href="/contact" passHref>
        <ChakraLink>
          <Text _hover={{ color: 'whiteAlpha.600' }}>Contact</Text>
        </ChakraLink>
      </Link>
      <DarkModeSwitch />
    </HStack>
  </Flex>
)
