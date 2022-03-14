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
  CheckboxGroup,
  Checkbox,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Switch,
  ButtonGroup,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { AddIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const editPost: NextPage = () => {
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
          <Heading>Edit Post</Heading>

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

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Add New Tag</ModalHeader>
                <ModalCloseButton />
                <form>
                  <ModalBody pb={6}>
                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Input placeholder="Tag name" />
                    </FormControl>

                    <FormControl mt={4}>
                      <FormLabel>Slug</FormLabel>
                      <Input placeholder="Tag slug using URL" />
                    </FormControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button type="submit" colorScheme="blue" mr={3}>
                      ADD
                    </Button>
                    <Button type="button" onClick={onClose}>
                      Cancel
                    </Button>
                  </ModalFooter>
                </form>
              </ModalContent>
            </Modal>

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
                <ButtonGroup>
                  <Button size="lg" colorScheme="teal">
                    SAVE
                  </Button>
                  <Button size="lg" colorScheme="red">
                    DELETE
                  </Button>
                </ButtonGroup>
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

export default editPost
