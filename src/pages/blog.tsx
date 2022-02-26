import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  ScaleFade,
  Text,
  VStack,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import { BlogSidebar } from '../components/BlogSidebar'
import { Layout } from '../components/Layout'
import { Link } from '../components/Link'
import { PostCard } from '../components/PostCard'
import bgImage from '../public/blog_bg.jpg'
import { useHandleScroll } from '../hooks/useHandleScroll'
import { MdExpandMore } from 'react-icons/md'
import { ArrowDownIcon } from '@chakra-ui/icons'
import { MotionBox } from '../components/MotionBox'

const Blog: NextPage = () => {
  const { scrollY, setScrollY } = useHandleScroll()

  return (
    <Layout title="Blog">
      <Flex direction="column" bgColor="darkBlue">
        <Box
          w="100%"
          h="100vh"
          bgImage={bgImage.src}
          bgSize="cover"
          position="relative"
        >
          <VStack
            alignItems="baseline"
            float="left"
            w="100%"
            pt="200"
            px={{ md: '50', lg: '100' }}
            color="white"
          >
            <Heading fontSize="5xl" color="yellow.200">
              Blog Title {scrollY}
            </Heading>
            <Text fontSize="2xl">
              Blog description --------------------------------------------
            </Text>
            <NextLink href="/" passHref>
              <Link>
                <Text fontSize="xl" _hover={{ color: 'whiteAlpha.600' }}>
                  continue reading ...
                </Text>
              </Link>
            </NextLink>
          </VStack>
          <ScaleFade in={scrollY < 50} initial={true}>
            <Flex
              direction="column"
              position="absolute"
              w="100%"
              bottom="100"
              color="white"
              fontSize="3xl"
              alignItems="center"
            >
              <Text bgColor="blackAlpha.700" px="2">
                more articles
              </Text>
              <MotionBox
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'loop',
                  repeatDelay: 1,
                }}
              >
                <ArrowDownIcon bgColor="blackAlpha.700" rounded="full" />
              </MotionBox>
            </Flex>
          </ScaleFade>
        </Box>
        <Flex>
          <Box w="75%" bg="transparent" zIndex="sticky" ml="10" mt="-44">
            <Grid templateColumns="repeat(2, 1fr)" gap="5">
              <ScaleFade in={scrollY > 100}>
                <GridItem colSpan={1}>
                  <PostCard href="/" />
                </GridItem>
              </ScaleFade>
              <ScaleFade in={scrollY > 300}>
                <GridItem colSpan={1}>
                  <PostCard href="/" />
                </GridItem>
              </ScaleFade>
              <GridItem colSpan={1}>
                <PostCard href="/" />
              </GridItem>
            </Grid>
          </Box>
          <Box color="white" maxW="25%">
            <BlogSidebar />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Blog
