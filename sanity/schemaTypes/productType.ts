import { BasketIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    icon: BasketIcon,
    fields: [
        defineField({
            name: 'name',
            title: 'Product Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            }
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: (Rule) => Rule.required(),            
        }),
        defineField({
            name: 'intro',
            title: 'Product Intro',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule) => Rule.min(0).required(),
        }),
        defineField({
            name: 'discount',
            title: 'Discount',
            type: 'number',
        }),
        defineField({
            name:'stock',
            title: 'Stock',
            type: 'number',
            validation: (Rule) => Rule.min(0).max(100).required()
        }),
        defineField({
            name: 'status',
            title: 'Product Status',
            type: 'string',
            options: {
                list: [
                    { title: 'New', value: 'new' },
                    { title: 'Hot', value: 'hot' },
                    { title: 'Sale', value: 'sale' },
                ],
            },
        }),
        defineField({
            name: 'variant',
            title: 'Variant',
            type: 'string',
            options:{
                list: [
                    { title: 'T-Shirt', value: 't-shirt' },
                    { title: 'Jacket', value: 'jacket' },
                    { title: 'Pants', value: 'pants' },
                    { title: 'Hoodie', value: 'hoodie' },
                    { title: 'Shorts', value: 'shorts' },
                    { title: 'Other', value: 'other' },
                ]
            }
        })        
    ],
    preview: {
        select: {
            title: 'name',
            media: 'images',
            subtitle: 'price',
        },
        prepare(selection) {
            const { title, media, subtitle } = selection;
            const image = media && media[0];
            return {
                title,
                media: image,
                subtitle: `Rs. ${subtitle}`,
            };
        },
    },
});