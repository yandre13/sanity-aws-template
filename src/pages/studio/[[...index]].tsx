import { NextStudio } from 'next-sanity/studio'
import config from '@/studio/sanity.config'
import LayoutStudio from '@/components/layout-studio'

export default function StudioPage() {
  return <NextStudio config={config} />
}

StudioPage.getLayout = function getLayout(page: React.ReactNode) {
  return <LayoutStudio>{page}</LayoutStudio>
}
