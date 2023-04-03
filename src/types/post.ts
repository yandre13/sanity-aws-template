import { Author, ImageProps, Slug } from './globals'

export type PostProps = {
  _createdAt: string
  _id: string
  author: Author
  categories: Category[]
  description: string
  mainImage: ImageProps
  slug: Slug
  title: string
}

export type Category = {
  title: string
}
