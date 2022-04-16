import type { NextPage } from 'next'
import { SettingTemplate } from '../../components/templates/admin/SettingTemplate'

const userInfo = {
  email: 'user@gmail.com',
  password: 'user1pass',
}

const Setting: NextPage = () => {
  // const { data: dataAdmin } = useQueryAdmin()

  return <SettingTemplate userInfo={userInfo} />
}

export default Setting
