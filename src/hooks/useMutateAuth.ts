import axios from 'axios'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { AuthInputs } from '../types/admin'
import { useGetCsrfToken } from './useGetCsrfToken'

export const useMutateAuth = () => {
  const router = useRouter()

  const loginMutation = useMutation(
    async (admin: AuthInputs) =>
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/token`,
        admin,
        {
          withCredentials: true,
        }
      ),
    {
      onSuccess: () => {
        router.push('/admin/dashboard')
      },
      onError: (err: any) => {
        alert(`${err.response.data.detail}\n${err.message}`)
        if (err.response.data.detail === 'The CSRF token has expired.') {
          useGetCsrfToken()
        }
      },
    }
  )

  const logoutMutation = useMutation(
    async () =>
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/logout`,
        {},
        {
          withCredentials: true,
        }
      ),
    {
      onSuccess: () => {
        router.push('/admin')
      },
      onError: (err: any) => {
        alert(`${err.response.data.detail}\n${err.message}`)
        if (err.response.data.detail === 'The CSRF token has expired.') {
          useGetCsrfToken()
          router.push('/admin')
        }
      },
    }
  )

  return { loginMutation, logoutMutation }
}
