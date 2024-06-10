import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'

type Props = {
    label:string;
    value:string;
}

const InfoContainer = ({label,value}: Props) => {
  return (
    <div className='relative group '>
        <span className=' flex cursor-pointer text-black'>
            <FaInfoCircle size={22} />
        </span>
        <div className='text-sm font-medium group-hover:flex hidden duration-300 absolute top-8 right-5 w-[12rem] p-2 py-1 z-10 bg-white rounded-lg  flex-col border-[1px] border-black border-solid'>
            <h3 className='font-bold text-lg border-b-[1px] border-gray-300 mb-2'>{label}</h3>
            <p className='leading-3 text-xs'>{value}</p>
        </div>   
    </div>
  )
}

export default InfoContainer