import { Button } from '@/components/ui/button'
import React from 'react'
import { EditPop } from './EditPop'

type Props = {}

const ProductDetails = (props: Props) => {
  return (
    <div className='w-[65%] mx-auto flex flex-col gap-1 bg-green-100 p-5 mt-20 shadow-2xl rounded-lg'>
        <span className='font-semibold uppercase bg-zinc-300 w-fit p-1 rounded-lg text-sm'>cold</span>
        <div className='text-4xl flex items-center gap-1 font-bold'>
          <h3>Paracetemol</h3>
          <span>{"(something)"}</span>
        </div>
        <div className='w-full flex justify-between items-center'>
        <span className='font-semibold uppercase bg-green-300 w-fit px-2 p-1 rounded-lg text-sm'>Neosprin</span>
        <span className='font-semibold uppercase bg-zinc-100 w-fit px-2 p-1 rounded-lg text-sm'>Stock : {"45"}</span>
        </div>
        <div className='w-full px-1 py-2 text-sm text-muted-foreground text-justify'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nulla dolor tempore, eius modi quaerat quasi quibusdam atque nostrum blanditiis suscipit numquam cumque cum porro quos ex fugit dolorem fuga!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nulla dolor tempore, eius modi quaerat quasi quibusdam atque nostrum blanditiis suscipit numquam cumque cum porro quos ex fugit dolorem fuga!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nulla dolor tempore, eius modi quaerat quasi quibusdam atque nostrum blanditiis suscipit numquam cumque cum porro quos ex fugit dolorem fuga!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nulla dolor tempore, eius modi quaerat quasi quibusdam atque nostrum blanditiis suscipit numquam cumque cum porro quos ex fugit dolorem fuga!
        </div>
        <div className='flex items-center gap-2 w-full justify-end'>
        <EditPop/>
        <Button variant={"destructive"}>
          Remove
        </Button>
      </div>
      </div>
  )
}

export default ProductDetails