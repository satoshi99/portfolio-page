import { AddIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { updatePostState } from '../../../lib/recoil-atoms'
import {
  CreatePostInputs,
  Post,
  Tag,
  UpdatePostInputs,
} from '../../../types/post'
import { AdminSidebar } from '../../organisms/AdminSidebar'
import { CreateTagModal } from '../../organisms/CreateTagModal'
import { MarkdownToHtml } from '../../organisms/MarkdownToHtml'

type Props = {
  tags: Tag[]
}

export const EditPostTemplate = ({ tags }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const updatePost = useRecoilValue(updatePostState)
  const [markdown, setMarkdown] = useState('')
  const [isPublic, setIsPublic] = useState(updatePost.data.is_public)
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm<UpdatePostInputs>({
    mode: 'all',
    defaultValues: updatePost,
  })

  const onSubmit: SubmitHandler<CreatePostInputs> = async (data) => {
    console.log(data)
  }

  const onClickPreview = () => {
    setMarkdown(getValues('data.content'))
  }

  return (
    <AdminSidebar>
      {console.log('rendered new-post page')}
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" p="4">
          <Heading>Edit Post</Heading>

          <Stack direction="column" spacing={4} mt="5">
            <FormControl
              isRequired
              isInvalid={errors.data?.title ? true : false}
            >
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                bgColor="white"
                defaultValue={updatePost.data.title}
                {...register('data.title', {
                  required: { value: true, message: 'Title is required' },
                })}
              />
              <FormErrorMessage>
                {errors.data?.title && errors.data.title.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea
                bgColor="white"
                defaultValue={updatePost.data.description}
                {...register('data.description')}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Body</FormLabel>
              <Tabs colorScheme="teal">
                <TabList>
                  <Tab>Draft</Tab>
                  <Button
                    variant="unstyled"
                    fontWeight="normal"
                    onClick={onClickPreview}
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Tab>Preview</Tab>
                  </Button>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <FormHelperText>Markdown</FormHelperText>
                    <Textarea
                      bgColor="white"
                      minH="600px"
                      defaultValue={updatePost.data.content}
                      {...register('data.content')}
                    />
                  </TabPanel>
                  <TabPanel>
                    <FormHelperText>Converted HTML</FormHelperText>
                    <Flex
                      direction="column"
                      overflow="auto"
                      bgColor="white"
                      h="600px"
                      p="5"
                      borderRadius="md"
                      border="1px"
                      borderColor="teal.600"
                    >
                      <MarkdownToHtml markdown={markdown} />
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </FormControl>

            <FormControl>
              <FormLabel>Slug</FormLabel>
              <FormHelperText>ex: how-to-use-python</FormHelperText>
              <Input
                type="text"
                bgColor="white"
                defaultValue={updatePost.data.url_slug}
                {...register('data.url_slug')}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Tags</FormLabel>
              <CheckboxGroup
                colorScheme="blue"
                defaultValue={updatePost?.tag_ids}
              >
                <Flex direction="row" gap="3" wrap="wrap">
                  {tags?.map((tag) => (
                    <Checkbox
                      key={tag.id}
                      value={tag.id}
                      {...register('tag_ids')}
                    >
                      {tag.title}
                    </Checkbox>
                  ))}
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
                <FormControl>
                  <FormLabel htmlFor="toggle-public" mb="3">
                    Post status
                  </FormLabel>
                  <Flex direction="row" align="center">
                    <Switch
                      id="toggle-public"
                      size="lg"
                      colorScheme="green"
                      {...register('data.is_public')}
                    />
                    <Text ml="3" fontWeight="bold" fontSize="xl" mt="-1">
                      {watch('data.is_public') ? 'Publish' : 'Draft'}
                    </Text>
                  </Flex>
                </FormControl>

                <Button
                  type="submit"
                  size="lg"
                  mt="2"
                  colorScheme="teal"
                  disabled={!isValid}
                  isLoading={isSubmitting}
                >
                  {watch('data.is_public') ? 'POST' : 'SAVE'}
                </Button>
              </Flex>
            </Box>
          </Stack>
        </Flex>
      </form>
    </AdminSidebar>
  )
}
