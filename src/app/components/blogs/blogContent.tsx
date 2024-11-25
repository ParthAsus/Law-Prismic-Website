import { TitleField } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'
import React from 'react'


interface BlogContentProps{
  title: TitleField
}
const BlogContentComponent = ({title}: BlogContentProps) => {
  return (
    <div>
      <PrismicRichText field={title} />
    </div>
  )
}

export default BlogContentComponent;
