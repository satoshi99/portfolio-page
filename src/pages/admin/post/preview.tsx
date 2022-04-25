import { useRecoilValue } from 'recoil'
import { PreviewTemplate } from '../../../components/templates/admin/PreviewTemplate'
import { postMarkdownState } from '../../../lib/recoil-atoms'

const Preview = () => {
  const markdown = useRecoilValue(postMarkdownState)
  return <PreviewTemplate markdown={markdown} />
}

export default Preview
