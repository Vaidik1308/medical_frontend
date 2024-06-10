import React from 'react'
import SingleVender from './SingleVender'

type Props = {}

const VendersPage = (props: Props) => {
  return (
    <div>
        <div>
            {/* Search or filter functionality */}
        </div>
        <div className='flex flex-col gap-8'>
            {[1,2,3,4,5,6].map((item) => (
                <SingleVender key={item}/>
            ))}
        </div>
    </div>
  )
}

export default VendersPage