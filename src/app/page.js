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
import { categories } from "@/lib/DRdata";
import Doctorssection from "@/components/DRsection/page";

export default function Home() {
  return (
    <div >
      <Hero />
      <Doctorssection  isHome={true} />
    </div>
  );
}

