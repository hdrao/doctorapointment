import MyFormComponent from "@/components/ui/applyform";



export default function ApplyAsDoctor () {

    return (
        <div className="container mx-auto">
        <h1>Apply as a Doctor in our platform</h1>
        <p>
            If you are a doctor and want to join our platform, please fill the form below. 
            These are some rules of our platform.
            1. Doctor must have a valid medical license
            2. Doctor must have a valid medical degree
            3. Doctor must have a valid medical experience
            4. Doctor must have a valid medical certification
            5. Doctor must have a valid medical insurance
            6. Doctor must have a valid medical experience
        </p>
        <MyFormComponent />
        </div>
    )
}