import type { PageBuilderProps } from '@/types/page'
import HeroHome from './HeroHome'
import { urlFor } from '@/lib/sanity.urlFor'
import GallerySlider from './GallerySlider'

export default function PageBuilder({
  pageBuilder,
}: {
  pageBuilder: PageBuilderProps[]
}) {
  return (
    <>
      {pageBuilder.map((block) => {
        switch (block._type) {
          case 'hero':
            const heroBlock = block as PageBuilderProps<'hero'>
            return (
              <HeroHome
                key={block._key}
                {...heroBlock}
                imageURL={urlFor(heroBlock.image).width(400).height(700).url()}
              />
            )
          case 'gallery':
            const galleryBlock = block as PageBuilderProps<'gallery'>
            const images = galleryBlock.images.map((image) => {
              return {
                url: urlFor(image).width(800).height(500).url(),
                alt: image.alt ?? 'Image from gallery',
              }
            })
            return <GallerySlider key={block._key} images={images} />
          default:
            return JSON.stringify(block, null, 2)
        }
      })}
    </>
  )
}
