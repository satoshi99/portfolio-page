import { AddIcon } from '@chakra-ui/icons'
import { Button, Flex, Grid, GridItem, Heading, Spacer } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Post, Tag } from '../../../types/post'
import { AdminSidebar } from '../../organisms/AdminSidebar'
import { CreateTagModal } from '../../organisms/CreateTagModal'
import { EditTagModal } from '../../organisms/EditTagModal'
import { Pagination } from '../../molecules/Pagination'
import { AdminPostList } from '../../organisms/AdminPostList'
import { IconButton } from '../../atoms/buttons/IconButton'

type Props = {
  tags: Tag[]
  posts: Post[]
}

export const DashboardTemplate = ({ tags, posts }: Props) => {
  const router = useRouter()

  const [createTagIsOpen, setCreateTagIsOpen] = useState(false)
  const [editTagIsOpen, setEditTagIsOpen] = useState(false)
  const [editTag, setEditTag] = useState<Tag>()

  const onClickAddTag = () => setCreateTagIsOpen(!createTagIsOpen)
  const onClickEditTag = (tag: Tag) => {
    setEditTag(tag)
    setEditTagIsOpen(!editTagIsOpen)
  }
  const onCloseEditTag = () => setEditTagIsOpen(!editTagIsOpen)

  const onClick = () => {
    return
  }
  return (
    <AdminSidebar>
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
              <AdminPostList posts={posts} />
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
              {tags?.map((tag) => (
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
    </AdminSidebar>
  )
}
