'use server'

import { LoginSchema } from "./zodSchema/authSchema";

export const loginHandler = async ( prevState:{error:string,success:string},formData:FormData) => {
    const {email,password} = Object.fromEntries(formData);
    const parse = LoginSchema.safeParse({
        email,
        password
    })

    if(!parse.success){
        return {error:"Invalid Credentials"}
    }

    const data = parse.data
    console.log(data);

    return {success:"login Successfully"}

    // database pr send krna
    
}