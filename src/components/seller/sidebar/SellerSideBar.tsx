import Logo from '@/components/common/Logo'
import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SellerNavLinks from './SellerNavLinks'

type Props = {}

const SellerSideBar = (props: Props) => {
    
  return (
    <div>
        <div className='w-full flex justify-between items-center px-2 border-b-[1px] pb-4 border-gray-400'>
            <div className='text-3xl font-bold gap-1 flex items-center '>
                <Logo/>
            </div>
            <Link className='flex items-center justify-center' href={"/"}>
                <Home size={26}/>
            </Link>
        </div>
        <div className='flex flex-col py-4 gap-4 font-semibold'>
            <SellerNavLinks/>
        </div>
    </div>
  )
}

export default SellerSideBar