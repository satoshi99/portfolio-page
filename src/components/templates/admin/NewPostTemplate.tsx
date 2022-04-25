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
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CreatePostInputs, Tag } from '../../../types/post'
import { AdminSidebar } from '../../organisms/AdminSidebar'
import { CreateTagModal } from '../../organisms/CreateTagModal'
import { MarkdownToHtml } from '../../organisms/MarkdownToHtml'

type Props = {
  tags: Tag[]
}

export const NewPostTemplate = ({ tags }: Props) => {
  const [isPublic, setIsPublic] = useState(false)
  const [markdown, setMarkdown] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm<CreatePostInputs>({
    mode: 'all',
    defaultValues: {
      data: {
        title: '',
        url_slug: '',
        thumbnail: '',
        description: '',
        content: '',
        is_public: false,
      },
      tag_ids: [],
    },
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
          <Heading>New Post</Heading>

          <Stack direction="column" spacing={4} mt="5">
            <FormControl
              isRequired
              isInvalid={errors.data?.title ? true : false}
            >
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                bgColor="white"
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
              <Textarea bgColor="white" {...register('data.description')} />
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
                {...register('data.url_slug')}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Tags</FormLabel>
              <CheckboxGroup colorScheme="blue">
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
                      {...register('data.is_public', {
                        value: isPublic,
                        onChange: () => setIsPublic(!isPublic),
                      })}
                    />
                    <FormHelperText
                      ml="3"
                      color="black"
                      fontWeight="bold"
                      fontSize="xl"
                      mt="-1"
                    >
                      {isPublic ? 'Publish' : 'Draft'}
                    </FormHelperText>
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
                  {isPublic ? 'POST' : 'SAVE'}
                </Button>
              </Flex>
            </Box>
          </Stack>
        </Flex>
      </form>
    </AdminSidebar>
  )
}
