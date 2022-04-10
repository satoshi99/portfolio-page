import axios from 'axios'
import { useQuery } from 'react-query'
import { Tag, Post } from '../types/post'

type TagWithPosts = {
  tag: Tag
  posts: Post[]
}

export const getTagWithPosts = async (slug: string) => {
  const { data } = await axios.get<TagWithPosts>(
    `${process.env.NEXT_PUBLIC_API_URL}/tags/${slug}`
  )
  return data
}

export const useQueryTagPosts = (slug: string) => {
  return useQuery<TagWithPosts, Error>({
    queryKey: ['tagWithPosts', slug],
    queryFn: () => getTagWithPosts(slug),
    enabled: !!slug,
    staleTime: Infinity,
  })
}
