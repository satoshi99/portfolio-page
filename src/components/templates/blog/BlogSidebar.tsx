import { Stack } from '@chakra-ui/react'
import { TagList } from '../../organisms/TagList'

export const BlogSidebar = () => {
  return (
    <Stack direction="column" m="5" p="3">
      <TagList />
    </Stack>
  )
}
