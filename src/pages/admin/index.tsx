import { AuthForm } from '../../components/templates/admin/AuthForm'
import { useGetCsrfToken } from '../../hooks/useGetCsrfToken'

const auth = () => {
  useGetCsrfToken()
  return <AuthForm />
}

export default auth
