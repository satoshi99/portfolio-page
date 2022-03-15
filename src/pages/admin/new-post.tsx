import {
  Flex,
  Stack,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  Input,
  InputRightElement,
  Textarea,
  CheckboxGroup,
  Checkbox,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Box,
  Switch,
  Divider,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import type { NextPage } from 'next'
import { useState } from 'react'
import { Sidebar } from '../../components/templates/admin/Sidebar'
import { CreateTagModal } from '../../components/organisms/CreateTagModal'

const newPost: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isPublic, setIsPublic] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Sidebar>
      <form>
        {/* <Grid templateColumns='repeat(2, 1fr)' gap={5}> */}
        {/* <GridItem colSpan={{ base: 2, lg: 1 }}> */}
        <Flex direction="column" p="4">
          <Heading>New Post</Heading>

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
              <CheckboxGroup colorScheme="blue">
                <Flex direction="row" gap="3" wrap="wrap">
                  <Checkbox value="naruto">Naruto</Checkbox>
                  <Checkbox value="sasuke">Sasuke</Checkbox>
                  <Checkbox value="kakashi">kakashi</Checkbox>
                  <Checkbox value="naruto">Naruto</Checkbox>
                  <Checkbox value="sasuke">Sasuke</Checkbox>
                  <Checkbox value="kakashi">kakashi</Checkbox>
                  <Checkbox value="naruto">Naruto</Checkbox>
                  <Checkbox value="sasuke">Sasuke</Checkbox>
                  <Checkbox value="kakashi">kakashi</Checkbox>
                  <Checkbox value="naruto">Naruto</Checkbox>
                  <Checkbox value="sasuke">Sasuke</Checkbox>
                  <Checkbox value="kakashi">kakashi</Checkbox>
                  <Checkbox value="naruto">Naruto</Checkbox>
                  <Checkbox value="sasuke">Sasuke</Checkbox>
                  <Checkbox value="kakashi">kakashi</Checkbox>
                  <Checkbox value="naruto">Naruto</Checkbox>
                  <Checkbox value="sasuke">Sasuke</Checkbox>
                  <Checkbox value="kakashi">kakashi</Checkbox>
                </Flex>
              </CheckboxGroup>
            </FormControl>

            <Button
              leftIcon={<AddIcon />}
              onClick={onOpen}
              w="10rem"
              variant="solid"
              colorScheme="blackAlpha"
            >
              Add New Tag
            </Button>
            <CreateTagModal isOpen={isOpen} onClose={onClose} />

            <Box w="100%" bgColor="teal.50" p="5">
              <Flex direction="row" gap="5">
                <FormControl display="flex" alignItems="center">
                  <FormLabel htmlFor="toggle-public" mb="0">
                    {isPublic ? 'Back to DRAFT' : 'Post to PUBLIC'}
                  </FormLabel>
                  <Switch
                    id="toggle-public"
                    colorScheme="green"
                    onChange={() => setIsPublic(!isPublic)}
                  />
                  <FormHelperText
                    color={isPublic ? 'green' : 'red'}
                    ml="3"
                    fontSize="xl"
                    mt="-1"
                  >
                    {isPublic ? 'now on public' : 'now on draft'}
                  </FormHelperText>
                </FormControl>

                <Button size="lg" colorScheme="teal">
                  POST
                </Button>
              </Flex>
            </Box>
          </Stack>
        </Flex>
        {/* </GridItem>
          <GridItem colSpan={{ base: 2, lg: 1 }} >
            <Flex direction="column">
              <Flex>
                  <Button leftIcon={<ViewIcon />} colorScheme='teal' variant='solid'>Preview</Button>
                  </Flex>
                  <Box minH="95vh" bgColor="white" p="5" mt="4">
                      Markdown Preview here
                  </Box>
               
            </Flex>
          </GridItem>
          </Grid> */}
      </form>
    </Sidebar>
  )
}

export default newPost
