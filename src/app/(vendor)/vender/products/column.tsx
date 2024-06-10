"use client"
import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image";
import Link from "next/link"
import { ArrowUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { MedicineProduct, Product } from "@/types/admin/dashboard"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<MedicineProduct>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        // enableSorting: false,
        // enableHiding: false,
      },
  // {
  //   accessorKey: "image",
  //   header: "Image",
  //   cell: ({ row }) => (
  //       <Image
  //         src={row.original.image}
  //         alt={row.original.name}
  //         width={80}
  //         height={80}
  //       />
  //     ),
  // },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "manf",
    header: "Manufacture",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "desc",
    header: "Description",
    cell: ({ row }) => {
            const desc = row.getValue("desc") as string
            
       
            return <div className="flex justify-start pl-2">{desc?.length > 15 ? `${desc.substring(0,15)}...` : desc}</div>
          },
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
        const product = row.original
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(product.id as string)}
              >
                Copy product ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href={`/vender/products/${product.id as string}`}>Product page</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
  },
]
