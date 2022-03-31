import axios from 'axios'
import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from 'react-query'
import { Post, Tag } from '../types/post'

type CreatePostInputs = {
  data: Omit<Post, 'id' | 'created_at' | 'updated_at' | 'tags'>
  tags: Omit<Tag[], 'id'>
}

type UpdatePostInputs = {
  data: Omit<Post, 'created_at' | 'updated_at' | 'tags'>
  tags: Omit<Tag[], 'id'>
}

export const useMutatePosts = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const createPostMutation = useMutation(
    async (inputData: CreatePostInputs) =>
      await axios.post<Post>(
        `${process.env.NEXT_PUBLIC_API_URL}/posts/create`,
        {
          data: inputData.data,
          tags: inputData.tags,
        },
        {
          withCredentials: true,
        }
      ),
    {
      onSuccess: (res) => {
        const previousPosts = queryClient.getQueryData<Post[]>('posts')
        if (previousPosts) {
          queryClient.setQueryData('posts', [...previousPosts, res.data])
        }
      },
      onError: (err: any) => {
        if (err.response.status === 401) {
          router.push('/admin')
        }
      },
    }
  )

  const updatePostMutation = useMutation(
    async (inputData: UpdatePostInputs) =>
      await axios.put<Post>(
        `${process.env.NEXT_PUBLIC_API_URL}/posts/${inputData.data.id}`,
        {
          data: inputData.data,
          tags: inputData.tags,
        },
        {
          withCredentials: true,
        }
      ),
    {
      onSuccess: (res, variables) => {
        const previousPosts = queryClient.getQueryData<Post[]>('posts')
        if (previousPosts) {
          queryClient.setQueryData<Post[]>(
            'posts',
            previousPosts.map((post) =>
              post.id === variables.data.id ? res.data : post
            )
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

  const deletePostMutation = useMutation(
    async (id: string) =>
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`, {
        withCredentials: true,
      }),
    {
      onSuccess: (res, variables) => {
        const previousPosts = queryClient.getQueryData<Post[]>('posts')
        if (previousPosts) {
          queryClient.setQueryData<Post[]>(
            'posts',
            previousPosts.filter((post) => post.id !== variables)
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

  return { createPostMutation, updatePostMutation, deletePostMutation }
}
