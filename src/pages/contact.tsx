import type { NextPage } from 'next'
import { useState } from 'react'
import { ContactForm } from '../components/ContactForm'
import { ConfirmPage } from '../components/ConfirmPage'
import { Layout } from '../components/Layout'
import { ThankPage } from '../components/ThankPage'

const Contact: NextPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [step, setStep] = useState(0)

  return (
    <Layout title="Contact">
      {step === 0 ? (
        <ContactForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          message={message}
          setMessage={setMessage}
          step={step}
          setStep={setStep}
        />
      ) : step === 1 ? (
        <ConfirmPage
          name={name}
          email={email}
          message={message}
          step={step}
          setStep={setStep}
        />
      ) : (
        <ThankPage
          setName={setName}
          setEmail={setEmail}
          setMessage={setMessage}
          setStep={setStep}
        />
      )}
    </Layout>
  )
}

export default Contact
