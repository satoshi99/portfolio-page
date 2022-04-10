import axios from 'axios'
import { useQuery } from 'react-query'
import { Post } from '../types/post'

export const useQueryPosts = () => {
  const getPosts = async () => {
    const { data } = await axios.get<Post[]>(
      `${process.env.NEXT_PUBLIC_API_URL}/posts`,
      {
        withCredentials: true,
      }
    )
    return data
  }
  return useQuery<Post[], Error>({
    queryKey: 'posts',
    queryFn: getPosts,
    staleTime: Infinity,
  })
}
