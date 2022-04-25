import { Flex, Heading } from '@chakra-ui/react'
import { MarkdownToHtml } from '../../organisms/MarkdownToHtml'

type Props = {
  markdown: string
}

export const PreviewTemplate = ({ markdown }: Props) => {
  return (
    <Flex direction="column" p="10">
      <Heading>Preview</Heading>
      <Flex direction="column" mt="10" p="5" border="1px" minH="100vh">
        <MarkdownToHtml markdown={markdown} />
      </Flex>
    </Flex>
  )
}
