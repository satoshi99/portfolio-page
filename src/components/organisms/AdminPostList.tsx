import { DeleteIcon, EditIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  ListItem,
  OrderedList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { TiPin } from 'react-icons/ti'
import { useSetRecoilState } from 'recoil'
import { updatePostState } from '../../lib/recoil-atoms'
import { Post } from '../../types/post'
import { DateFormat } from '../atoms/DateFormat'

type Props = {
  posts: Post[]
}

export const AdminPostList = ({ posts }: Props) => {
  const router = useRouter()
  const setUpdatePost = useSetRecoilState(updatePostState)
  const initialFocusRef = useRef()

  const onClickEdit = (post: Post) => {
    setUpdatePost({
      data: {
        id: post?.id,
        thumbnail: post?.thumbnail,
        title: post?.title,
        description: post?.description,
        content: post?.content,
        url_slug: post?.url_slug,
        is_public: post?.is_public,
      },
      tags: post?.tags,
    })

    router.push({
      pathname: '/admin/post/edit/[id]',
      query: { id: post?.id },
    })
  }

  const onClickDelete = () => {
    return
  }

  const onClickPreview = () => {}

  return (
    <OrderedList spacing={3} fontWeight="bold">
      {posts?.map((post) => (
        <ListItem key={post?.id} fontSize="2xl">
          <Popover
            initialFocusRef={initialFocusRef}
            placement="bottom"
            closeOnBlur={false}
          >
            <PopoverTrigger>
              <Button color="gray.900" variant="link" fontSize="2xl">
                {post?.title}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              color="white"
              pb="2"
              bgColor="teal.900"
              borderColor="teal.900"
            >
              <PopoverHeader border="0">Controll</PopoverHeader>
              <PopoverArrow bgColor="teal.900" />
              <PopoverCloseButton />
              <PopoverBody>
                <Flex direction="row" gap={2} justify="center">
                  <Button colorScheme="blue" onClick={() => onClickEdit(post)}>
                    <EditIcon mr="2" />
                    Edit
                  </Button>
                  <Button colorScheme="red">
                    <DeleteIcon mr="2" />
                    Delete
                  </Button>
                  <Button colorScheme="green">
                    <ExternalLinkIcon mr="2" ref={initialFocusRef} />
                    Preview
                  </Button>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Flex direction="row" fontSize="md" fontWeight="normal">
            <DateFormat date={post?.updated_at} />
            <Text mx="2">-</Text>
            {post?.is_public ? (
              <Text color="green">Public</Text>
            ) : (
              <Text color="red">Draft</Text>
            )}
            <Text mx="2">-</Text>
            <TiPin />
            <Text color="blue">Pinned</Text>
          </Flex>
        </ListItem>
      ))}
    </OrderedList>
  )
}
