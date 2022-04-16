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
  const [isDisplayEmailForm, setIsDisplayEmailForm] = useState(false)
  const [isDisplayPasswordForm, setIsDisplayPasswordForm] = useState(false)

  const onSubmitEmail = () => {
    return
  }
  const onClickCancelEmail = () => {
    setIsDisplayEmailForm(false)
  }
  const onSubmitPw = () => {
    return
  }
  const onClickCancelPw = () => {
    setIsDisplayPasswordForm(false)
  }

  return (
    <AdminSidebar>
      <Flex direction="column" p="4">
        <Heading>MyInfo</Heading>
        <Box mt="10" p="4">
          <Stack direction="column" pl={0} spacing={3} alignItems="flex-start">
            <Flex columnGap="3">
              <EmailIcon fontSize="3xl" />
              <Text fontSize="xl">Email adress: {userInfo?.email}</Text>
            </Flex>
            {isDisplayEmailForm ? (
              <Box bg="white" borderRadius="lg" w="md">
                <Box m={8} color="#0B0E3F">
                  <UpdateEmailForm
                    onSubmit={onSubmitEmail}
                    onClickCancel={onClickCancelEmail}
                  />
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
                  <UpdatePasswordForm
                    onSubmit={onSubmitPw}
                    onClickCancel={onClickCancelPw}
                  />
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
    </AdminSidebar>
  )
}
