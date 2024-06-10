import React from 'react'
import Card from '../common/Card'
import InfoContainer from '../common/InfoContainer'

type Props = {}

const bgColor = [
    "bg-green-200",
    "bg-blue-300",
    "bg-green-200",
    "bg-blue-300",
]

const TopSection = (props: Props) => {
  return (
    <div className='grid grid-cols-4 gap-4'>
        <Card bgColor={bgColor[0]}>
            <div className='text-2xl font-semibold text-gray-500 flex justify-between items-center w-full'>
                {"ORDERS"}
                <InfoContainer label='Orders' value='total no. of orders generated successfully till now'/>    
            </div>
            <div className='self-start text-3xl font-bold'>
                {"456+"}
            </div>
        </Card>
        <Card bgColor={bgColor[1]}>
            <div className='text-2xl font-semibold text-gray-500 flex justify-between items-center w-full'>
                {"REVENUE"}  
                <InfoContainer label='Revenue' value='total amount generated through successfully orders'/>    
            </div>
            <div className='self-start text-3xl font-bold text-green-600'>
                {"Rs.4,56,256"}
            </div>
        </Card>
        <Card bgColor={bgColor[2]}>
            <div className='text-2xl font-semibold text-gray-500 flex justify-between items-center w-full'>
                {"PRODUCTS"}    
                <InfoContainer label='Products' value='total no. of available products'/>  
            </div>
            <div className='self-start text-3xl font-bold'>
                {"500+"}
            </div>
        </Card>
        <Card bgColor={bgColor[3]}>
            <div className='text-2xl font-semibold text-gray-500 flex justify-between items-center w-full'>
                {"OUT OF STOCK"}  
                <InfoContainer label='Out Of Stock' value='Products which are not available'/>    
            </div>
            <div className='self-start text-3xl font-bold text-red-400'>
                {"46"}
            </div>
        </Card>
    </div>
  )
}

export default TopSection