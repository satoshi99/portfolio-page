import { Button, IconProps } from '@chakra-ui/react'

interface Props {
  onClick: () => void
  children: IconProps
}

export const IconButton = ({ onClick, children, ...rest }: Props) => {
  return (
    <Button
      variant="ghost"
      color="white"
      _hover={{ bgColor: 'blackAlpha.400' }}
      {...rest}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
