import axios from 'axios'
import { useQuery } from 'react-query'
import { Post } from '../types/post'

export const getPublicPosts = async () => {
  const { data } = await axios.get<Post[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/public`
  )
  return data
}

export const useQueryPublicPosts = () => {
  return useQuery<Post[], Error>({
    queryKey: 'publicPosts',
    queryFn: getPublicPosts,
    staleTime: Infinity,
  })
}
