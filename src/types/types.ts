export type Tag = {
  _id: string
  title: string
  slug: string
  posts: Post[]
}

export type Post = {
  _id: string
  title: string
  description: string
  isPublic: boolean
  tags: Tag[]
}

export type Admin = {
  _id: string
  email: string
  posts: Post[]
}

export type FormInputs = {
  name: string
  email: string
  message: string
  policyConfirm: boolean
}
