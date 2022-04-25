import React from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

export const MarkdownToHtml = (props) => {
  return (
    <div className="markdown-preview">
      <ReactMarkdown remarkPlugins={[gfm]} unwrapDisallowed={false}>
        {props.markdown}
      </ReactMarkdown>
    </div>
  )
}
