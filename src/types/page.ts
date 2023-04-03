import { Author, Meta } from './globals'
import { ImageProps } from './globals'

type PageBuilderType = 'hero' | 'gallery'

export type PageProps = {
  _createdAt: string
  _id: string
  author: Author
  meta: Meta
  pageBuilder: PageBuilderProps[]
  slug: Slug
}

export type PageBuilderHero = {
  title: string
  description: string
  image: ImageProps
  callToAction: CallToAction
}

export type PageBuilderGallery = {
  images: ImageProps[]
}

export type CallToAction = {
  isExternal: boolean
  linkText: string
  linkUrl: string
}

export type PageBuilderProps<T extends PageBuilderType = PageBuilderType> = {
  _key: string
  _type: T
} & (T extends 'hero'
  ? PageBuilderHero
  : T extends 'gallery'
  ? PageBuilderGallery
  : never)

export type Slug = {
  _type: string
  current: string
}
