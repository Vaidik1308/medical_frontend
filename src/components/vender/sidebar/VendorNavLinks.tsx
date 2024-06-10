'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FaClipboardList } from 'react-icons/fa'
import { FaBoxesPacking } from 'react-icons/fa6'
import { MdDashboard } from 'react-icons/md'

type Props = {}

const VendorNavLinks = (props: Props) => {
    const pathname = usePathname()
    const sidebarLinks = [
        {
            label:"Dashboard",
            route:"/vender/dashboard",
            icon:<MdDashboard size={25} />
        },
        {
            label:"Products",
            route:"/vender/products",
            icon:<FaBoxesPacking  size={25} />
        },
        {
            label:"Orders",
            route:"/vender/orders",
            icon:<FaClipboardList  size={25} />
        },
    ]
  return (
    <>
        {
                sidebarLinks.map((item,i) => (
                    <Link className={`flex items-center justify-between w-[85%] mx-auto ${ pathname === item.route ? "bg-gray-200" : ""} hover:bg-gray-300 duration-100  p-2 rounded-lg px-4`} href={item.route} key={i}>
                        <span>{item.label}</span>
                        <span>{item.icon}</span>
                    </Link>
                ))
            }
    </>
  )
}

export default VendorNavLinks