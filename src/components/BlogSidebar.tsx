import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { TagList } from './TagList'

export const BlogSidebar = () => {
  return (
    <Stack direction="column" m="5" p="3">
      <TagList />
    </Stack>
  )
}
