import { definePreview } from 'next-sanity/preview'
import { projectId, dataset } from '@/lib/sanity.client'

export const usePreview = definePreview({
  projectId,
  dataset,
})
