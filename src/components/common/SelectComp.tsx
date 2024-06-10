import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
type SingleSelect = {
    type:string;
    value:string;
}
type Props = {
    selectData: SingleSelect[];
    header:string;
    value:string;
    setValue:(value: string) => void
}
export const SelectComp = ({selectData,header,setValue,value}:Props) => {
  return (
    <Select onValueChange={setValue}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={`Select a ${header}`} />
      </SelectTrigger>
      <SelectContent  className="w-full">
        <SelectGroup >
          {/* <SelectLabel>--Join as--</SelectLabel> */}
          {selectData.map((item,i) =>(
              <SelectItem key={i} value={item.value}>{item.type}</SelectItem>
          ) )}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
