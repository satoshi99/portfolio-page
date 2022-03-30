export interface Tag {
  id: string
  title: string
  slug: string
}

export interface Post {
  title: string
  url_slug: string
  thumbnail: string
  description: string
  content: string
  isPublic: boolean
  id: string
  created_at: Date
  updated_at: Date
  tags: Tag[]
}

export interface FormInputs {
  name: string
  email: string
  message: string
  policyConfirm: boolean
}
