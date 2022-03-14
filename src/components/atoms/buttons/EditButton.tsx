import Link from 'next/link'
import { EditIcon } from '@chakra-ui/icons'
import { Button, ButtonProps } from '@chakra-ui/react'
import { ChakraLink } from '../ChakraLink'

interface Props {
  url: string
  buttonProps: ButtonProps
}

export const EditButton = (props: ButtonProps) => {
  return (
    <Button
      variant="ghost"
      color="white"
      _hover={{ bgColor: 'blackAlpha.400' }}
      {...props}
    >
      <EditIcon />
    </Button>
  )
}
