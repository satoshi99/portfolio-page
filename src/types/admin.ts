import { IconType } from 'react-icons'
import { Post } from './post'

export type UserInfo = {
  id: string
  email: string
  password: string
  email_verified: boolean
  is_active: boolean
  posts: Post[]
}

export type LinkItem = {
  name: string
  url: string
  icon: IconType
}

export type CsrfToken = {
  csrf_token: string
}

export type AuthInputs = {
  email: string
  password: string
}
