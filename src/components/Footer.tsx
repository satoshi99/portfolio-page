import NextLink from 'next/link'
import { Flex, Text } from '@chakra-ui/react'
import { Link } from './Link'

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
      <NextLink href="/policy" passHref>
        <Link>
          <Text _hover={{ color: 'whiteAlpha.600' }}>Privacy Policy</Text>
        </Link>
      </NextLink>
    </Flex>
  )
}
