export type CardType = {
    heading: string;
    value: number;
    percent: number;
    color: string;
    amount?: boolean;
}
export type Product = {
    id: string;
    name: string;
    price: number;
    stock: string;
    action:string;
    image:string
  }
  export type MedicineProduct = {
    id: string;
    name: string;
    category:string;
    scientificName:string;
    manf:string;
    desc:string;
    stock:number
  }
export type Customer = {
    id: string;
    image:string
    name: string;
    gender: "Male" | "Female" | "Other";
    email: string;
    role: "User" | "Admin";
    action:string;
  }
export type Transaction = {
    id: string;
    name: string;
    quantity: string;
    discount:number;
    email: string;
    status: "Pending" | "Success" | "Failed";
  }

  export type OrdersType = {
    id: string;
    name: string;
    quantity: string;
    price:number;
    status: "Placed" | "Out For Delivery" | "Delivered";
  }


  export type VenderType = {
    id:string;
    firmName:string;
    venderName:string;
    image:string;
    address:String;
  }