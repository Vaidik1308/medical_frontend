import { z } from "zod";

export const LoginSchema = z.object({
    email:z.string().email({
        message:"Please enter your email"
    }),
    password:z.string().min(5,{message:"invalid password"}).max(12,{message:"incorrect Password"}),
})