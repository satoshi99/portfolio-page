import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Sidebar } from '../../components/templates/admin/Sidebar'
import { UserInfo } from '../../types/admin'

import { EmailIcon } from '@chakra-ui/icons'

import { useState } from 'react'

const userInfo = {
  email: 'user@gmail.com',
  password: 'user1pass',
}

interface Props {
  userInfo: UserInfo
}

const setting: NextPage = () => {
  const [isDisplayEmailForm, setIsDisplayEmailForm] = useState(false)
  const [isDisplayPasswordForm, setIsDisplayPasswordForm] = useState(false)

  return (
    <Sidebar>
      <Flex direction="column" p="4">
        <Heading>MyInfo</Heading>
        <Box mt="10" p="4">
          <Stack direction="column" pl={0} spacing={3} alignItems="flex-start">
            <Flex columnGap="3">
              <EmailIcon fontSize="3xl" />
              <Text fontSize="xl">Email adress: {userInfo.email}</Text>
            </Flex>
            {isDisplayEmailForm ? (
              <Box bg="white" borderRadius="lg" w="md">
                <Box m={8} color="#0B0E3F">
                  <Stack direction="column" spacing={5}>
                    <FormControl id="email">
                      <FormLabel>New Email</FormLabel>
                      <Input type="email" size="md" />
                    </FormControl>
                    <FormControl id="email">
                      <FormLabel>Confirm New Email</FormLabel>
                      <Input type="email" size="md" />
                    </FormControl>
                    <FormControl id="email">
                      <ButtonGroup>
                        <Button variant="solid" colorScheme="blue">
                          SAVE
                        </Button>
                        <Button
                          variant="solid"
                          colorScheme="gray"
                          onClick={() =>
                            setIsDisplayEmailForm(!isDisplayEmailForm)
                          }
                        >
                          CANCEL
                        </Button>
                      </ButtonGroup>
                    </FormControl>
                  </Stack>
                </Box>
              </Box>
            ) : (
              <Button
                onClick={() => setIsDisplayEmailForm(!isDisplayEmailForm)}
              >
                Change Email
              </Button>
            )}

            {isDisplayPasswordForm ? (
              <Box bg="white" borderRadius="lg" w="md">
                <Box m={8} color="#0B0E3F">
                  <Stack direction="column" spacing={5}>
                    <FormControl id="password">
                      <FormLabel>Current Password</FormLabel>
                      <Input type="password" />
                    </FormControl>
                    <FormControl id="password">
                      <FormLabel>New Password</FormLabel>
                      <Input type="password" />
                    </FormControl>
                    <FormControl id="password">
                      <FormLabel>Confirm New Password</FormLabel>
                      <Input type="password" />
                    </FormControl>

                    <ButtonGroup>
                      <Button variant="solid" colorScheme="blue">
                        SAVE
                      </Button>
                      <Button
                        variant="solid"
                        colorScheme="gray"
                        onClick={() =>
                          setIsDisplayPasswordForm(!isDisplayPasswordForm)
                        }
                      >
                        CANCEL
                      </Button>
                    </ButtonGroup>
                  </Stack>
                </Box>
              </Box>
            ) : (
              <Button
                onClick={() => setIsDisplayPasswordForm(!isDisplayPasswordForm)}
              >
                Change Password
              </Button>
            )}
          </Stack>
        </Box>
      </Flex>
    </Sidebar>
  )
}

export default setting
