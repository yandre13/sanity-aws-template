import { lazy } from 'react'
import { queryPage, queryPagesSlug } from '@/groq/page'
import { client } from '@/lib/sanity.client'

import type { PageProps } from '@/types/page'

export async function getStaticPaths() {
  const pages: Pick<PageProps, 'slug'>[] = await client.fetch(queryPagesSlug)

  // exclude home page from paths
  const filteredPages = pages.filter((page) => page.slug.current !== 'home')
  return {
    paths: filteredPages.map(({ slug }) => ({
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

  const page: PageProps = await client.fetch(queryPage, { slug: slug })

  return {
    props: {
      page,
      slug,
      preview,
    },
  }
}

export default function BlogPost({
  preview,
  slug,
  page,
}: {
  preview: boolean
  slug: string
  page: PageProps
}) {
  return (
    <>
      {/* {preview ? (
        <PreviewSuspense fallback="Loadings...">
          <PreviewPost slug={slug} />
        </PreviewSuspense>
      ) : (
        <Post post={post} />
      )} */}
      <p>
        {JSON.stringify(page, null, 2)}
        {JSON.stringify(slug, null, 2)}
      </p>
    </>
  )
}
