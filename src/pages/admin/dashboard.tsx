import type { NextPage } from 'next'
import { Sidebar } from '../../components/templates/admin/Sidebar'
import { TiPin } from 'react-icons/ti'
import {
  Box,
  Flex,
  Heading,
  Text,
  ListItem,
  OrderedList,
  Button,
} from '@chakra-ui/react'

const dashboard: NextPage = () => {
  return (
    <Sidebar>
      <Flex
        direction="column"
        bgColor="white"
        rounded="md"
        p="3"
        shadow="md"
        mb="4"
      >
        <Heading>Post List</Heading>
        <OrderedList p="5" spacing={3}>
          <ListItem fontSize="2xl">
            <Text>Post title 1 Post title 1 Post title 1</Text>
            <Flex direction="row" fontSize="md">
              <Text>Published: Sep 13, 2022</Text>
              <Text mx="2">-</Text>
              <Text color="green.400">Public</Text>
              <Text mx="2">-</Text>
              <TiPin />
              <Text color="blue.500">Pinned</Text>
            </Flex>
          </ListItem>

          <ListItem fontSize="2xl">
            <Text>Post title 1 Post title 1</Text>
            <Flex direction="row" fontSize="md">
              <Text>Published: Sep 13, 2022</Text>
              <Text mx="2">-</Text>
              <Text color="green.400">Public</Text>
            </Flex>
          </ListItem>

          <ListItem fontSize="2xl">
            <Text>Post title 1 Post title 1Post title 1Post title 1</Text>
            <Flex direction="row" fontSize="md">
              <Text>Published: Sep 13, 2022</Text>
              <Text mx="2">-</Text>
              <Text color="red.400">Draft</Text>
            </Flex>
          </ListItem>

          <ListItem fontSize="2xl">
            <Text>Post title 1</Text>
            <Flex direction="row" fontSize="md">
              <Text>Published: Sep 13, 2022</Text>
              <Text mx="2">-</Text>
              <Text color="green.400">Public</Text>
            </Flex>
          </ListItem>
        </OrderedList>
        <Flex w="100%" mt="5">
          <Text>3 all 10 pages</Text>
          <Box>
            <Button mr="4px">Prev</Button>
            <Button>Next</Button>
          </Box>
        </Flex>
      </Flex>

      <Flex direction="column" bgColor="white" rounded="md" p="3" shadow="md">
        <Heading>Tag List</Heading>
      </Flex>
    </Sidebar>
  )
}

export default dashboard
