import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  setName: Dispatch<SetStateAction<string>>
  setEmail: Dispatch<SetStateAction<string>>
  setMessage: Dispatch<SetStateAction<string>>
  setStep: Dispatch<SetStateAction<number>>
}

export const ThankPage = ({
  setName,
  setEmail,
  setMessage,
  setStep,
}: Props) => {
  const initialize = () => {
    setName('')
    setEmail('')
    setMessage('')
    setStep(0)
  }
  return (
    <Flex minH="100vh" direction="column" pt="28" align="center">
      <Heading textAlign="center" mb="20" fontSize="5xl">
        Thank You For Message
      </Heading>
      <Text textAlign="center">
        Thank you for your message.
        <br /> I will get in touch you on Email. Please wait a reply.
      </Text>
      <Button variant="link" onClick={initialize} mt="20" colorScheme="blue">
        Back to Contact Top
      </Button>
    </Flex>
  )
}
