import Link from 'next/link'
import { Flex, Text } from '@chakra-ui/react'
import { ChakraLink } from './ChakraLink'

export const Footer = () => {
  return (
    <Flex
      as="footer"
      w="100%"
      h="300"
      bgColor="darkBlue"
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
