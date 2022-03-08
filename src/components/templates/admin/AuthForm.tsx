import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AuthInputs } from '../../../types/types'

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<AuthInputs>({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const onSubmit: SubmitHandler<AuthInputs> = async (data) => {
    try {
      await console.log(data)
    } catch (e) {
      alert(e.message)
    }
  }
  return (
    <Flex
      direction="column"
      minH="100vh"
      bgColor="teal.500"
      align="center"
      justify="center"
    >
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
      <Box bgColor="white" w="lg" p="10" borderRadius="xl" shadow="2xl">
        <Heading textAlign="center" mb="14">
          Admin User Login
        </Heading>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={5}>
            <FormControl isInvalid={errors.email ? true : false}>
              <Input
                type="email"
                placeholder="Email"
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is requried',
                  },
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password ? true : false}>
              <InputGroup>
                <Input
                  type={show ? 'text' : 'password'}
                  placeholder="Password"
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is requried',
                    },
                  })}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>
          <Button
            type="submit"
            w="100%"
            mt="20"
            colorScheme="teal"
            disabled={!isValid}
            isLoading={isSubmitting}
          >
            CONFIRM
          </Button>
        </form>
      </Box>
    </Flex>
  )
}
