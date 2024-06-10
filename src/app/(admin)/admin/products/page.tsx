
import React from 'react'
import ProductPage from '@/components/admin/products/ProductPage'
import { medicineProductsData } from '@/lib/data/datas'

type Props = {}

const Products = (props: Props) => {
  
  return (
    <div className='flex flex-col p-5  w-full'>
      <ProductPage productsData={medicineProductsData} />
    </div>
  )
}

export default Products