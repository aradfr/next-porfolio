import { JSX } from 'react'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'

const components = {}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
