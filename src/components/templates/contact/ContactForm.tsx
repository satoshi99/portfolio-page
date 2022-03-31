import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormInputs } from '../../../types/contact'
import { SuccessView } from './SuccessPage'

export const ContactForm = () => {
  const [inputValues, setInputValues] = useState<FormInputs>()

  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm<FormInputs>({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      message: '',
      policyConfirm: false,
    },
  })

  const { isOpen, onOpen, onClose } = useDisclosure()

  const toast = useToast()
  const toastHandler = (errorMessage: string) => {
    toast({
      title: 'Submittion Failed',
      description: errorMessage,
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
  }

  const clickHandler = () => {
    setInputValues(getValues())
    onOpen()
  }

  const submitHandler: SubmitHandler<FormInputs> = async (data) => {
    try {
      await console.log(JSON.stringify(data))
    } catch (e) {
      toastHandler(e.message)
    }
    reset()
  }

  if (isSubmitted) {
    return <SuccessView />
  }

  return (
    <>
      <Heading textAlign="center" mb="10">
        Contact Form
      </Heading>

      <form noValidate>
        <Stack direction="column" spacing={5}>
          <FormControl isRequired isInvalid={errors.name ? true : false}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="name"
              bgColor="white"
              size="lg"
              {...register('name', {
                required: { value: true, message: 'Name is requried' },
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={errors.email ? true : false}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="guest@example.com"
              bgColor="white"
              size="lg"
              {...register('email', {
                required: {
                  value: true,
                  message: 'Email is requried',
                },
                pattern: {
                  value: /[\w\-._]+@[\w\-._]+\.[A-Za-z]+/,
                  message: 'Invalid Email adress',
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isRequired isInvalid={errors.message ? true : false}>
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder="Contact message..."
              bgColor="white"
              size="lg"
              {...register('message', {
                required: {
                  value: true,
                  message: 'Message is required',
                },
              })}
            />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            isRequired
            isInvalid={errors.policyConfirm ? true : false}
          >
            <Flex direction="row" gap={2}>
              <Checkbox
                defaultChecked={false}
                colorScheme="teal"
                {...register('policyConfirm', {
                  required: {
                    value: true,
                    message: 'You must confirm the Privacy Policy',
                  },
                })}
              />
              <FormLabel mt="2">I agree to the Privacy Policy</FormLabel>
            </Flex>
            <FormErrorMessage>
              {errors.policyConfirm && errors.policyConfirm.message}
            </FormErrorMessage>
          </FormControl>

          <Button
            type="button"
            w="100%"
            colorScheme="teal"
            disabled={!isValid}
            onClick={clickHandler}
          >
            CONFIRM
          </Button>
        </Stack>
      </form>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior="inside"
        size="xl"
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Confirm your inquiry</ModalHeader>
          <ModalBody>
            <Stack direction="column">
              <Box>
                <Text color="gray">Name</Text>
                <Divider />
                <Text>{inputValues?.name}</Text>
              </Box>

              <Box>
                <Text color="gray">Email</Text>
                <Divider />
                <Text>{inputValues?.email}</Text>
              </Box>

              <Box>
                <Text color="gray">Message</Text>
                <Divider />
                <Text>{inputValues?.message}</Text>
              </Box>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button type="button" onClick={onClose} mr={3}>
              BACK
            </Button>
            <form onSubmit={handleSubmit(submitHandler)}>
              <Button type="submit" colorScheme="teal" isLoading={isSubmitting}>
                SUBMIT
              </Button>
            </form>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
