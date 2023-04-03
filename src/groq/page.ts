import { groq } from 'next-sanity'

export const queryPages = groq`
*[_type == "page"]{
  _createdAt,
  _id,
  slug,
  pageBuilder,
  meta{
    title,
    description,
    image,
  },
  author->{
    name,
    role,
    image,
  },
} | order(publishedAt desc)
`

export const queryPagesSlug = groq`
*[_type == "page"]{
  _id,
  slug
} | order(publishedAt desc)
`

export const queryPage = groq`
*[_type == "page" && slug.current == $slug][0]{
  _createdAt,
  _id,
  slug,
  pageBuilder,
  meta{
    title,
    description,
    image,
  },
  author->{
    name,
    role,
    image,
  },
}
`
