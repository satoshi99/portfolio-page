import { IconType } from 'react-icons'
import { Post } from './main'

export interface UserInfo {
  id: string
  email: string
  password: string
  email_verified: boolean
  is_active: boolean
  posts: Post[]
}

export interface LinkItem {
  name: string
  url: string
  icon: IconType
}

export interface CsrfToken {
  csrf_token: string
}

export interface AuthInputs {
  email: string
  password: string
}
