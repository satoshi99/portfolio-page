import React from 'react'
import { Post } from '../../../types/main'
import { PostCard } from '../../organisms/PostCard'

type Props = {
  posts: Post[]
}

export const PostList = ({ posts }: Props) => {
  return (
    <>
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  )
}
