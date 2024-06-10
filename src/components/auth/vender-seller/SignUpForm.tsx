'use client'
import { SelectComp } from '@/components/common/SelectComp';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'
import React, { ChangeEvent, useState } from 'react'
import { useFormStatus } from 'react-dom';
import { BiSolidLogInCircle } from 'react-icons/bi';

type Props = {}


const roleData = [
    {
        type:"Seller",
        value:"seller"
    },
    {
        type:"Vendor",
        value:"vendor"
    },
]
const genderData = [
    {
        type:"Male",
        value:"male"
    },
    {
        type:"Female",
        value:"female"
    },
    {
        type:"Other",
        value:"other"
    },
]

const SignUpForm = (props: Props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")
    const [role, setRole] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const handleSubmit = (e:ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log({name,email,password,role,gender,phone,address,city,state});
        
    }
    function SubmitButton() {
        const { pending } = useFormStatus();
        return (
            <Button aria-disabled={pending} className='hover:bg-green-400 w-1/3 flex gap-2 items-center' type='submit'>
                <span>Register</span>
                <BiSolidLogInCircle size={22} />
            </Button>
        );
      }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2' action="">
        <div className='w-full grid grid-cols-2 gap-4'>
            <div className='w-[100%] flex flex-col gap-2'>
                <Label>Name</Label>
                <Input value={name} onChange={(e) => setName(e.target.value)} name='name' className='w-full' type='text' placeholder='ex. ankur kumar' />
            </div>
            <div className='w-[100%] flex flex-col gap-2'>
                <Label>Join As</Label>
                <SelectComp value={role} setValue={setRole} header='Role' selectData={roleData}/>
            </div>
            <div className='w-[100%] flex flex-col gap-2'>
                <Label>Email</Label>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} name='email' className='w-full' type='email' placeholder='abc@gmail.com' />
            </div>
            <div className='w-[100%] flex flex-col gap-2'>
                <Label>Password</Label>
                <Input value={password} onChange={(e) => setPassword(e.target.value)} name='password' className='w-full' type='password' placeholder='abc@gmail.com' />
            </div>
            <div className='w-[100%] flex flex-col gap-2'>
                <Label>Gender</Label>
                <SelectComp value={gender} setValue={setGender} header='gender' selectData={genderData}/>
            </div>
            <div className='w-[100%] flex flex-col gap-2'>
                <Label>phone</Label>
                <Input value={phone} onChange={(e) => setPhone(e.target.value)} name='phone' className='w-full' type='number' placeholder='9152xxxx' />
            </div>
            <div className='w-[100%] flex flex-col gap-2'>
                <Label>Shop no./Street</Label>
                <Input value={address} onChange={(e) => setAddress(e.target.value)} name='address' className='w-full' type='text' placeholder='#123, name stree...' />
            </div>
            <div className='w-[100%] flex flex-col gap-2'>
                <Label>City</Label>
                <Input value={city} onChange={(e) => setCity(e.target.value)} name='city' className='w-full' type='text' placeholder='Ex.Ajmer' />
            </div>
            <div className='w-[100%] flex flex-col gap-2'>
                <Label>State</Label>
                <Input value={state} onChange={(e) => setState(e.target.value)} name='state' className='w-full' type='text' placeholder='Ex. Rajasthan' />
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <SubmitButton/>
            {/* {state?.success && <span className='bg-green-200 rounded-lg p-2 text-green-700 font-bold w-fit text-xs'>{state.success}</span>}
            {state?.error && <span className='bg-red-200 rounded-lg p-2 text-red-600 w-fit text-xs'>{state.error}</span>} */}
        </div>
    </form>
  )
}

export default SignUpForm