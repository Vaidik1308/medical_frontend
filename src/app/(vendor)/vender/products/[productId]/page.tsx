import { Button } from '@/components/ui/button'
import ProductDetails from '@/components/vender/products/ProductDetails'
import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
    params:{productId:string}
}

const SingleProductPage = ({params}: Props) => {
  return (
    <div className='bg-white m-4 min-h-fit rounded-lg p-3'>
      <div className='flex items-center gap-2'>
        <Link href={"/vender/products"}>
          <ArrowLeftCircle/>
        </Link>
        <h1 className='text-2xl font-bold'>Product Page</h1>
      </div>
      <ProductDetails/>
    </div>
  )
}

export default SingleProductPage