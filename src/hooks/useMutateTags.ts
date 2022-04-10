import axios from 'axios'
import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from 'react-query'
import { Tag } from '../types/post'
import { useGetCsrfToken } from './useGetCsrfToken'

export const useMutateTags = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const createTagMutation = useMutation(
    async (inputData: Omit<Tag, 'id'>) =>
      await axios.post<Tag>(
        `${process.env.NEXT_PUBLIC_API_URL}/tags/create`,
        {
          title: inputData.title,
          slug: inputData.slug,
        },
        {
          withCredentials: true,
        }
      ),
    {
      onSuccess: (res) => {
        const previousTags = queryClient.getQueryData<Tag[]>('tags')
        if (previousTags) {
          queryClient.setQueryData('tags', [...previousTags, res.data])
        }
      },
      onError: (err: any) => {
        if (err.response.data.detail === 'The CSRF token has expired.') {
          useGetCsrfToken()
        }
      },
    }
  )

  const updateTagMutation = useMutation(
    async (inputData: Tag) =>
      await axios.put<Tag>(
        `${process.env.NEXT_PUBLIC_API_URL}/tags/${inputData.id}`,
        {
          title: inputData.title,
          slug: inputData.slug,
        },
        {
          withCredentials: true,
        }
      ),
    {
      onSuccess: (res, variables) => {
        const previousTags = queryClient.getQueryData<Tag[]>('tags')
        if (previousTags) {
          queryClient.setQueryData<Tag[]>(
            'tags',
            previousTags.map((tag) =>
              tag.id === variables.id ? res.data : tag
            )
          )
        }
      },
      onError: (err: any) => {
        if (err.response.data.detail === 'The CSRF token has expired.') {
          useGetCsrfToken()
        }
      },
    }
  )

  const deleteTagMutation = useMutation(
    async (id: string) =>
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/tags/${id}`),
    {
      onSuccess: (res, variables) => {
        const previousTags = queryClient.getQueryData<Tag[]>('tags')
        if (previousTags) {
          queryClient.setQueryData<Tag[]>(
            'tags',
            previousTags.filter((tag) => tag.id !== variables)
          )
        }
      },
      onError: (err: any) => {
        if (err.response.status === 401) {
          router.push('/admin')
        }
      },
    }
  )

  return { createTagMutation, updateTagMutation, deleteTagMutation }
}
