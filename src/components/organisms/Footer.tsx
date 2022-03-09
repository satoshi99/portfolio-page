import Link from 'next/link'
import { Flex, Text } from '@chakra-ui/react'
import { ChakraLink } from '../atoms/ChakraLink'

export const Footer = () => {
  return (
    <Flex
      as="footer"
      w="100%"
      h="300"
      bgColor="teal.900"
      color="white"
      alignItems="center"
      align="center"
      justify="center"
    >
      <Link href="/policy" passHref>
        <ChakraLink>
          <Text _hover={{ color: 'whiteAlpha.600' }}>Privacy Policy</Text>
        </ChakraLink>
      </Link>
    </Flex>
  )
}
