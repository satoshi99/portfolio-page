import { Button, Flex, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export const SuccessView = () => {
  const router = useRouter()
  return (
    <Flex minH="100vh" direction="column" pt="28" align="center">
      <Heading textAlign="center" mb="20" fontSize="5xl">
        Thank You For Your Message
      </Heading>
      <Text textAlign="center">
        Thank you for your message.
        <br /> I will get in touch you on Email. Please wait a reply.
      </Text>
      <Button
        variant="link"
        mt="20"
        colorScheme="blue"
        onClick={() => router.reload()}
      >
        Back to Contact Form
      </Button>
    </Flex>
  )
}
