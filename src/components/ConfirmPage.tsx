import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { FormEvent, Dispatch, SetStateAction } from 'react'

type Props = {
  name: string
  email: string
  message: string
  step: number
  setStep: Dispatch<SetStateAction<number>>
}

export const ConfirmPage = ({ name, email, message, step, setStep }: Props) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(name)
    console.log(email)
    console.log(message)
    setStep(step + 1)
  }

  return (
    <Flex minH="100vh" direction="column" pt="28" align="center">
      <Heading textAlign="center" mb="20" fontSize="5xl">
        Confirm Your Inquiry
      </Heading>
      <Text>Step: {step}</Text>
      <form onSubmit={handleSubmit}>
        <Stack direction="column" fontSize="lg">
          <Flex>
            <Text>Name</Text>
            <Text>{name}</Text>
          </Flex>
          <Flex>
            <Text>Email</Text>
            <Text>{email}</Text>
          </Flex>
          <Flex direction="column">
            <Text>Message</Text>
            <Text>{message}</Text>
          </Flex>
          <Button type="submit" w="100%" colorScheme="blue">
            SUBMIT
          </Button>
          <Button
            type="button"
            onClick={() => setStep(step - 1)}
            w="100%"
            variant="outline"
            colorScheme="gray"
          >
            BACK
          </Button>
        </Stack>
      </form>
    </Flex>
  )
}
