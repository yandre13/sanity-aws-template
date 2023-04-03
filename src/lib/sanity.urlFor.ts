import type { ImageProps } from '@/types/globals'
import ImageUrlBuilder from '@sanity/image-url'
import { client } from './sanity.client'

const builder = ImageUrlBuilder(client)

export function urlFor(source: ImageProps) {
  return builder.image(source)
}
