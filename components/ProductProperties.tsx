import { Product } from '@/sanity.types'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const ProductProperties = ({ product }: { product: Product }) => {
    return (
        <div>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>{product?.intro}</AccordionTrigger>
                    <AccordionContent className='flex flex-col gap-1.5'>
                        <p className='text-sm font-semibold flex items-center justify-between'> Brand <span>Unknown</span></p>
                        <p className='text-sm font-semibold flex items-center justify-between'> Collection <span>Unknown</span></p>
                        <p className='text-sm font-semibold flex items-center justify-between'> Color <span>Unknown</span></p>
                        <p className='text-sm font-semibold flex items-center justify-between'> Size <span>Unknown</span></p>
                        <p className='text-sm font-semibold flex items-center justify-between'> Type <span>Unknown</span></p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default ProductProperties