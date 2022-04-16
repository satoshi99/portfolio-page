import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { ChakraLink } from '../../atoms/ChakraLink'
import { AuthForm } from '../../organisms/AuthForm'

export const AuthTemplate = () => {
  return (
    <Flex
      direction="column"
      minH="100vh"
      bgColor="teal.500"
      align="center"
      justify="center"
    >
      <Link href="/" passHref>
        <ChakraLink>
          <Text
            position="absolute"
            top="10"
            left="10"
            color="white"
            fontWeight="bold"
            fontSize="2xl"
          >
            Satoshi Tech Portfolio
          </Text>
        </ChakraLink>
      </Link>
      <Box
        bgColor="white"
        w={['xs', 'md']}
        p="10"
        borderRadius="xl"
        shadow="2xl"
      >
        <AuthForm />
      </Box>
    </Flex>
  )
}
