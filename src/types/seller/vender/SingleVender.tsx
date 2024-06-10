import { LocateIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLocationArrow, FaLocationDot } from 'react-icons/fa6'

type Props = {}

const SingleVender = (props: Props) => {
  return (
    <div  className='flex  items-center justify-start gap-4  shadow-lg w-[85%] mx-auto p-4'>
        <div className='relative size-28'>
            <Image src={"https://plus.unsplash.com/premium_vector-1682298907650-f309cf27b5d0?bg=FFFFFF&w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxmYWNlfGVufDB8fDB8fHww"} alt='' fill className='rounded-full object-cover'/>
        </div>
        <div className='flex justify-between gap-2 w-[80%]'>
            <div className='w-fit flex flex-col gap-0.5'>
                <h3 className='font-bold text-2xl capitalize'>
                    shakti Pharma Supply
                </h3>
                <div className='flex items-start flex-col gap-1'>
                    <span className='text-sm bg-green-100 px-2 capitalize font-semibold rounded-lg '>
                        abhimanyu Singh
                    </span>
                    <div className='flex items-center text-xs gap-1'>
                        <span className='font-bold   rounded-sm '>
                            <FaLocationDot size={13}/>
                        </span>
                        <span className='font-bold text-muted-foreground'>#123, 2nd floor, 8th cross,kumarswamy layout</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='text-sm font-bold uppercase text-muted-foreground'>20+ Orders</span>
                <Link className='text-sm group flex items-center gap-1' href={"/seller/venders/1"}>
                    <span className='group-hover:text-blue-500 duration-300'>view more details</span>
                    <span className='group-hover:rotate-45 duration-300'>
                        <FaLocationArrow/>
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SingleVender