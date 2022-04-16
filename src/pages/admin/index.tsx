import type { NextPage } from 'next'
import { AuthTemplate } from '../../components/templates/admin/AuthTemplate'
import { useGetCsrfToken } from '../../hooks/useGetCsrfToken'

const Auth: NextPage = () => {
  useGetCsrfToken()
  return <AuthTemplate />
}

export default Auth
