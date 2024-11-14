import { Button } from "@/components/ui/button";
import { signIn } from "../../../auth";



export default function  signin() {
    return (
        <div className=" flex container min-h-screen justify-center items-center mx-auto">
                <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <Button  variant="outline">Continue With Google</Button>
    </form>
            
        </div>
    )
} 