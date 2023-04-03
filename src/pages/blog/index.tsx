import SkeletonCard from '@/components/SkeletonCard'
import PostList from '@/components/layout/PostList'
import { queryPosts } from '@/groq/post'
import { client } from '@/lib/sanity.client'
import type { PostProps } from '@/types/post'
import { PreviewSuspense } from 'next-sanity/preview'
import { lazy } from 'react'

const PreviewPostList = lazy(
  () => import('@/components/preview/PreviewPostList'),
)

export async function getStaticProps({ preview = false }) {
  if (preview) {
    return {
      props: {
        preview,
      },
    }
  }

  const posts: PostProps[] = await client.fetch(queryPosts)

  return {
    props: {
      posts,
      preview,
    },
  }
}

export default function Posts({
  posts,
  preview,
}: {
  posts: PostProps[]
  preview: boolean
}) {
  return (
    <section className="py-16">
      <h1 className="bg-gradient-to-r from-[#7928CA] to-[#FF0080] bg-clip-text text-center text-7xl font-black text-transparent">
        {preview && '[Preview mode:]'} My latest posts
      </h1>
      {preview ? (
        <PreviewSuspense fallback={<SkeletonCard />}>
          <PreviewPostList />
        </PreviewSuspense>
      ) : (
        <PostList posts={posts} />
      )}
    </section>
  )
}
