import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutateTags } from '../../hooks/useMutateTags'
import { useCustumToast } from '../../hooks/useToast'
import { Tag } from '../../types/post'
import { DeleteAlertDialog } from './DeleteAlertDialog'

interface Props {
  data: Tag
  isOpen: boolean
  onClose: () => void
}

export const EditTagModal = ({ data, isOpen, onClose }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isSubmitting },
    reset,
    setValue,
  } = useForm<Tag>({ mode: 'all' })

  setValue('id', data?.id)

  const { updateTagMutation, deleteTagMutation } = useMutateTags()
  const successToast = useCustumToast({
    title: 'Successfully Updated',
    status: 'success',
  })

  const [isOpenAlert, setIsOpenAlert] = useState(false)
  const toggleOpenAlert = () => setIsOpenAlert(!isOpenAlert)

  const handleClose = () => {
    reset()
    onClose()
  }

  const onSubmit: SubmitHandler<Tag> = async (editedTag) => {
    console.log(editedTag)
    onClose()
    successToast()
    // await updateTagMutation.mutateAsync(data).then(() =>
    //   toast({
    //     title: 'Successfully Updated',
    //     status: 'success',
    //     duration: 9000,
    //     isClosable: true,
    //   })
    // )
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Edit Tag</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired isInvalid={errors.title ? true : false}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                defaultValue={data?.title}
                {...register('title', {
                  required: { value: true, message: 'Name is required' },
                })}
              />
              <FormErrorMessage>
                {errors.title && errors.title.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Slug</FormLabel>
              <Input
                type="text"
                defaultValue={data?.slug}
                {...register('slug')}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              colorScheme="blue"
              mr={3}
              disabled={!isValid}
              isLoading={isSubmitting}
            >
              UPDATE
            </Button>
            <Button type="button" colorScheme="red" onClick={toggleOpenAlert}>
              DELETE
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
      <DeleteAlertDialog
        targetId={data?.id}
        isOpen={isOpenAlert}
        onClose={toggleOpenAlert}
        title="Delete Tag"
        deleteMutation={deleteTagMutation}
      />
    </Modal>
  )
}
