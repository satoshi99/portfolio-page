import { IconType } from 'react-icons'

export interface UserInfo {
  email: string
  password: string
}

export interface LinkItem {
  name: string
  url: string
  icon: IconType
}
