import axios from 'axios'
import { useQuery } from 'react-query'
import { Post } from '../types/post'

export const getSinglePost = async (slug: string) => {
  const { data } = await axios.get<Post>(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`,
    {
      withCredentials: true,
    }
  )
  return data
}

export const useQuerySinglePost = (slug: string) => {
  return useQuery<Post, Error>({
    queryKey: ['singlePost', slug],
    queryFn: () => getSinglePost(slug),
    enabled: !!slug,
    staleTime: Infinity,
  })
}
