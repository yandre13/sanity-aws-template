import { defineField, defineType } from 'sanity'
import { Icon } from '../components/Icons'

export default defineType({
  name: 'gallery',
  title: 'Image Gallery',
  type: 'object',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
              description: 'Important for SEO and accessiblity.',
            }),
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
  preview: {
    select: {
      title: 'images',
    },
    prepare({ title }) {
      return {
        title: `Gallery: (${title.length}) images`,
        media: () => Icon({ icon: '🖼️' }),
      }
    },
  },
})
