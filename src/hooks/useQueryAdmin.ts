import { useQuery } from 'react-query'
import axios from 'axios'
import { UserInfo } from '../types/admin'
import { useRouter } from 'next/router'

export const useQueryAdmin = () => {
  const router = useRouter()
  const getCurrentAdmin = async () => {
    const { data } = await axios.get<UserInfo>(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/myinfo`,
      {
        withCredentials: true,
      }
    )
    return data
  }
  return useQuery({
    queryKey: 'admin',
    queryFn: getCurrentAdmin,
    staleTime: Infinity,
    onError: () => router.push('admin'),
  })
}
