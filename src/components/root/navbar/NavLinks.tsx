'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const NavLinks = (props: Props) => {
    const pathname = usePathname()
    const navbarLinks = [
        {
            label:"Home",
            path:"/"
        },
        {
            label:"About Us",
            path:"/about"
        },
        {
            label:"Contact Us",
            path:"/contact"
        },
    ]
  return (
    <>
        {navbarLinks.map((item,i) => (
            <Link key={i} className={`hover:text-green-500 duration-300 ${pathname === item.path ? "text-green-500" : ""}`} href={item.path}>{item.label}</Link>
        ))}
       
    </>
  )
}

export default NavLinks