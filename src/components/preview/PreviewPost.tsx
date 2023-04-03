import { queryPost } from '@/groq/post'
import { usePreview } from '@/lib/sanity.preview'
import { previewToken } from '@/lib/sanity.client'
import Post from '../layout/Post'

export default function PreviewPost({ slug }: { slug: string }) {
  const post = usePreview(previewToken, queryPost, { slug })
  return <Post post={post} />
}
