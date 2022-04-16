import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react'
import { useState } from 'react'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AuthInputs } from '../../types/admin'
import { ChakraLink } from '../atoms/ChakraLink'

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
    <>
      <Heading textAlign="center" mb="10" fontSize={['2xl', '4xl']}>
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
                  minLength: {
                    value: 7,
                    message: 'Password must be more than 7 characters',
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
        <Flex direction="column" float="right" mt="5">
          <Link href="admin/reset-password" passHref>
            <ChakraLink color="blue.500" _hover={{ opacity: '0.5' }}>
              Reset Password
            </ChakraLink>
          </Link>
        </Flex>
        <Button
          type="submit"
          w="100%"
          mt="10"
          colorScheme="teal"
          disabled={!isValid}
          isLoading={isSubmitting}
        >
          LOG IN
        </Button>
      </form>
    </>
  )
}
