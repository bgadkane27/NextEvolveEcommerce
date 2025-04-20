import { BasketIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const orderType = defineType({
    name: 'order',
    title: 'Order',
    type: 'document',
    icon: BasketIcon,
    fields: [
        defineField({
            name: 'orderNumber',
            title: 'Order Number',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        {
            name: 'invoice',
            type: 'object',
            fields: [
                { name: 'id', type: 'string' },
                { name: 'number', type: 'string' },
                { name: 'hosted_invoice_url', type: 'url' }
            ],
        },
        defineField({
            name:'stripeCheckoutSessiodId',
            title: 'Stripe Checkout Sessiod ID',
            type: 'string'
        }),
        defineField({
            name:'stripeCustomerID',
            title: 'Stripe Customer ID',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'clerkUserID',
            title: 'Store User ID',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'customerName',
            title: 'Customer Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'customerEmail',
            title: 'Customer Email',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name:'stripePaymentIntentID',
            title: 'Stripe Payment Intent Id',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'product',
            title: 'Product',
            type: "array",
            of: [
                defineArrayMember({
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'product',
                            title: 'Product Bought',
                            type: 'reference',
                            to: [{type: 'product'}]
                        }),
                        defineField({
                            name: 'quantity',
                            title: "Quantity Purchased",
                            type: "number"
                        }),
                    ],
                })
            ]
        })
    ]
})