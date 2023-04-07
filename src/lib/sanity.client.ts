import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION as string
export const previewToken = process.env
  .NEXT_PUBLIC_SANITY_PREVIEW_SECRET as string

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})
