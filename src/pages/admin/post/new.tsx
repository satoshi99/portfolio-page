import type { NextPage } from 'next'
import { useQueryTags } from '../../../hooks/useQueryTags'
import { NewPostTemplate } from '../../../components/templates/admin/NewPostTemplate'

const NewPost: NextPage = () => {
  const { data: dataTags } = useQueryTags()

  return <NewPostTemplate tags={dataTags} />
}

export default NewPost
