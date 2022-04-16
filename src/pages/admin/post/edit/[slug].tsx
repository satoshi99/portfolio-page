import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { EditPostTemplate } from '../../../../components/templates/admin/EditPostTemplate'
import { useQuerySinglePost } from '../../../../hooks/useQuerySinglePost'
import { useQueryTags } from '../../../../hooks/useQueryTags'

const EditPost: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query
  const { data: postData } = useQuerySinglePost(slug as string)
  const { data: tagsData } = useQueryTags()

  return <EditPostTemplate post={postData} tags={tagsData} />
}

export default EditPost
