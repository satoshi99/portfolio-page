import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { ContactForm } from '../components/templates/contact/ContactForm'
import { Layout } from '../components/templates/Layout'

const Contact: NextPage = () => {
  return (
    <Layout title="Contact">
      <Flex
        direction="column"
        pt="28"
        minH="100vh"
        w={{ base: 'xs', md: 'md' }}
      >
        <ContactForm />
      </Flex>
    </Layout>
  )
}

export default Contact
