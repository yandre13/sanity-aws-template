export type Author = {
  image: ImageProps
  name: string
  role: string
}

export type ImageProps = {
  _type: string
  alt?: string
  asset: Asset
}

export type Asset = {
  _ref: string
  _type: string
}

export type Slug = {
  _type: string
  current: string
}

export type Meta = {
  description: string
  image: ImageProps
  title: string
}
