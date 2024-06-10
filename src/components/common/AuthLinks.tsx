import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

type Props = {}

const AuthLinks = (props: Props) => {
  return (
    <>
        <Button asChild className='bg-green-400 text-black hover:text-white w-1/3 md:w-fit'>
          <Link href={"/auth/join"}>Join Now</Link>
        </Button>
        <Button asChild className='hover:bg-green-400 hover:text-black w-1/3 md:w-fit' variant={"default"}>
          <Link href={"/auth/login"}>Already Joined</Link>
        </Button>
    </>
  )
}

export default AuthLinks