import { Customer, MedicineProduct, OrdersType, Product, Transaction } from "@/types/admin/dashboard";

export  const productsData:Product[] = [
    {
      id: "1",
      name: "Wireless Mouse",
      price: 25.99,
      stock: "0",
      action: "Manage",
      // email: "support@example.com",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "2",
      name: "Mechanical Keyboard",
      price: 89.99,
      stock: "45",
      action: "delete",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "3",
      name: "USB-C Hub",
      price: 34.99,
      stock: "45",
      action: "Manage",
      // email: "contact@example.com",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "4",
      name: "HD Webcam",
      price: 49.99,
      stock: "45",
      action: "Manage",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "5",
      name: "Bluetooth Speaker",
      price: 59.99,
      stock: "45",
      action: "delete",
      // email: "info@example.com",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "5",
      name: "Bluetooth Speaker",
      price: 59.99,
      stock: "45",
      action: "delete",
      // email: "info@example.com",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "5",
      name: "Bluetooth Speaker",
      price: 59.99,
      stock: "45",
      action: "delete",
      // email: "info@example.com",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "5",
      name: "Bluetooth Speaker",
      price: 59.99,
      stock: "45",
      action: "delete",
      // email: "info@example.com",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "5",
      name: "Bluetooth Speaker",
      price: 59.99,
      stock: "45",
      action: "delete",
      // email: "info@example.com",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "5",
      name: "Bluetooth Speaker",
      price: 59.99,
      stock: "45",
      action: "delete",
      // email: "info@example.com",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "5",
      name: "Bluetooth Speaker",
      price: 59.99,
      stock: "45",
      action: "delete",
      // email: "info@example.com",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];
export  const medicineProductsData:MedicineProduct[] = [
    {
      id: "1",
      name: "paracetemol",
      category:"cold",
      scientificName: "something",
      manf:"Neosprin",
      desc:"this is basic Products which inclues something",
      stock:45
    },
    {
      id: "1",
      name: "paracetemol",
      category:"cold",
      scientificName: "something",
      manf:"Neosprin",
      desc:"this is basic Products which inclues something",
      stock:45
    },
    {
      id: "1",
      name: "paracetemol",
      category:"cold",
      scientificName: "something",
      manf:"Neosprin",
      desc:"this is basic Products which inclues something",
      stock:45
    },
    {
      id: "1",
      name: "paracetemol",
      category:"cold",
      scientificName: "something",
      manf:"Neosprin",
      desc:"this is basic Products which inclues something",
      stock:45
    },
    {
      id: "1",
      name: "paracetemol",
      category:"cold",
      scientificName: "something",
      manf:"Neosprin",
      desc:"this is basic Products which inclues something",
      stock:45
    },
    {
      id: "1",
      name: "paracetemol",
      category:"cold",
      scientificName: "something",
      manf:"Neosprin",
      desc:"this is basic Products which inclues something",
      stock:45
    },
    {
      id: "1",
      name: "paracetemol",
      category:"cold",
      scientificName: "something",
      manf:"Neosprin",
      desc:"this is basic Products which inclues something",
      stock:45
    },
    
  ];
export  const ordersData:OrdersType[] = [
    {
      id: "1",
      name: "paracetemol",
      quantity: "54",
      status:"Delivered",
      price:45
    },
    
    {
      id: "1",
      name: "paracetemol",
      quantity: "54",
      status:"Delivered",
      price:45
    },
    
    {
      id: "1",
      name: "paracetemol",
      quantity: "54",
      status:"Delivered",
      price:45
    },
    
    {
      id: "1",
      name: "paracetemol",
      quantity: "54",
      status:"Delivered",
      price:45
    },
    
    {
      id: "1",
      name: "paracetemol",
      quantity: "54",
      status:"Delivered",
      price:45
    },
    
    
  ];

export const customersData:Customer[] = [
  {
    id:"46fds",
    image:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"vaidik",
    gender:"Male",
    role:"Admin",
    email:"vaidiksinghni@gmail.com",
    action:"Manage",
  },
  {
    id:"sadsa45",
    image:"https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"akshita",
    gender:"Female",
    role:"Admin",
    email:"akshitadeo@gmail.com",
    action:"Manage",
  },
  {
    id:"kjh54",
    image:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"ankur",
    gender:"Male",
    role:"User",
    email:"ankurkumar@gmail.com",
    action:"Manage",
  },
  {
    id:"sds125",
    image:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"ayush ",
    gender:"Male",
    role:"User",
    email:"ayush@gmail.com",
    action:"Manage",
  },
  {
    id:"45gf52",
    image:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"abhijeet",
    gender:"Male",
    role:"Admin",
    email:"abhijeet@gmail.com",
    action:"Manage",
  },
  {
    id:"45gf96",
    image:"https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"alexa",
    gender:"Female",
    role:"User",
    email:"alexaamazon@gmail.com",
    action:"Manage",
  },
  {
    id:"45fd",
    image:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"stranger1317",
    gender:"Other",
    role:"Admin",
    email:"strangeer@gmail.com",
    action:"Manage",
  },
  {
    id:"46fds",
    image:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"vaidik",
    gender:"Male",
    role:"Admin",
    email:"vaidiksinghni@gmail.com",
    action:"Manage",
  },
  {
    id:"46fds",
    image:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"vaidik",
    gender:"Male",
    role:"Admin",
    email:"vaidiksinghni@gmail.com",
    action:"Manage",
  },
  {
    id:"46fds",
    image:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"vaidik",
    gender:"Male",
    role:"Admin",
    email:"vaidiksinghni@gmail.com",
    action:"Manage",
  },
  {
    id:"46fds",
    image:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"vaidik",
    gender:"Male",
    role:"Admin",
    email:"vaidiksinghni@gmail.com",
    action:"Manage",
  },
  {
    id:"46fds",
    image:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"vaidik",
    gender:"Male",
    role:"Admin",
    email:"vaidiksinghni@gmail.com",
    action:"Manage",
  },
  {
    id:"46fds",
    image:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name:"vaidik",
    gender:"Male",
    role:"Admin",
    email:"vaidiksinghni@gmail.com",
    action:"Manage",
  },
]

export const transactionsData:Transaction[] = [
  {
    id:"fsdffds",
    name:"harsh",
    status:"Pending",
    discount:4500,
    email:"vaidiksinghnirwan@gmail.cmo",
    action:"action",
    quantity:"45",
  },
  {
    id:"fsdffds",
    name:"vadidk",
    status:"Success",
    discount:4500,
    email:"vaidiksinghnirwan@gmail.cmo",
    action:"action",
    quantity:"45",
  },
  {
    id:"fsdffds",
    name:"vadidk",
    status:"Pending",
    discount:4500,
    email:"vaidiksinghnirwan@gmail.cmo",
    action:"action",
    quantity:"45",
  },
  {
    id:"fsdffds",
    name:"vadidk",
    status:"Failed",
    discount:4500,
    email:"vaidiksinghnirwan@gmail.cmo",
    action:"action",
    quantity:"45",
  },
  {
    id:"fsdffds",
    name:"vadidk",
    status:"Pending",
    discount:4500,
    email:"vaidiksinghnirwan@gmail.cmo",
    action:"action",
    quantity:"45",
  },
  {
    id:"fsdffds",
    name:"vadidk",
    status:"Failed",
    discount:4500,
    email:"vaidiksinghnirwan@gmail.cmo",
    action:"action",
    quantity:"45",
  },
  {
    id:"fsdffds",
    name:"vadidk",
    status:"Success",
    discount:4500,
    email:"vaidiksinghnirwan@gmail.cmo",
    action:"action",
    quantity:"45",
  },
]