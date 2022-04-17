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

type Props = {
  tags: Tag[]
}

export const EditPostTemplate = ({ tags }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const updatePost = useRecoilValue(updatePostState)
  const [isPublic, setIsPublic] = useState(updatePost.data.is_public)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm<UpdatePostInputs>({
    mode: 'all',
    // defaultValues: {
    //   data: {
    //     id: updatePost.data.id,
    //     thumbnail: updatePost.data.thumbnail,
    //   title: up,
    //   description: '',
    //   content: '',
    //   url_slug: '',
    //   is_public: false,
    //   }
    // }
  })

  const onSubmit: SubmitHandler<CreatePostInputs> = async (data) => {
    console.log(data)
  }

  return (
    <AdminSidebar>
      {console.log('rendered new-post page')}
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        {/* <Grid templateColumns='repeat(2, 1fr)' gap={5}> */}
        {/* <GridItem colSpan={{ base: 2, lg: 1 }}> */}
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
              <Textarea
                bgColor="white"
                minH="400px"
                defaultValue={updatePost.data.content}
                {...register('data.content')}
              />
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
              <CheckboxGroup colorScheme="blue">
                <Flex direction="row" gap="3" wrap="wrap">
                  {tags?.map((tag) => (
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
                      {...register('data.is_public', {
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
    </AdminSidebar>
  )
}
