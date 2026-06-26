import { defineField, defineType } from 'sanity'

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type:  'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type:  'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Web Development', value: 'Web Development'},
                    { title: 'Design', value: 'Design'},
                    { title: 'Systems', value: 'Systems'},
                ]
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Project Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'github',
            title: 'GitHub URL',
            type: 'url',
        }),
        defineField({
            name: 'live',
            title: 'Live URL',
            type: 'url',
        }),
        defineField({
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            description: 'Show this project in the homepage preview',
            initialValue: false,
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Controls display order — lower numbers appear first',
        }),
    ],
    orderings: [
        {
            title: 'Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'image',
        },
    },
})