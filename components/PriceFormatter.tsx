import { cn } from '@/lib/utils';
import React from 'react'

interface Props{
    amount: number | undefined;
    className?: string;
}


const PriceFormatter = ({amount, className}:Props) => {

    const formattedPrice = new Number(amount).toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2
      });
     
  return (
    <span className={cn('text-lg font-semibold', className)}>{formattedPrice}</span>
  )
}

export default PriceFormatter