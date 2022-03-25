import axios from 'axios'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { csrfState } from '../lib/recoil-atoms'
import { CsrfToken } from '../types/admin'

export const useGetCsrfToken = () => {
  const csrf = useRecoilValue(csrfState)

  useEffect(() => {
    const getCsrfToken = async () => {
      const res = await axios.get<CsrfToken>(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/csrftoken`
      )
      axios.defaults.headers.common['X-Csrf-Token'] = res.data.csrf_token
    }
    getCsrfToken()
  }, [csrf])
}
