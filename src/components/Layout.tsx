import Head from 'next/head'
import { ReactNode } from 'react'
import { Flex, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { DarkModeSwitch } from './DarkModeSwitch'

type Props = {
  title: string
  children: ReactNode
}

export const Layout = ({ title, children }: Props) => {
  // const { colorMode } = useColorMode()

  // const bgColor = { light: 'gray.50', dark: 'blue.900' }

  // const color = { light: 'black', dark: 'white' }

  // const bgColor = useColorModeValue('orange.50', 'gray.900')
  return (
    <>
      <Head>
        <title>{title}: Satoshi Tech Portfolio</title>
      </Head>
      <Flex as="main" direction="column">
        <Navbar />
        {children}
        <Footer />
      </Flex>
    </>
  )
}
