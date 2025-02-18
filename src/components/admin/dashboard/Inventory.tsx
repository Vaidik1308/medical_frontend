import React from 'react'
import CategoryItem from './CategoryItem'
import { dummyData } from '@/lib/data/dummyData'

type Props = {}

const Inventory = (props: Props) => {
  return (
    <div className='w-fit  p-2 rounded-lg flex flex-col justify-start gap-5 bg-gray-100 shadow-xl items-start py-5'>
        <h1 className='text-2xl tracking-widest uppercase font-extralight'>Inventory</h1>
        <div>
        {dummyData.categories.map((i) => (
                <CategoryItem
                  key={i.heading}
                  value={i.value}
                  heading={i.heading}
                  color={`hsl(${i.value * 4}, ${i.value}%, 50%)`}
                />
              ))}
        </div>
    </div>
  )
}

export default Inventory