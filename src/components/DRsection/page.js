import Header from "@/components/Header/page";
import Hero from "@/components/Hero/page";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { categories, doctors } from "@/lib/DRdata";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "../ui/button";
import Link from "next/link";
  

export default function Doctorssection({isHome}) {

    const drFinded = isHome ? doctors.slice(0, 6) : doctors;


  return (
    <div className=" container mx-auto my-10 px-5 ">
      <div className=" flex justify-between ">
        <h1 className=" font-bold text-3xl font-mono">premium Doctors</h1>
        {
            isHome ? <Link href={"/doctors"}>
            <Button className="">
            View All
            </Button>
            </Link> 
            :<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Primary Care" />
  </SelectTrigger>
  <SelectContent>
    {
      categories.map(category => { 
        return (
          <SelectItem key={category} value={category}>{category}</SelectItem>
        )
      } )
    }
  </SelectContent>
</Select>
}
      </div>



        <div className=" gap-3 my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
            
            drFinded.map( (data,index) => {
                return (
                    <Card key={data.name}>
                        <CardHeader className={" items-center gap-2 flex flex-row "} >
                        <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div >
                            <CardTitle>{data.name}</CardTitle>
                            <CardDescription>{data.category}</CardDescription>
                            </div>
                        </CardHeader>

                            <CardContent>
                            <div className=" flex justify-between my-2">
                            <h1 className=" font-semibold ">Gender</h1>
                            <h1>{data.gender}</h1>
                            </div>
                            <div className=" flex justify-between my-2">
                            <h1 className=" font-semibold">Hospital</h1>
                            <h1>{data.hospital}</h1>
                            </div>
                            <div className=" flex justify-between my-2">
                            <h1 className=" font-semibold">Appointment Time</h1>
                            <h1>{data.appointment_time}</h1>
                            </div>
                            </CardContent>
            


                        <CardFooter>
                          <Link href={`/doctors/${data.id}`}>
                          
                          <Button>
                            Book Appointment
                            </Button>

                          </Link>

                            
                        </CardFooter>
                    </Card>
                )
            } )

                }
        </div>

      </div>
  );
}

