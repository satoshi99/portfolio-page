import {
  Flex,
  Stack,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  CheckboxGroup,
  Checkbox,
  useDisclosure,
  Box,
  Switch,
  FormErrorMessage,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import type { NextPage } from 'next'
import { useState } from 'react'
import { Sidebar } from '../../components/templates/admin/Sidebar'
import { CreateTagModal } from '../../components/organisms/CreateTagModal'
import { useQueryTags } from '../../hooks/useQueryTags'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CreatePostInputs } from '../../types/post'
import { useMutatePosts } from '../../hooks/useMutatePosts'

const newPost: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isPublic, setIsPublic] = useState(false)
  const { data: dataTags } = useQueryTags()
  const { createPostMutation } = useMutatePosts()

  const {
    register,
    handleSubmit,
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
        isPublic: false,
      },
      tags: [],
    },
  })

  const onSubmit: SubmitHandler<CreatePostInputs> = async (data) => {
    console.log(data)
  }

  return (
    <Sidebar>
      {console.log('rendered new-post page')}
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        {/* <Grid templateColumns='repeat(2, 1fr)' gap={5}> */}
        {/* <GridItem colSpan={{ base: 2, lg: 1 }}> */}
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
              <Textarea
                bgColor="white"
                minH="400px"
                {...register('data.content')}
              />
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
                  {dataTags?.map((tag) => (
                    <Checkbox key={tag.id} value={tag.id} {...register('tags')}>
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
                      {...register('data.isPublic', {
                        value: isPublic,
                        onChange: () => setIsPublic(!isPublic),
                      })}
                    />
                    <FormHelperText
                      color={isPublic ? 'green' : 'red'}
                      ml="3"
                      fontSize="xl"
                      mt="-1"
                    >
                      {isPublic ? 'PUBLISH' : 'DRAFT'}
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
