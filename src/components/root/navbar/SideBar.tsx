import Logo from "@/components/common/Logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi"
import NavLinks from "./NavLinks"
import AuthLinks from "@/components/common/AuthLinks"

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
            <GiHamburgerMenu size={25}/>
        </Button>
      </SheetTrigger>
      <SheetContent className="md:hidden flex flex-col w-full"> 
        <SheetHeader className="border-b-[1px] border-gray-300 pb-4">
          <SheetTitle className="flex items-center gap-1">
            <Logo/>
          </SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
            <div className="flex flex-col items-start gap-2 border-b-[1px] pb-2 ">
                <NavLinks/>
            </div>
            <div className="flex items-start gap-2">
                <AuthLinks/>
            </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
