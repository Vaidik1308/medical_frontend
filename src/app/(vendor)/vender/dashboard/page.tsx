import Inventory from '@/components/admin/dashboard/Inventory'
import TopSection from '@/components/vender/TopSection'
import React from 'react'

type Props = {}

const VenderDashboard = (props: Props) => {
  return (
    <div className='w-full flex flex-col gap-5'>
        <div>
          <TopSection/>
        </div>
        <div className=' w-[100%] mx-auto min-h-[80vh]'>
          {/*  */}
          <div className=' flex items-center gap-2'>
            <Inventory/>
          </div>
        </div>
    </div>
  )
}

export default VenderDashboard