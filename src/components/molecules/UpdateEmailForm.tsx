import { Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormButtonGroup } from '../atoms/buttons/FormButtonGroup'

type Props = {
  onClickCancel: () => void
}

type UpdateEmail = {
  newEmail: string
  confirm: string
}

export const UpdateEmailForm = ({ onClickCancel }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<UpdateEmail>({
    mode: 'all',
  })

  const onSubmit: SubmitHandler<UpdateEmail> = (data) => {
    console.log(data)
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="5">
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
        <FormControl isRequired isInvalid={errors.confirm ? true : false}>
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
          isValid={isValid}
          isSubmitting={isSubmitting}
        />
      </Flex>
    </form>
  )
}
