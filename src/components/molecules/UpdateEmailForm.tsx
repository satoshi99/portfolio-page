import { Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FormButtonGroup } from '../atoms/buttons/FormButtonGroup'

type Props = {
  onSubmit: () => void
  onClickCancel: () => void
}

type UpdateEmail = {
  newEmail: string
  confirm: string
}

export const UpdateEmailForm = ({ onSubmit, onClickCancel }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateEmail>({
    mode: 'all',
  })
  return (
    <Flex direction="column" gap="5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired isInvalid={errors.newEmail ? true : false}>
          <FormLabel>New Email</FormLabel>
          <Input
            type="email"
            size="md"
            {...register('newEmail', {
              required: { value: true, message: 'New Email required' },
            })}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Confirm New Email</FormLabel>
          <Input
            type="email"
            size="md"
            {...register('confirm', {
              required: { value: true, message: 'Enter new Email again' },
            })}
          />
        </FormControl>
        <FormButtonGroup
          submitTitle="SAVE"
          cancelTitle="CANCEL"
          onClickCancel={onClickCancel}
          isSubmitting={isSubmitting}
        />
      </form>
    </Flex>
  )
}
