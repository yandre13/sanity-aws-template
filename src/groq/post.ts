import { groq } from 'next-sanity'

// export const queryPosts = groq`
// *[_type == "post"]{
//   ...,
//   author->,
//   categories[]->,
// } | order(publishedAt desc)
// `

export const queryPosts = groq`
*[_type == "post"]{
  title,
  description,
  slug,
  mainImage,
  author->{
    name,
    role,
    image,
  },
  categories[]->{
    title
  },
  _id,
  _createdAt
} | order(publishedAt desc)
`

export const queryPostsSlug = groq`
*[_type == "post"]{
  _id,
  slug
} | order(publishedAt desc)
`

export const queryPost = groq`
*[_type == "post" && slug.current == $slug][0]{
  ...,
  author->,
  categories[]->,
}
`
