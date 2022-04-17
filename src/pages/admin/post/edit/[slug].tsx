import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { EditPostTemplate } from '../../../../components/templates/admin/EditPostTemplate'
import { useQueryTags } from '../../../../hooks/useQueryTags'

const EditPost: NextPage = () => {
  const router = useRouter()
  const { data: tagsData } = useQueryTags()

  return <EditPostTemplate tags={tagsData} />
}

export default EditPost
