import React from 'react'
import SidebarLists from './SidebarLists'
import { FaChartLine, FaChartPie, FaPeopleGroup, FaRegChartBar } from 'react-icons/fa6'
import { IoIosPaper } from 'react-icons/io'
import { IoBagHandleSharp } from 'react-icons/io5'
import { MdDashboard } from 'react-icons/md'
import Logo from '@/components/common/Logo'
import Link from 'next/link'

type Props = {}
const adminSidebardata = [
    {
        label:"dashboard",
        subheadings:[
            {
                subLabel:"Dashboard",
                icon:<MdDashboard/>,
                pathname:"/admin/dashboard"
            },
            {
                subLabel: "Products",
                pathname: "/admin/products",
                icon: <IoBagHandleSharp/>,
              },
            {
                subLabel:"Users",
                icon:<FaPeopleGroup/>,
                pathname:"/admin/customers"
            },
            {
                subLabel:"Transactions",
                icon:<IoIosPaper/>,
                pathname:"/admin/transactions",
            },
        ]
    },
    {
        label:"Charts",
        subheadings:[
            {
                subLabel:"Bar",
                icon:<FaRegChartBar/>,
                pathname:"/admin/bar"
            },
            {
                subLabel:"Pie",
                icon:<FaChartPie/>,
                pathname:"/admin/pie"
            },
            {
                subLabel:"Line",
                icon:<FaChartLine/>,
                pathname:"/admin/line"
            },
        ]
    },
]

const Sidebar = (props: Props) => {
  return (
    <div className='flex flex-col gap-5'>
        <Link href={"/"} className='text-3xl font-bold w-full flex gap-1 items-center justify-start ml-4 py-5'>
            <Logo/>
        </Link>
        <div className='flex flex-col gap-4'>
            {
                adminSidebardata.map((data,i) => (

                    <SidebarLists 
                        key={i} 
                        label={data.label} 
                        subHeadings={data.subheadings}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Sidebar