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
            name: 'stripeCheckoutSessionId',
            title: 'Stripe Checkout Session ID',
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
                    preview:{
                        select:{
                            product: 'product.name',
                            quantity: 'quantity',
                            image: 'product.images',
                            price: 'product.price',
                            currency: 'product.currency'
                        },
                        prepare(select){
                            return{
                                title: `${select.product} X ${select.quantity}`,
                                subtitle: `${select.price} * ${select.quantity}`,
                                media: select.image
                            };
                        }
                    }
                })
            ]
        }),
        defineField({
            name: 'totalPrice',
            title: 'Total price',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'currency',
            title: 'Currency',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'amountDiscount',
            title: 'Amount Discount',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'orderStatus',
            title: 'Order Status',
            type: 'string',
            options: {
                list: [
                    {
                        title: "Pending",
                        value: 'pending'
                    },
                    {
                        title: "Paid",
                        value: 'paid'
                    },
                    {
                        title: "Shipped",
                        value: 'shipped'
                    },
                    {
                        title: "Delivered",
                        value: 'delivered'
                    },
                    {
                        title: "Cancelled",
                        value: 'cancelled'
                    }
                ]
            }
        }),
        defineField({
            name: 'orderDate',
            title: "Order Date",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        })
    ],
    preview:{
        select :{
            name: 'customerName',
            amount: 'totalPrice',
            currency: 'currency',
            orderId: 'orderNumber',
            email: 'customerEmail'
        },
        prepare(select){
            const orderIdSnippet = `${select.orderId.slice(0,5)}...${select.orderId.slice(-5)}`;
            return{
                title: `${select.name} (${orderIdSnippet})`,
                subtitle: `${select.amount} ${select.currency}, ${select.email}`,
                media: BasketIcon
            }
        }
    }
})