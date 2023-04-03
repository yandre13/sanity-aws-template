import { queryPosts } from '@/groq/post'
import { usePreview } from '@/lib/sanity.preview'
import { previewToken } from '@/lib/sanity.client'
import PostList from '../layout/PostList'

export default function PreviewPostList() {
  const posts = usePreview(previewToken, queryPosts)
  return <PostList posts={posts} />
}
