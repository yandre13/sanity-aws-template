import { defineField, defineType } from 'sanity'
import { Icon } from '../components/Icons'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: () => Icon({ icon: '🔠' }),
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
