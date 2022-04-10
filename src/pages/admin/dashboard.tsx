import type { NextPage } from 'next'
import { Sidebar } from '../../components/templates/admin/Sidebar'
import { TiPin } from 'react-icons/ti'
import {
  Flex,
  Heading,
  Text,
  ListItem,
  OrderedList,
  Button,
  Grid,
  GridItem,
  Spacer,
} from '@chakra-ui/react'
import { IconButton } from '../../components/atoms/buttons/IconButton'
import { AddIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { CreateTagModal } from '../../components/organisms/CreateTagModal'
import { Pagination } from '../../components/organisms/Pagination'
import { useQueryTags } from '../../hooks/useQueryTags'
import { useState } from 'react'
import { EditTagModal } from '../../components/organisms/EditTagModal'
import { Tag } from '../../types/post'
import { useGetCsrfToken } from '../../hooks/useGetCsrfToken'

const dashboard: NextPage = () => {
  useGetCsrfToken()
  const router = useRouter()
  const [createTagIsOpen, setCreateTagIsOpen] = useState(false)
  const [editTagIsOpen, setEditTagIsOpen] = useState(false)
  const [editTag, setEditTag] = useState<Tag>()
  const { data: tagsData } = useQueryTags()

  const onClick = () => {
    return
  }

  const onClickAddTag = () => setCreateTagIsOpen(!createTagIsOpen)
  const onClickEditTag = (tag: Tag) => {
    setEditTag(tag)
    setEditTagIsOpen(!editTagIsOpen)
  }
  const onCloseEditTag = () => setEditTagIsOpen(!editTagIsOpen)

  return (
    <Sidebar>
      <Grid templateColumns="repeat(4, 1fr)" gap={2}>
        <GridItem colSpan={{ base: 4, lg: 3 }}>
          <Flex direction="column" bgColor="white" rounded="md" shadow="md">
            <Flex
              direction="row"
              bgColor="teal"
              borderTopRadius="md"
              p="1"
              align="center"
              justify="center"
            >
              <Heading fontSize="2xl" color="white" ml="2">
                Post List
              </Heading>
              <Spacer />
              <IconButton onClick={() => router.push('/admin/new-post')}>
                <AddIcon />
              </IconButton>
            </Flex>
            <Flex direction="column" py="5" px="8">
              <OrderedList spacing={3}>
                <ListItem fontSize="2xl">
                  <Flex>
                    <Text>Post title 1 Post title 1 Post title 1</Text>
                  </Flex>
                  <Flex direction="row" fontSize="md">
                    <Text>Published: Sep 13, 2022</Text>
                    <Text mx="2">-</Text>
                    <Text color="green">Public</Text>
                    <Text mx="2">-</Text>
                    <TiPin />
                    <Text color="blue">Pinned</Text>
                  </Flex>
                </ListItem>

                <ListItem fontSize="2xl">
                  <Text>Post title 1 Post title 1</Text>
                  <Flex direction="row" fontSize="md">
                    <Text>Published: Sep 13, 2022</Text>
                    <Text mx="2">-</Text>
                    <Text color="green">Public</Text>
                  </Flex>
                </ListItem>

                <ListItem fontSize="2xl">
                  <Text>Post title 1 Post title 1Post title 1Post title 1</Text>
                  <Flex direction="row" fontSize="md">
                    <Text>Published: Sep 13, 2022</Text>
                    <Text mx="2">-</Text>
                    <Text color="red">Draft</Text>
                  </Flex>
                </ListItem>

                <ListItem fontSize="2xl">
                  <Text>Post title 1</Text>
                  <Flex direction="row" fontSize="md">
                    <Text>Published: Sep 13, 2022</Text>
                    <Text mx="2">-</Text>
                    <Text color="green">Public</Text>
                  </Flex>
                </ListItem>
              </OrderedList>

              <Flex mt="10">
                <Pagination
                  totalObj={50}
                  numObjInPage={10}
                  currentPage={2}
                  onClick={onClick}
                />
              </Flex>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 4, lg: 1 }}>
          <CreateTagModal isOpen={createTagIsOpen} onClose={onClickAddTag} />
          <EditTagModal
            data={editTag}
            isOpen={editTagIsOpen}
            onClose={onCloseEditTag}
          />
          <Flex direction="column" bgColor="white" rounded="md" shadow="md">
            <Flex
              direction="row"
              bgColor="teal"
              borderTopRadius="md"
              p="1"
              align="center"
              justify="center"
            >
              <Heading fontSize="2xl" color="white" ml="2">
                Tag List
              </Heading>
              <Spacer />
              <IconButton onClick={onClickAddTag}>
                <AddIcon />
              </IconButton>
            </Flex>

            <Flex direction="row" wrap="wrap" p="5" gap="2">
              {tagsData?.map((tag) => (
                <Button
                  size="sm"
                  variant="solid"
                  colorScheme="gray"
                  key={tag.id}
                  onClick={() => onClickEditTag(tag)}
                >
                  {tag.title}
                </Button>
              ))}
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Sidebar>
  )
}

export default dashboard
