import { Button } from '@chakra-ui/react'

type Props = {
  title: string
}

export const TagButton = ({ title }: Props) => {
  return (
    <Button
      size="xs"
      variant="outline"
      color="darkblue"
      borderColor="darkblue"
      _hover={{ bgColor: 'darkblue', color: 'white' }}
    >
      {title}
    </Button>
  )
}
