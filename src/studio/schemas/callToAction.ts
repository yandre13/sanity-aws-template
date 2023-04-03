import { defineField, defineType } from 'sanity'
import { Icon } from '../components/Icons'

export default defineType({
  name: 'callToAction',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
    }),
    defineField({
      name: 'linkUrl',
      title: 'Link URL',
      type: 'url',
    }),
    // add boolean field to enable/disable link if it is internal or external default is internal
    defineField({
      name: 'isExternal',
      title: 'Is External',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'linkText',
      subtitle: 'linkUrl',
    },
    prepare({ title, subtitle }) {
      return {
        title: `Call to Action: ${title}`,
        subtitle: subtitle,
        media: () => Icon({ icon: '🔗', size: 27 }),
      }
    },
  },
})
