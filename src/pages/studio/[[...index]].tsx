import Head from 'next/head'
import { NextStudio } from 'next-sanity/studio'
import { NextStudioHead } from 'next-sanity/studio/head'
import config from '@/studio/sanity.config'
import LayoutStudio from '@/components/layout-studio'

export default function StudioPage() {
  return (
    <>
      <Head>
        <NextStudioHead />
      </Head>
      <NextStudio config={config} />
    </>
  )
}

StudioPage.getLayout = function getLayout(page: React.ReactNode) {
  return <LayoutStudio>{page}</LayoutStudio>
}
