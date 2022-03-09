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
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AuthInputs } from '../../../types/types'
import { ChakraLink } from '../../atoms/ChakraLink'

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
            mt="10"
            colorScheme="teal"
            disabled={!isValid}
            isLoading={isSubmitting}
          >
            LOG IN
          </Button>
        </form>
      </Box>
    </Flex>
  )
}
