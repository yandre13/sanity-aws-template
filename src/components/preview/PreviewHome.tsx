import { queryPage } from '@/groq/page'
import { usePreview } from '@/lib/sanity.preview'
import { previewToken } from '@/lib/sanity.client'
import Home from '../layout/Home'
import { PageBuilderProps, PageProps } from '@/types/page'

export default function PreviewHome() {
  const home: PageProps = usePreview(previewToken, queryPage, { slug: 'home' })

  const hasHero = home.pageBuilder.find(
    (block) => block._type === 'hero',
  ) as PageBuilderProps<'hero'>

  return <Home page={home} hasHero={hasHero} />
}
