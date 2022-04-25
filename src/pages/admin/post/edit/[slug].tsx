import type { NextPage } from 'next'
import { EditPostTemplate } from '../../../../components/templates/admin/EditPostTemplate'
import { useQueryTags } from '../../../../hooks/useQueryTags'

const EditPost: NextPage = () => {
  const { data: tagsData } = useQueryTags()

  return <EditPostTemplate tags={tagsData} />
}

export default EditPost
