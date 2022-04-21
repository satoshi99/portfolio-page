import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
} from '@chakra-ui/react'
import { Dispatch, SetStateAction, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormButtonGroup } from '../atoms/buttons/FormButtonGroup'
import { ShowPasswordButton } from '../atoms/buttons/ShowPasswordButton'

type Props = {
  setDisplayFormState: Dispatch<SetStateAction<boolean>>
}

type UpdatePw = {
  currentPw: string
  newPw: string
  confirm: string
}

export const UpdatePasswordForm = ({ setDisplayFormState }: Props) => {
  const [showCurrentPw, setShowCurrentPw] = useState(false)
  const [showNewPw, setShowNewPw] = useState(false)
  const [showConfirmPw, setShowConfirmPw] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<UpdatePw>({
    mode: 'all',
  })

  const handleClickCancel = () => {
    setDisplayFormState(false)
  }

  const onSubmit: SubmitHandler<UpdatePw> = (data) => {
    console.log(data)
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" gap="5">
        <FormControl isRequired isInvalid={errors.currentPw ? true : false}>
          <FormLabel>Current Password</FormLabel>
          <InputGroup>
            <Input
              type={showCurrentPw ? 'text' : 'password'}
              {...register('currentPw', {
                required: true,
              })}
            />
            <ShowPasswordButton
              show={showCurrentPw}
              setShow={setShowCurrentPw}
            />
          </InputGroup>
        </FormControl>
        <FormControl isRequired isInvalid={errors.newPw ? true : false}>
          <FormLabel>New Password</FormLabel>
          <InputGroup>
            <Input
              type={showNewPw ? 'text' : 'password'}
              {...register('newPw', {
                required: true,
                minLength: {
                  value: 7,
                  message: 'Password must be not less than 7 characters',
                },
              })}
            />
            <ShowPasswordButton show={showNewPw} setShow={setShowNewPw} />
          </InputGroup>
        </FormControl>
        <FormControl isRequired isInvalid={errors.confirm ? true : false}>
          <FormLabel>Confirm New Password</FormLabel>
          <InputGroup>
            <Input
              type={showConfirmPw ? 'text' : 'password'}
              {...register('confirm', {
                required: true,
                minLength: {
                  value: 7,
                  message: 'Password must be not less than 7 characters',
                },
              })}
            />
            <ShowPasswordButton
              show={showConfirmPw}
              setShow={setShowConfirmPw}
            />
          </InputGroup>
        </FormControl>

        <FormButtonGroup
          submitTitle="SAVE"
          cancelTitle="CANCEL"
          onClickCancel={handleClickCancel}
          isValid={isValid}
          isSubmitting={isSubmitting}
        />
      </Flex>
    </form>
  )
}
