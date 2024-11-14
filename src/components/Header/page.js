import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "../ui/button";
import { auth } from "../../../auth";



export default function Header () {
    const session = auth();
    console.log("session of login",auth());
    

    return (
    <div className=" bg-secondary py-2 px-5 ">
    <div className=" flex justify-between container mx-auto bg-secondary font-mono">
    <h1 className=" font-semibold text-xl font-mono ">Logo</h1>
    {
      session ? (
        <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="bg-secondary cursor-pointer border-none">
          <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          </MenubarTrigger>
          <MenubarContent>
                <Link href={"./Profile"}>
                <MenubarItem>My Profile</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href={"./Appointment"}>
                <MenubarItem>My Appointments</MenubarItem>
                </Link>
                <MenubarSeparator />
                <MenubarItem>Logout</MenubarItem>
          </MenubarContent> 
        </MenubarMenu>
      </Menubar>
      ) : (
        <Link href={"/signin"}>
         <Button variant="outline">Login</Button>
        </Link>

      )
    }

        </div>
        </div>
    )
}