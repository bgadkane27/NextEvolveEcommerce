import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const brandType = defineType({
  name: 'brand',
  title: 'Brand',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Brand Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    }),
  ],
  preview:{
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image'
    }
  }
})
