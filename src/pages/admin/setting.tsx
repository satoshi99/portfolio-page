import type { NextPage } from 'next'
import { SettingTemplate } from '../../components/templates/admin/SettingTemplate'
import { useGetCsrfToken } from '../../hooks/useGetCsrfToken'

const userInfo = {
  email: 'user@gmail.com',
  password: 'user1pass',
}

const Setting: NextPage = () => {
  useGetCsrfToken()
  // const { data: dataAdmin } = useQueryAdmin()

  return <SettingTemplate userInfo={userInfo} />
}

export default Setting
