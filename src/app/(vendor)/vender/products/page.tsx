import ProductPage from '@/components/admin/products/ProductPage'
import { medicineProductsData, productsData } from '@/lib/data/datas'
import React from 'react'

type Props = {}

const VendorProductsPage = (props: Props) => {
  return (
    <div className='flex flex-col p-5  w-full'>
      <ProductPage productsData={medicineProductsData} />
    </div>
  )
}

export default VendorProductsPage