import { Text } from '@chakra-ui/react'

type Props = {
  date: Date
}

export const DateFormat = ({ date }: Props) => {
  const newDate = new Date(date)
  const dateString = newDate.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Text textAlign="right" fontSize="sm">
      {dateString}
    </Text>
  )
}
