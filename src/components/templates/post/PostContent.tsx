import { Box, Heading, Stack, Text } from '@chakra-ui/react'

export const PostContent = () => {
  return (
    <Stack direction="column" p="10" fontFamily="serif" fontSize="md">
      <Text mb="10" fontFamily="sans-serif">
        In 2016, we introduced AlphaGo, the first artificial intelligence
        program to defeat humans at the ancient game of Go. Its successors,
        AlphaZero and then MuZero, each represented a significant step forward
        in the pursuit of general-purpose algorithms, mastering a greater number
        of games with even less predefined knowledge. MuZero, for example,
        mastered Chess, Go, Shogi, and Atari without needing to be told the
        rules. But so far these agents have focused on solving games. Now, in
        pursuit of DeepMind’s mission to solve intelligence, MuZero has taken a
        first step towards mastering a real-world task by optimising video on
        YouTube.
      </Text>
      <Box>
        <Text fontWeight="bold" fontSize="3xl">
          Content A
        </Text>
        <Text>
          MuZero achieves superhuman performance across various tasks by
          combining the power of search with its ability to learn a model of the
          environment and plan accordingly. This works especially well in large,
          combinatorial action spaces, making it an ideal candidate solution for
          the problem of rate control in video compression. However, to get
          MuZero to work on this real-world application requires solving a whole
          new set of problems. For instance, the set of videos uploaded to
          platforms like YouTube varies in content and quality, and any agent
          needs to generalise across videos, including completely new videos
          after deployment. By comparison, board games tend to have a single
          known environment. Many other metrics and constraints affect the final
          user experience and bitrate savings, such as the PSNR (Peak
          Signal-to-Noise Ratio) and bitrate constraint.
        </Text>
      </Box>
      <Box>
        <Text fontWeight="bold" fontSize="3xl">
          Content B
        </Text>
        <Text>
          MuZero achieves superhuman performance across various tasks by
          combining the power of search with its ability to learn a model of the
          environment and plan accordingly. This works especially well in large,
          combinatorial action spaces, making it an ideal candidate solution for
          the problem of rate control in video compression. However, to get
          MuZero to work on this real-world application requires solving a whole
          new set of problems. For instance, the set of videos uploaded to
          platforms like YouTube varies in content and quality, and any agent
          needs to generalise across videos, including completely new videos
          after deployment. By comparison, board games tend to have a single
          known environment. Many other metrics and constraints affect the final
          user experience and bitrate savings, such as the PSNR (Peak
          Signal-to-Noise Ratio) and bitrate constraint.
        </Text>
      </Box>
      <Box>
        <Heading>3. Content C</Heading>
        <Text>
          MuZero achieves superhuman performance across various tasks by
          combining the power of search with its ability to learn a model of the
          environment and plan accordingly. This works especially well in large,
          combinatorial action spaces, making it an ideal candidate solution for
          the problem of rate control in video compression. However, to get
          MuZero to work on this real-world application requires solving a whole
          new set of problems. For instance, the set of videos uploaded to
          platforms like YouTube varies in content and quality, and any agent
          needs to generalise across videos, including completely new videos
          after deployment. By comparison, board games tend to have a single
          known environment. Many other metrics and constraints affect the final
          user experience and bitrate savings, such as the PSNR (Peak
          Signal-to-Noise Ratio) and bitrate constraint.
        </Text>
      </Box>
      <Box>
        <Heading>4. Content D</Heading>
        <Text>
          MuZero achieves superhuman performance across various tasks by
          combining the power of search with its ability to learn a model of the
          environment and plan accordingly. This works especially well in large,
          combinatorial action spaces, making it an ideal candidate solution for
          the problem of rate control in video compression. However, to get
          MuZero to work on this real-world application requires solving a whole
          new set of problems. For instance, the set of videos uploaded to
          platforms like YouTube varies in content and quality, and any agent
          needs to generalise across videos, including completely new videos
          after deployment. By comparison, board games tend to have a single
          known environment. Many other metrics and constraints affect the final
          user experience and bitrate savings, such as the PSNR (Peak
          Signal-to-Noise Ratio) and bitrate constraint.
        </Text>
      </Box>
    </Stack>
  )
}
