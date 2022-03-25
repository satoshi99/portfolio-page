import { Button } from '@chakra-ui/react'

type Props = {
  title: string
}

export const TagButton = ({ title }: Props) => {
  return (
    <Button
      size="xs"
      variant="outline"
      borderColor="black"
      _hover={{ bgColor: 'black', color: 'white' }}
    >
      {title}
    </Button>
  )
}
