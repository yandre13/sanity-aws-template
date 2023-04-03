import { defineField, defineType } from 'sanity'
import { Icon } from '../components/Icons'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: () => Icon({ icon: '📄' }),
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'array',
      of: [
        { type: 'hero' }, // hero.js (same applies for the other types)
        { type: 'gallery' },
        // { type: 'callToAction' },
      ],
      options: {
        sortable: true,
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'meta',
      title: 'Meta',
      type: 'seo',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'pageBuilder',
    },
    prepare({ author, media, ...selection }) {
      const hero = media?.find((item: any) => item._type === 'hero')
      const image = (hero && hero.image) || Icon({ icon: '📄' })
      return { ...selection, media: image, subtitle: author && `by ${author}` }
    },
  },
})
