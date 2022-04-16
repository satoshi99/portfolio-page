import Head from 'next/head'
import { ReactNode } from 'react'
import { Flex, useColorModeValue } from '@chakra-ui/react'

import { Navbar } from '../molecules/Navbar'
import { Footer } from '../molecules/Footer'

type Props = {
  title: string
  children: ReactNode
}

export const Layout = ({ title, children }: Props) => {
  const bgColorMode = useColorModeValue('gray.50', 'gray.900')
  return (
    <>
      <Head>
        <title>{title}: Satoshi Tech Portfolio</title>
      </Head>
      <Flex as="main" direction="column" align="center" bgColor={bgColorMode}>
        <Navbar />
        {children}
        <Footer />
      </Flex>
    </>
  )
}
