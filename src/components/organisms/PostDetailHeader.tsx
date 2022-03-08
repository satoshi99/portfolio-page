import { Box, Heading } from '@chakra-ui/react'

export const PostDetailHeader = (title: string) => {
  return (
    <Box py="5" px="10">
      <Heading>{title}</Heading>
    </Box>
  )
}
