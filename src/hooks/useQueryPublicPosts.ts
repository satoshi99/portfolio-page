import axios from 'axios'
import { useQuery } from 'react-query'
import { Post } from '../types/main'

export const useQueryPublicPosts = () => {
  const getPosts = async () => {
    const { data } = await axios.get<Post[]>(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/public`
    )
    return data
  }
  return useQuery<Post[], Error>({
    queryKey: 'publicPosts',
    queryFn: getPosts,
    staleTime: Infinity,
  })
}
