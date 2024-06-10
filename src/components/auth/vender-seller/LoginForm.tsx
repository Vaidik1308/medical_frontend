'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { loginHandler } from '@/lib/actions'
import React, { useActionState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { BiSolidLogInCircle } from 'react-icons/bi'

type Props = {}

const initialState= {
    error:"",
    success:"",
}
function SubmitButton() {
    const { pending } = useFormStatus();
  
    return (
        <Button aria-disabled={pending} className='hover:bg-green-400 w-1/3 flex gap-1 items-center' type='submit'>
            <span>Login</span>
            <BiSolidLogInCircle size={22} />
        </Button>
    );
  }
const LoginForm = (props: Props) => {
    
    const [state,formAction] = useFormState(loginHandler,initialState)
  return (
    <form className='w-full flex flex-col gap-4' action={formAction}>
        <div className='w-[100%] flex flex-col gap-2'>
            <Label>Email</Label>
            <Input name='email' className='w-full' type='email' placeholder='abc@gmail.com' />
        </div>
        <div className='w-[100%] flex flex-col gap-2'>
            <Label>Password</Label>
            <Input name='password' className='w-full' type='password' placeholder='abc@gmail.com' />
        </div>
        <div className='flex flex-col gap-2'>
            <SubmitButton/>
            {state?.success && <span className='bg-green-200 rounded-lg p-2 text-green-700 font-bold w-fit text-xs'>{state.success}</span>}
            {state?.error && <span className='bg-red-200 rounded-lg p-2 text-red-600 w-fit text-xs'>{state.error}</span>}
        </div>
    </form>
  )
}

export default LoginForm