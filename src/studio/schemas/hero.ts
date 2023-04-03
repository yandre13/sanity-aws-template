import { defineField, defineType } from 'sanity'
import { Icon } from '../components/Icons'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'callToAction',
      title: 'Call to action',
      type: 'callToAction',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: `Hero: ${title}`,
        media: () => Icon({ icon: '🦸' }),
      }
    },
  },
})
