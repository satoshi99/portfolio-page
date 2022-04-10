import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useToast,
} from '@chakra-ui/react'
import { AxiosResponse } from 'axios'
import { useRef } from 'react'
import { UseMutationResult } from 'react-query'
import { useMutateTags } from '../../hooks/useMutateTags'

type Props = {
  targetId: string
  isOpen: boolean
  onClose: () => void
  title: string
  deleteMutation: UseMutationResult<AxiosResponse>
}

export const DeleteAlertDialog = ({
  targetId,
  isOpen,
  onClose,
  title,
  deleteMutation,
}: Props) => {
  const cancelRef = useRef()
  const toast = useToast()
  // const { deleteTagMutation } = useMutateTags()

  const onClick = async () => {
    await deleteMutation.mutateAsync(targetId).then(() =>
      toast({
        title: 'Successfully Deleted',
        position: 'top-left',
        isClosable: true,
      })
    )
  }

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
      size="sm"
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>
          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button type="button" onClick={onClose}>
              CANCEL
            </Button>
            <Button type="button" onClick={onClick} ml="3" colorScheme="red">
              DELETE
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
