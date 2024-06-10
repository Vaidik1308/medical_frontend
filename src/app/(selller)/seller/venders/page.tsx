import VendersPage from '@/types/seller/vender/VendersPage'
import React from 'react'

type Props = {}

const Venders = (props: Props) => {
  return (
    <div>
      <h1 className='text-2xl font-semibold'>Find Your Vender here...</h1>
      <div className='my-8'>
        <VendersPage/>
      </div>
    </div>
  )
}

export default Venders