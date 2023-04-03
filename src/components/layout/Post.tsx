import { urlFor } from '@/lib/sanity.urlFor'
import type { PostProps } from '@/types/post'
import Hero from '../Hero'

export default function Post({ post }: { post: PostProps }) {
  return (
    <Hero
      title={post.title}
      description={post.description}
      url={urlFor(post.mainImage).width(400).height(700).url()}
    />
  )
}
