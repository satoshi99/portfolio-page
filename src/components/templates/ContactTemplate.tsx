import { Flex } from '@chakra-ui/react'
import { ContactForm } from '../organisms/ContactForm'
import { Layout } from '../organisms/Layout'

export const ContactTemplate = () => {
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
