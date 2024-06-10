import Features from '@/components/root/landing/Features'
import HeroSection from '@/components/root/landing/hero'
import SubHeader from '@/components/root/landing/SubHeader'
import Testimonials from '@/components/root/landing/Testimonials'
import React from 'react'

type Props = {}

const RootPage = (props: Props) => {
  return (
    <div className='p-5 max-w-full  container '>

      <div className='w-full my-12'>
        <HeroSection/>
      </div>
      <div className='my-12 w-full border-t-[1px] border-b-[1px] border-gray-300 py-8'>
        <SubHeader/>
      </div>
      <div className='my-12'>
        <Features/>
      </div>
      <div className='my-12'>
        <Testimonials/>
      </div>
    </div>
  )
}

export default RootPage