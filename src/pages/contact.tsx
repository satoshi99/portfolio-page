import type { NextPage } from 'next'
import { ContactForm } from '../components/templates/contact/ContactForm'
import { Layout } from '../components/templates/Layout'

const Contact: NextPage = () => {
  return (
    <Layout title="Contact">
      <ContactForm />
    </Layout>
  )
}

export default Contact
