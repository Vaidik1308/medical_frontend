import Image from 'next/image'
import React from 'react'

type Props = {}

const Testimonials = (props: Props) => {
  return (
    <div>
        <h1 className='text-5xl font-bold'>Testimonials</h1>
        <div className='w-[90%] mx-auto flex flex-col gap-4 mt-8'>
            <div className='flex items-center'>
                <div className='relative size-20 rounded-full'>
                    <Image className='object-cover rounded-full' src={"https://plus.unsplash.com/premium_vector-1683141132250-12daa3bd85cf?bg=FFFFFF&w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGV8ZW58MHx8MHx8fDA%3D"} alt='' fill/>
                </div>
                <div className='w-fit flex flex-col '>
                    <p>{"Our sales have increased by 30% since joining this platform. Highly recommended!"}</p>
                    <span className='self-end italic text-muted-foreground'>~Owner</span>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='relative size-20 rounded-full'>
                    <Image className='object-cover rounded-full' src={"https://plus.unsplash.com/premium_vector-1683141132250-12daa3bd85cf?bg=FFFFFF&w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGV8ZW58MHx8MHx8fDA%3D"} alt='' fill/>
                </div>
                <div className='w-fit flex flex-col '>
                    <p>{"The best decision we made was partnering with this network. The support and ease of use are unparalleled"}</p>
                    <span className='self-end italic text-muted-foreground'>~Owner</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials