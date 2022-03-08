import Head from 'next/head'
import { ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'
import { Navbar } from '../organisms/Navbar'
import { Footer } from '../organisms/Footer'

type Props = {
  title: string
  children: ReactNode
}

export const Layout = ({ title, children }: Props) => {
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
