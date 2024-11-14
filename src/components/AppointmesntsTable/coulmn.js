"use client"

import { Checkbox } from "@/components/ui/checkbox"




export const Columns = [
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
    enableSorting: false,
    enableHiding: false,
  },



  {
    accessorKey: "doctor.name",
    header: "Doctor",
  },
  {
    accessorKey: "user.name",
    header: "patient"
  },
  {
    accessorKey: "appointment_date",
    header: "Appintment Date"
  },
  {
    accessorKey: "appointment_time",
    header: "Appintment Time"
  },
  {
    accessorKey: "status",
    header: "Status"
  }
]


