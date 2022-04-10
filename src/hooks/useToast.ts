import { useToast } from '@chakra-ui/react'

type Props = {
  title: string
  status: 'info' | 'warning' | 'success' | 'error'
}

export const useCustumToast = ({ title, status }: Props) =>
  useToast({
    title: title,
    status: status,
    position: 'top-left',
    duration: 9000,
    isClosable: true,
  })
