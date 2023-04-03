import { lazy } from 'react'
import Post from '@/components/layout/Post'
import { queryPost, queryPostsSlug } from '@/groq/post'
import { client } from '@/lib/sanity.client'
import type { PostProps } from '@/types/post'
import { PreviewSuspense } from 'next-sanity/preview'
import SkeletonCard from '@/components/SkeletonCard'

const PreviewPost = lazy(() => import('@/components/preview/PreviewPost'))

export async function getStaticPaths() {
  const posts: Pick<PostProps, 'slug'>[] = await client.fetch(queryPostsSlug)

  return {
    paths: posts.map(({ slug }) => ({
      params: { slug: slug.current },
    })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({
  params: { slug },
  preview = false,
}: {
  params: { slug: string }
  preview: boolean
}) {
  if (preview) {
    return {
      props: {
        preview,
        slug,
      },
    }
  }

  const post: PostProps = await client.fetch(queryPost, { slug })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
      slug,
      preview,
    },
  }
}

export default function BlogPost({
  preview,
  slug,
  post,
}: {
  preview: boolean
  slug: string
  post: PostProps
}) {
  return (
    <>
      {preview ? (
        <PreviewSuspense fallback={<SkeletonCard />}>
          <PreviewPost slug={slug} />
        </PreviewSuspense>
      ) : (
        <Post post={post} />
      )}
    </>
  )
}
