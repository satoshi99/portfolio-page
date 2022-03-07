import type { NextPage } from 'next'
import { ContactForm } from '../components/ContactForm'
import { Layout } from '../components/Layout'

const Contact: NextPage = () => {
  return (
    <Layout title="Contact">
      <ContactForm />
    </Layout>
  )
}

export default Contact
