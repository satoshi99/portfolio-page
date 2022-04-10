import axios from 'axios'
import { useQuery } from 'react-query'
import { Tag } from '../types/post'

export const getTags = async () => {
  const { data } = await axios.get<Tag[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/tags`
  )
  return data
}

export const useQueryTags = () => {
  return useQuery({
    queryKey: 'tags',
    queryFn: getTags,
    staleTime: Infinity,
  })
}
