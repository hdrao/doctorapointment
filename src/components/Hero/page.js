import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";



export default function Hero () {
    return (
  <section className="text-gray-600 body-font mt-10 px-5 ">
  <div className="container mx-auto flex py-10 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-3/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Doctor Appointment System
        <br className="hidden lg:inline-block" />
        by Rao Danish
      </h1>
      <p className="mb-8 leading-relaxed">
        Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
        plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
        tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
        chambray.
      </p>
      <div className="flex justify-center gap-4">
        <Button variant="outline" >
        Find Doctor You Need
        </Button>
        <Link href={"./doctors/apply"}>
        <Button>
        Apply as Doctor
        </Button>
        </Link>

          
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        height={400}
        width={400}
        src="https://plus.unsplash.com/premium_photo-1673953510197-0950d951c6d9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  </div>
</section>
    )
}