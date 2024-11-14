import { Columns } from "@/components/AppointmesntsTable/coulmn";
import AppintmentsTable from "@/components/AppointmesntsTable/page";
import { appointments } from "@/lib/DRdata";


export default function Appointment () {

    return (
        <div className=" container my-8 mx-auto">
              <AppintmentsTable  columns={Columns} data={appointments} />
        </div>
      
    )
}