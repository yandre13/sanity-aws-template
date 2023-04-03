import { PageBuilderProps, PageProps } from '@/types/page'
import PageBuilder from '../PageBuilder'

export default function Home({
  page,
  hasHero,
}: {
  page: PageProps
  hasHero: PageBuilderProps<'hero'> | false
}) {
  return (
    <section className="py-16">
      {hasHero && (
        <h1 className="bg-gradient-to-r from-[#007CF0] to-[#00DFD8] bg-clip-text text-center text-7xl font-black text-transparent">
          {hasHero.title}
        </h1>
      )}
      <PageBuilder pageBuilder={page.pageBuilder} />
    </section>
  )
}
