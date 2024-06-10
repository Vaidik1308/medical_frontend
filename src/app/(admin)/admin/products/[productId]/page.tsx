import { Button } from '@/components/ui/button'
import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {
    params:{productId:string}
}

const SingleProductPage = ({params}: Props) => {
  return (
    <div className='bg-white m-4 min-h-screen rounded-lg p-3'>
      <div className='flex items-center gap-2'>
        <Link href={"/vender/products"}>
          <ArrowLeftCircle/>
        </Link>
        <h1 className='text-2xl font-bold'>Product Page</h1>
      </div>
      <div className='w-[65%] mx-auto flex flex-col gap-1 bg-green-100 p-5 mt-32 shadow-2xl rounded-lg'>
        <span className='font-semibold uppercase bg-zinc-300 w-fit p-1 rounded-lg text-sm'>cold</span>
        <div className='text-4xl flex items-center gap-1 font-bold'>
          <h3>Paracetemol</h3>
          <span>{"(something)"}</span>
        </div>
        <span className='font-semibold uppercase bg-green-300 w-fit px-2 p-1 rounded-lg text-sm'>Neosprin</span>
        <div className='w-full px-1 py-2 text-sm text-muted-foreground text-justify'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nulla dolor tempore, eius modi quaerat quasi quibusdam atque nostrum blanditiis suscipit numquam cumque cum porro quos ex fugit dolorem fuga!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nulla dolor tempore, eius modi quaerat quasi quibusdam atque nostrum blanditiis suscipit numquam cumque cum porro quos ex fugit dolorem fuga!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nulla dolor tempore, eius modi quaerat quasi quibusdam atque nostrum blanditiis suscipit numquam cumque cum porro quos ex fugit dolorem fuga!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nulla dolor tempore, eius modi quaerat quasi quibusdam atque nostrum blanditiis suscipit numquam cumque cum porro quos ex fugit dolorem fuga!
        </div>
        <div className='flex items-center gap-2 w-full justify-end'>
        <Button>
          Edit
        </Button>
        <Button variant={"destructive"}>
          Remove
        </Button>
      </div>
      </div>
      
    </div>
  )
}

export default SingleProductPage