import React from 'react'
import { DataTable } from '@/components/admin/table/data-table'
import { columns } from '@/app/(vendor)/vender/orders/columns'
import { OrdersType } from '@/types/admin/dashboard'

type Props = {
  ordersData:OrdersType[]
}

const Orders = ({ordersData}: Props) => {
  return (
    <div className='bg-white rounded-lg p-5 flex flex-col justify-start gap-10'>
        <h1 className='text-2xl font-bold'>Orders</h1>
        <DataTable columns={columns} data={ordersData} />
    </div>
  )
}

export default Orders