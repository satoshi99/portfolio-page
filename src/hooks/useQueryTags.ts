import axios from 'axios'
import { useQuery } from 'react-query'
import { Tag } from '../types/main'

export const useQueryTags = () => {
  const getTags = async () => {
    const { data } = await axios.get<Tag[]>(
      `${process.env.NEXT_PUBLIC_API_URL}/tags`
    )
    return data
  }
  return useQuery<Tag[], Error>({
    queryKey: 'tags',
    queryFn: getTags,
    staleTime: Infinity,
  })
}
