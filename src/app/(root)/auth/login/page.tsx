import LoginForm from '@/components/auth/vender-seller/LoginForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='w-1/2 shadow-lg flex  items-start p-4 rounded-lg justify-evenly'>
            <div className='w-[50%] flex flex-col gap-8'>
                <div className='flex gap-4 items-center'>
                    <Link className='bg-green-400 rounded-full text-white p-1' href={"/"}>
                        <BiArrowBack size={28}/>
                    </Link>
                    <h1 className='text-5xl font-bold uppercase '>Login</h1>
                </div>
                <LoginForm/>    
            </div>
            <div className='relative w-[15rem] h-[300px]'>
                <Image src={"https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ2lufGVufDB8fDB8fHww"} alt='' fill />
            </div>
        </div>
    </div>
  )
}

export default LoginPage