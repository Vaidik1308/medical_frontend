import Image from 'next/image'
import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

type Props = {}

const SubHeader = (props: Props) => {
  return (
    <div className='flex flex-col w-full gap-12'>

      <div className='flex w-[80%] self-start  gap-4'>
        <div className='relative w-[25rem] h-[350px] rounded-lg rounded-tl-[80px]'>
          {/* image */}
          <Image fill alt='sfa' className='object-cover rounded-tl-[80px]' src={"https://images.unsplash.com/photo-1603706580932-6befcf7d8521?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhhcm1hY3l8ZW58MHx8MHx8fDA%3D"}/>
        </div>
        <div className='w-[70%] flex flex-col justify-center gap-3'>
          <div className='mt-2'>
            {/* text */}
            <h1 className='text-5xl font-bold flex flex-col gap-1'>
              Expand Your
              <span className='text-green-400'>Reach</span>
            </h1>
            <span className='text-muted-foreground text-lg font-semibold'>Access a vast network of pharmacies and healthcare providers</span>
          </div>
          <div className='grid grid-cols-3 w-[80%]'>
            {/* image */}
            <div className='relative w-[22rem] h-[200px] col-span-2'>
              <Image alt='' className='object-cover' src={"https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBoYXJtYWN5fGVufDB8fDB8fHww"} fill/>
            </div>
            <div className='relative w-[15rem] h-[200px] col-span-1'>
              <Image alt='' className='object-cover rounded-br-[80px]' src={"https://images.unsplash.com/photo-1622230208995-0f26eba75875?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBoYXJtYWN5fGVufDB8fDB8fHww"} fill/>
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-[80%] self-end gap-4 '>
        <div className='relative w-[25rem] h-[350px] rounded-lg rounded-tl-[80px]'>
          {/* image */}
          <Image fill alt='sfa' className='object-cover rounded-tl-[80px]' src={"https://plus.unsplash.com/premium_vector-1682269323155-f1b5f894a73c?bg=FFFFFF&w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGhhcm1hY3klMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww"}/>
        </div>
        <div className='w-[70%] flex flex-col justify-center gap-3'>
          <div className='mt-2'>
            {/* text */}
            <h1 className='text-5xl font-bold flex flex-col gap-1'>
              Efficient Order 
              <span className='text-green-400'>Management</span>
            </h1>
            <span className='text-muted-foreground text-lg font-semibold'>Simplify your purchasing and sales processes with our intuitive platform.</span>
          </div>
          <div className='grid grid-cols-3 w-[80%]'>
            {/* image */}
            <div className='relative w-[22rem] h-[200px] col-span-2'>
              <Image alt='' className='object-cover' src={"https://plus.unsplash.com/premium_photo-1661373688907-6869937e6927?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhhcm1hY3klMjBvcmRlcnxlbnwwfHwwfHx8MA%3D%3D"} fill/>
            </div>
            <div className='relative w-[15rem] h-[200px] col-span-1'>
              <Image alt='' className='object-cover rounded-br-[80px]' src={"https://images.unsplash.com/photo-1611072965169-e1534f6f300c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBoYXJtYWN5JTIwb3JkZXJ8ZW58MHx8MHx8fDA%3D"} fill/>
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-[80%] self-start gap-4'>
        <div className='relative w-[25rem] h-[350px] rounded-lg rounded-tl-[80px]'>
          {/* image */}
          <Image fill alt='sfa' className='object-cover rounded-tl-[80px]' src={"https://images.unsplash.com/photo-1580281658626-ee379f3cce93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBoYXJtYWN5JTIwb3JkZXJ8ZW58MHx8MHx8fDA%3D"}/>
        </div>
        <div className='w-[70%] flex flex-col justify-center gap-3'>
          <div className='mt-2'>
            {/* text */}
            <h1 className='text-5xl font-bold flex flex-col gap-1'>
            Quality  
              <span className='text-green-400'>Assurance</span>
            </h1>
            <span className='text-muted-foreground text-lg font-semibold'>Partner with certified suppliers for reliable and compliant products.</span>
          </div>
          <div className='grid grid-cols-3 w-[80%]'>
            {/* image */}
            <div className='relative w-[22rem] h-[200px] col-span-2'>
              <Image alt='' className='object-cover' src={"https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBoYXJtYWN5JTIwb3JkZXJ8ZW58MHx8MHx8fDA%3D"} fill/>
            </div>
            <div className='relative w-[15rem] h-[200px] col-span-1'>
              <Image alt='' className='object-cover rounded-br-[80px]' src={"https://images.unsplash.com/photo-1622230208995-0f26eba75875?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBoYXJtYWN5fGVufDB8fDB8fHww"} fill/>
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-[80%] self-end gap-4'>
        <div className='relative w-[25rem] h-[350px] rounded-lg rounded-tl-[80px]'>
          {/* image */}
          <Image fill alt='sfa' className='object-cover rounded-tl-[80px]' src={"https://images.unsplash.com/photo-1580281798366-ea571ecb5fc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBoYXJtYWN5JTIwb3JkZXJ8ZW58MHx8MHx8fDA%3D"}/>
        </div>
        <div className='w-[70%] flex flex-col justify-center gap-3'>
          <div className='mt-2'>
            {/* text */}
            <h1 className='text-5xl font-bold flex flex-col gap-1'>
            Competitive 
              <span className='text-green-400'>Pricing</span>
            </h1>
            <span className='text-muted-foreground text-lg font-semibold'>Gain access to exclusive deals and discounts on pharmaceutical products.</span>
          </div>
          <div className='grid grid-cols-3 w-[80%]'>
            {/* image */}
            <div className='relative w-[22rem] h-[200px] col-span-2'>
              <Image alt='' className='object-cover' src={"https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBoYXJtYWN5fGVufDB8fDB8fHww"} fill/>
            </div>
            <div className='relative w-[15rem] h-[200px] col-span-1'>
              <Image alt='' className='object-cover rounded-br-[80px]' src={"https://plus.unsplash.com/premium_photo-1681995737073-e3bed840a219?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHBoYXJtYWN5JTIwb3JkZXJ8ZW58MHx8MHx8fDA%3D"} fill/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubHeader