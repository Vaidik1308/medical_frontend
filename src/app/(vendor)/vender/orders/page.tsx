import Orders from '@/components/vender/orders/Orders'
import { ordersData } from '@/lib/data/datas'
import React from 'react'

type Props = {}

const OrdersPage = (props: Props) => {
  return (
      <div className='my-10'>
        <Orders ordersData={ordersData}/>
      </div>
  )
}

export default OrdersPage