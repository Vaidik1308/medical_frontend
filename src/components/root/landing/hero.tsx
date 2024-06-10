import { ArrowBigDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { IoArrowDownCircle } from 'react-icons/io5'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <div className='w-full flex items-center justify-between  relative pb-8'>
        <div className='mt-8'>
            <h1 className='md:text-7xl font-bold flex flex-col'>
                <span>
                    Join the <span className='text-green-400'>Leading</span> 
                </span>
                <span> Network of </span>
                <span className='text-green-400'>Pharmacy</span>
                <span> 
                    Vendors and <span className='text-green-400'>Sellers</span>
                </span>
            </h1>
            <div className='text-xl my-4 font-semibold'>
            <p className='text-muted-foreground'>Empower Your Pharmacy Business with Our Trusted Platform</p>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-2'>
            <div className='relative w-[600px] h-[250px] overflow-hidden rounded-tl-[80px] col-span-2 '>
                <Image fill src={"https://images.unsplash.com/photo-1576602976047-174e57a47881?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhhcm1hY3l8ZW58MHx8MHx8fDA%3D"} alt='1' className='rounded-lg object-cover hover:scale-110 duration-300' />
            </div>
            <div className='relative w-[300px] h-[200px] overflow-hidden rounded-lg col-span-1'>
                <Image fill src={"https://images.unsplash.com/photo-1642055514517-7b52288890ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBoYXJtYWN5fGVufDB8fDB8fHww"} alt='2' className='rounded-lg  object-cover hover:scale-110 duration-300' />
            </div>
            <div className='relative w-[300px] h-[200px] overflow-hidden rounded-br-[80px] col-span-1'>
                <Image fill src={"https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhhcm1hY3l8ZW58MHx8MHx8fDA%3D"} alt='1' className='rounded-lg  object-cover hover:scale-110 duration-300' />
            </div>
        </div>
        <div className='absolute -bottom-8 left-0 right-0 mx-auto  z-10 flex items-center justify-center'>
            <IoArrowDownCircle className='text-green-400 shadow-lg rounded-full animate-bounce self-center' size={52}/>
        </div>
    </div>
  )
}

export default HeroSection