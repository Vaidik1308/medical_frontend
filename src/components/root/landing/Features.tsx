import Image from 'next/image'
import React from 'react'

type Props = {}

const Features = (props: Props) => {
  return (
    <div className='w-[100%] x-auto'>
        <h1 className='text-5xl font-bold flex items-center gap-1'>
            Our 
            <span className='text-green-400'>Features</span>
        </h1>
        <div className='w-full flex items-center my-4 gap-4'>
            <div className='shadow-2xl w-1/4  flex gap-3 p-4 min-h-[22vh] justify-center items-center rounded-lg'>
                <div className='relative w-[20rem] h-[140px]'>
                    <Image src={"https://plus.unsplash.com/premium_vector-1682310692574-34442a44be23?bg=FFFFFF&w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW52ZW50b3J5fGVufDB8fDB8fHww"} alt='sd' fill/>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl tracking-tighter leading-6 text-green-400'>Real-Time Inventory Updates</h2>
                    <span className='leading-1 text-sm'>
                    Stay informed with up-to-the-minute stock levels and availability.
                    </span>
                </div>
            </div>
            <div className='shadow-2xl w-1/4  flex gap-3 p-4 min-h-[22vh] justify-center items-center rounded-lg'>
                <div className='relative w-[20rem] h-[140px]'>
                    <Image src={"https://plus.unsplash.com/premium_vector-1711987332842-489433dde60c?bg=FFFFFF&w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhbnNhY3Rpb25zfGVufDB8fDB8fHww"} alt='sd' fill/>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl tracking-tighter leading-6 text-green-400'>Secure Transactions</h2>
                    <span className='leading-1 text-sm'>
                        Ensure safe and secure payments with our robust security protocols.
                    </span>
                </div>
            </div>
            <div className='shadow-2xl w-1/4  flex gap-3 p-4 min-h-[22vh] justify-center items-center rounded-lg'>
                <div className='relative w-[20rem] h-[140px]'>
                    <Image src={"https://plus.unsplash.com/premium_vector-1712873279555-f9bed48b7fbe?bg=FFFFFF&w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5hbHl0aWNzfGVufDB8fDB8fHww"} alt='sd' fill/>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl tracking-tighter leading-6 text-green-400'>Detailed Analytics</h2>
                    <span className='leading-1 text-sm'>
                        Gain insights into sales trends, buyer behavior, and market demands.
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features