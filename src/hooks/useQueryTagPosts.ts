import axios from 'axios'
import { useQuery } from 'react-query'
import { Tag, Post } from '../types/main'

interface TagWithPosts {
  tag: Tag
  posts: Post[]
}

export const useQueryTagPosts = (tagId: string) => {
  const getTagWithPosts = async (tagId: string) => {
    const { data } = await axios.get<TagWithPosts>(
      `${process.env.NEXT_PUBLIC_API_URL}/tags/${tagId}`
    )
    return data
  }
  return useQuery({
    queryKey: ['tagWithPosts', tagId],
    queryFn: () => getTagWithPosts(tagId),
    enabled: !!tagId,
    staleTime: Infinity,
  })
}
