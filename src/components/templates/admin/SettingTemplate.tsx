import { EmailIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { UpdateEmailForm } from '../../molecules/UpdateEmailForm'
import { UpdatePasswordForm } from '../../molecules/UpdatePasswordForm'
import { AdminSidebar } from '../../organisms/AdminSidebar'
import { UserInfo } from '../../../types/admin'

type Props = {
  userInfo: Pick<UserInfo, 'email' | 'password'>
}

export const SettingTemplate = ({ userInfo }: Props) => {
  const [displayEmailForm, setDisplayEmailForm] = useState(false)
  const [displayPasswordForm, setDisplayPasswordForm] = useState(false)

  return (
    <AdminSidebar>
      <Flex direction="column" p="4">
        <Heading>MyInfo</Heading>
        <Box mt="10" p="4">
          <Stack direction="column" pl={0} spacing={3} alignItems="flex-start">
            <Flex columnGap="3">
              <EmailIcon fontSize="3xl" />
              <Text fontSize="xl">Email: {userInfo?.email}</Text>
            </Flex>
            {displayEmailForm ? (
              <Box bg="white" borderRadius="lg" w="md">
                <Box m={8} color="#0B0E3F">
                  <UpdateEmailForm setDisplayFormState={setDisplayEmailForm} />
                </Box>
              </Box>
            ) : (
              <Button onClick={() => setDisplayEmailForm(!displayEmailForm)}>
                Change Email
              </Button>
            )}

            {displayPasswordForm ? (
              <Box bg="white" borderRadius="lg" w="md">
                <Box m={8} color="#0B0E3F">
                  <UpdatePasswordForm
                    setDisplayFormState={setDisplayPasswordForm}
                  />
                </Box>
              </Box>
            ) : (
              <Button
                onClick={() => setDisplayPasswordForm(!displayPasswordForm)}
              >
                Change Password
              </Button>
            )}
          </Stack>
        </Box>
      </Flex>
    </AdminSidebar>
  )
}
