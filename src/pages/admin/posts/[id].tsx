import { Sidebar } from '../../../components/templates/admin/Sidebar'
import {
  Flex,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Select,
} from '@chakra-ui/react'
import type { NextPage } from 'next'

const editPost: NextPage = () => {
  return (
    <Sidebar>
      <Flex direction="column">
        <Heading>New Post</Heading>
        <form>
          <Stack direction="column" spacing={4} mt="5">
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input type="text" bgColor="white" />
            </FormControl>

            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea bgColor="white" />
            </FormControl>

            <FormControl>
              <FormLabel>Body</FormLabel>
              <Textarea bgColor="white" minH="400px" />
            </FormControl>

            <FormControl>
              <FormLabel>Slug</FormLabel>
              <FormHelperText>ex: how-to-use-python</FormHelperText>
              <Input type="text" bgColor="white" />
            </FormControl>

            <FormControl>
              <FormLabel>Tags</FormLabel>
              <Flex gap={5}>
                <Select placeholder="Select tags">
                  <option>Python</option>
                  <option>Django</option>
                  <option>Next.js</option>
                  <option>Python</option>
                </Select>
                <Input type="text" placeholder="add new tag" bgColor="white" />
              </Flex>
            </FormControl>
          </Stack>
        </form>
      </Flex>
    </Sidebar>
  )
}

export default editPost
