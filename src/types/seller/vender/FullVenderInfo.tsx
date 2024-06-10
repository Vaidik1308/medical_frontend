import React from 'react'
import VenderDetails from './VenderDetails'
import VendorProducts from './VendorProducts'

type Props = {}

const FullVenderInfo = (props: Props) => {
  return (
    <div className='w-full flex flex-col gap-4'>
        <div>
            <VenderDetails/>
        </div>
        <div>
            <VendorProducts/>
        </div>
    </div>
  )
}

export default FullVenderInfo