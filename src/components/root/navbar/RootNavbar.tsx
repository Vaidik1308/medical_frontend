import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import NavLinks from './NavLinks'
import { Sidebar } from './SideBar'
import Logo from '@/components/common/Logo'
import AuthLinks from '@/components/common/AuthLinks'
import { Profile } from './Profile'

type Props = {}

const RootNavbar = (props: Props) => {
    const isAuthenticated = true
  return (
    <div className='flex items-center  justify-between p-5 border-b-[1px] border-gray-300 max-w-full'>
        <div className='font-bold text-2xl uppercase justify-center flex gap-1 items-center'>
            <Logo/>
        </div>
        <div className='hidden items-center gap-2 w-2/3 justify-evenly md:flex'>
            <div className='flex items-center gap-8'>
                <NavLinks/>
            </div>
        </div>
        <div className='flex items-center'>
        <div className='w-fit'>
            {
                !isAuthenticated && (
                    <div className='flex items-center gap-2'>
                        <AuthLinks/>
                    </div>
                )
            }
            {
                isAuthenticated && (
                    <Profile/>
                )
            }
        </div>
        <div className='md:hidden flex'>
            <Sidebar/>
        </div>
        </div>
    </div>
  )
}

export default RootNavbar