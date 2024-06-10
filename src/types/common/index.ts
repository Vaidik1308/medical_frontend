export type LoginHandlerType = {
    email:string;
    password:string;
}

export type SignUpType = {
    email:string;
    password:string;
    name:string;
    phone:number;
    address:string;
    city:string;
    state:string;
    role:"seller" | "vendor";
    gender:"male" | "female" | "other";
}