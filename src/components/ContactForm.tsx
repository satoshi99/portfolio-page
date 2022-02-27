import {
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { FormEvent, Dispatch, SetStateAction } from 'react'

type Props = {
  name: string
  setName: Dispatch<SetStateAction<string>>
  email: string
  setEmail: Dispatch<SetStateAction<string>>
  message: string
  setMessage: Dispatch<SetStateAction<string>>
  step: number
  setStep: Dispatch<SetStateAction<number>>
}

export const ContactForm = ({
  name,
  setName,
  email,
  setEmail,
  message,
  setMessage,
  step,
  setStep,
}: Props) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setStep(step + 1)
  }

  return (
    <Flex minH="100vh" direction="column" pt="28" align="center">
      <Heading textAlign="center" mb="20" fontSize="5xl">
        Contact Form
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack direction="column" fontSize="lg">
          <Flex>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Flex>
          <Flex>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Flex>
          <Flex direction="column">
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </Flex>
        </Stack>
        <Button type="submit" w="100%" mt="10" colorScheme="blue">
          CONFIRM
        </Button>
      </form>
    </Flex>
  )
}
