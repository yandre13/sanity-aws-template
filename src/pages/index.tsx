import Head from 'next/head'
import type { PageBuilderProps, PageProps } from '@/types/page'
import { client } from '@/lib/sanity.client'
import { queryPage } from '@/groq/page'
import { PreviewSuspense } from 'next-sanity/preview'
import Home from '@/components/layout/Home'
import PreviewHome from '@/components/preview/PreviewHome'
import SkeletonCard from '@/components/SkeletonCard'

export async function getStaticProps({
  preview = false,
}: {
  preview: boolean
}) {
  if (preview) {
    return {
      props: {
        preview,
      },
    }
  }

  const page: PageProps = await client.fetch(queryPage, { slug: 'home' })

  return {
    props: {
      page,
      preview,
    },
  }
}

export default function HomePage({
  page,
  preview,
}: {
  page: PageProps
  preview: boolean
}) {
  const hasHero =
    !preview &&
    (page.pageBuilder.find(
      (block) => block._type === 'hero',
    ) as PageBuilderProps<'hero'>)

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {preview ? (
        <PreviewSuspense fallback={<SkeletonCard />}>
          <PreviewHome />
        </PreviewSuspense>
      ) : (
        <Home page={page} hasHero={hasHero} />
      )}
    </>
  )
}
