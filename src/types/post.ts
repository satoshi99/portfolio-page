export type Tag = {
  id: string
  title: string
  slug: string
}

export type Post = {
  title: string
  url_slug: string
  thumbnail: string
  description: string
  content: string
  is_public: boolean
  id: string
  created_at: Date
  updated_at: Date
  tags: Tag[]
}

export type CreatePostInputs = {
  data: Omit<Post, 'id' | 'created_at' | 'updated_at' | 'tags'>
  tag_ids: string[]
}

export type UpdatePostInputs = {
  data: Omit<Post, 'created_at' | 'updated_at' | 'tags'>
  tag_ids: string[]
}
