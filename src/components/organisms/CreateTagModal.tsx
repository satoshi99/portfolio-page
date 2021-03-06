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
  useToast,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Tag } from '../../types/post'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export const CreateTagModal = ({ isOpen, onClose }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid },
    reset,
    watch,
  } = useForm<Omit<Tag, 'id'>>({
    mode: 'all',
  })

  const successToast = useToast({
    title: 'Successfully Created',
    status: 'success',
    duration: 9000,
    position: 'top-left',
    isClosable: true,
  })

  const errorToast = useToast({
    title: 'Craete Tag Failed',
    status: 'error',
    duration: 9000,
    position: 'top-left',
    isClosable: true,
  })

  const handleClose = () => {
    reset()
    onClose()
  }

  const onSubmit: SubmitHandler<Omit<Tag, 'id'>> = async (inputTag) => {
    console.log(inputTag)
    onClose()
    successToast()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Tag</ModalHeader>
        <ModalCloseButton />
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <ModalBody pb={6}>
            <FormControl isRequired isInvalid={errors.title ? true : false}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
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
              <Input type="text" {...register('slug')} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              type="submit"
              colorScheme="blue"
              mr={3}
              isLoading={isSubmitting}
              disabled={!isValid}
            >
              ADD
            </Button>
            <Button type="button" onClick={handleClose}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
