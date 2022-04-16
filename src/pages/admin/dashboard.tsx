import type { NextPage } from 'next'
import { useQueryTags } from '../../hooks/useQueryTags'
import { useGetCsrfToken } from '../../hooks/useGetCsrfToken'
import { useQueryPublicPosts } from '../../hooks/useQueryPublicPosts'
import { DashboardTemplate } from '../../components/templates/admin/DashboardTemplate'

const Dashboard: NextPage = () => {
  useGetCsrfToken()

  const { data: tagsData } = useQueryTags()
  const { data: postsData } = useQueryPublicPosts()

  return <DashboardTemplate tags={tagsData} posts={postsData} />
}

export default Dashboard
