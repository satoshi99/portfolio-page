import { Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { FormButtonGroup } from '../atoms/buttons/FormButtonGroup'

type Props = {
  onSubmit: () => void
  onClickCancel: () => void
}

type UpdatePw = {
  currentPw: string
  newPw: string
  confirm: string
}

export const UpdatePasswordForm = ({ onSubmit, onClickCancel }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdatePw>({
    mode: 'all',
  })
  return (
    <Flex direction="column" gap="5">
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

      <FormButtonGroup
        submitTitle="SAVE"
        cancelTitle="CANCEL"
        onClickCancel={onClickCancel}
        isSubmitting={isSubmitting}
      />
    </Flex>
  )
}
