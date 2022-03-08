import {
  Box,
  Grid,
  GridItem,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Layout } from '../../components/templates/Layout'

const PostDetail = () => {
  const headerBgColor = useColorModeValue(
    'linear(to-r, blue.300, yellow.400, red.200)',
    'linear(to-r, purple.900, teal.800, yellow.900)'
  )
  const sidebarBgColor = useColorModeValue('blue.50', 'blue.900')
  const contentBgColor = useColorModeValue('yellow.50', 'gray.900')

  return (
    <Layout title="post detail">
      <Box pt="24" pb="16" px="10" bgGradient={headerBgColor}>
        <Heading>Post Title Here</Heading>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" minH="100vh">
        <GridItem colSpan={1} bgColor={sidebarBgColor}>
          <OrderedList p="10">
            <ListItem>content A</ListItem>
            <ListItem>content B</ListItem>
            <ListItem>content C</ListItem>
            <ListItem>content D</ListItem>
          </OrderedList>
        </GridItem>
        <GridItem colSpan={3} bgColor={contentBgColor}>
          <Stack direction="column" p="10">
            <Text mb="10">
              In 2016, we introduced AlphaGo, the first artificial intelligence
              program to defeat humans at the ancient game of Go. Its
              successors, AlphaZero and then MuZero, each represented a
              significant step forward in the pursuit of general-purpose
              algorithms, mastering a greater number of games with even less
              predefined knowledge. MuZero, for example, mastered Chess, Go,
              Shogi, and Atari without needing to be told the rules. But so far
              these agents have focused on solving games. Now, in pursuit of
              DeepMind’s mission to solve intelligence, MuZero has taken a first
              step towards mastering a real-world task by optimising video on
              YouTube.
            </Text>
            <Box>
              <Text fontWeight="bold" fontSize="3xl">
                1. Content A
              </Text>
              <Text>
                MuZero achieves superhuman performance across various tasks by
                combining the power of search with its ability to learn a model
                of the environment and plan accordingly. This works especially
                well in large, combinatorial action spaces, making it an ideal
                candidate solution for the problem of rate control in video
                compression. However, to get MuZero to work on this real-world
                application requires solving a whole new set of problems. For
                instance, the set of videos uploaded to platforms like YouTube
                varies in content and quality, and any agent needs to generalise
                across videos, including completely new videos after deployment.
                By comparison, board games tend to have a single known
                environment. Many other metrics and constraints affect the final
                user experience and bitrate savings, such as the PSNR (Peak
                Signal-to-Noise Ratio) and bitrate constraint.
              </Text>
            </Box>
            <Box>
              <Heading>2. Content B</Heading>
              <Text>
                MuZero achieves superhuman performance across various tasks by
                combining the power of search with its ability to learn a model
                of the environment and plan accordingly. This works especially
                well in large, combinatorial action spaces, making it an ideal
                candidate solution for the problem of rate control in video
                compression. However, to get MuZero to work on this real-world
                application requires solving a whole new set of problems. For
                instance, the set of videos uploaded to platforms like YouTube
                varies in content and quality, and any agent needs to generalise
                across videos, including completely new videos after deployment.
                By comparison, board games tend to have a single known
                environment. Many other metrics and constraints affect the final
                user experience and bitrate savings, such as the PSNR (Peak
                Signal-to-Noise Ratio) and bitrate constraint.
              </Text>
            </Box>
            <Box>
              <Heading>3. Content C</Heading>
              <Text>
                MuZero achieves superhuman performance across various tasks by
                combining the power of search with its ability to learn a model
                of the environment and plan accordingly. This works especially
                well in large, combinatorial action spaces, making it an ideal
                candidate solution for the problem of rate control in video
                compression. However, to get MuZero to work on this real-world
                application requires solving a whole new set of problems. For
                instance, the set of videos uploaded to platforms like YouTube
                varies in content and quality, and any agent needs to generalise
                across videos, including completely new videos after deployment.
                By comparison, board games tend to have a single known
                environment. Many other metrics and constraints affect the final
                user experience and bitrate savings, such as the PSNR (Peak
                Signal-to-Noise Ratio) and bitrate constraint.
              </Text>
            </Box>
            <Box>
              <Heading>4. Content D</Heading>
              <Text>
                MuZero achieves superhuman performance across various tasks by
                combining the power of search with its ability to learn a model
                of the environment and plan accordingly. This works especially
                well in large, combinatorial action spaces, making it an ideal
                candidate solution for the problem of rate control in video
                compression. However, to get MuZero to work on this real-world
                application requires solving a whole new set of problems. For
                instance, the set of videos uploaded to platforms like YouTube
                varies in content and quality, and any agent needs to generalise
                across videos, including completely new videos after deployment.
                By comparison, board games tend to have a single known
                environment. Many other metrics and constraints affect the final
                user experience and bitrate savings, such as the PSNR (Peak
                Signal-to-Noise Ratio) and bitrate constraint.
              </Text>
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </Layout>
  )
}

export default PostDetail
