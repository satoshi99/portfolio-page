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
  Grid,
  GridItem,
  UnorderedList,
  Spacer,
} from '@chakra-ui/react'
import { IconButton } from '../../components/atoms/buttons/IconButton'
import { AddIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

const dashboard: NextPage = () => {
  const router = useRouter()
  const clickPostAddIcon = () => {
    router.push('/admin/new-post')
  }

  const clickTagAddIcon = () => {
    return
  }

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
              <IconButton onClick={clickPostAddIcon}>
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
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 4, lg: 1 }}>
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
              <IconButton onClick={clickTagAddIcon}>
                <AddIcon />
              </IconButton>
            </Flex>

            <UnorderedList p="5">
              <ListItem>Python</ListItem>
              <ListItem>Next.js</ListItem>
              <ListItem>Python</ListItem>
              <ListItem>Next.js</ListItem>
              <ListItem>Python</ListItem>
              <ListItem>Next.js</ListItem>
            </UnorderedList>
          </Flex>
        </GridItem>
      </Grid>
    </Sidebar>
  )
}

export default dashboard
