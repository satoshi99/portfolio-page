export interface Tag {
  _id: string
  title: string
  slug: string
  posts: Post[]
}

export interface Post {
  _id: string
  title: string
  description: string
  slug: string
  isPublic: boolean
  tags: Tag[]
}

export interface Admin {
  _id: string
  email: string
  posts: Post[]
}

export interface FormInputs {
  name: string
  email: string
  message: string
  policyConfirm: boolean
}

export interface AuthInputs {
  email: string
  password: string
}
