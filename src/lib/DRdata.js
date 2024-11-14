


export const categories = [
    "Primary Care",
    "Surgery",
    "Internal Medicine",
    "Obstetrics and Gynecology",
    "Pediatrics",
    "Psychiatry",
    "Radiology",
    "Anesthesiology",
    "Dermatology",
    "Ophthalmology",
    "ENT (Otorhinolaryngology)",
    "Emergency Medicine",
    "Physical Medicine and Rehabilitation",
    "Pathology",
    "Allergy and Immunology",
    "Public Health and Preventive Medicine"
  ]


  export const doctors = [
    {
      "id": 1,
      "name": "Dr. John Smith",
      "appointment_time": "10 AM - 11 AM",
      "fees": 150,
      "category": "Primary Care",
      "hospital": "City Health Center",
      "gender": "Male"
    },
    {
      "id": 2,
      "name": "Dr. Emily Jones",
      "appointment_time": "11:30 AM - 12:30 PM",
      "fees": 200,
      "category": "Surgery",
      "hospital": "General Hospital",
      "gender": "Female"
    },
    {
      "id": 3,
      "name": "Dr. Michael Brown",
      "appointment_time": "2 PM - 3 PM",
      "fees": 250,
      "category": "Internal Medicine",
      "hospital": "Downtown Clinic",
      "gender": "Male"
    },
    {
      "id": 4,
      "name": "Dr. Sarah Wilson",
      "appointment_time": "9 AM - 10 AM",
      "fees": 180,
      "category": "Obstetrics and Gynecology",
      "hospital": "Women’s Health Hospital",
      "gender": "Female"
    },
    {
      "id": 5,
      "name": "Dr. David Lee",
      "appointment_time": "3 PM - 4 PM",
      "fees": 120,
      "category": "Pediatrics",
      "hospital": "Children's Hospital",
      "gender": "Male"
    },
    {
      "id": 6,
      "name": "Dr. Anna Taylor",
      "appointment_time": "1 PM - 2 PM",
      "fees": 220,
      "category": "Psychiatry",
      "hospital": "Mental Wellness Center",
      "gender": "Female"
    },
    {
      "id": 7,
      "name": "Dr. Robert White",
      "appointment_time": "12 PM - 1 PM",
      "fees": 300,
      "category": "Radiology",
      "hospital": "Radiology Imaging Center",
      "gender": "Male"
    },
    {
      "id": 8,
      "name": "Dr. Lisa Green",
      "appointment_time": "4 PM - 5 PM",
      "fees": 250,
      "category": "Anesthesiology",
      "hospital": "Surgical Center",
      "gender": "Female"
    },
    {
      "id": 9,
      "name": "Dr. James Harris",
      "appointment_time": "8:30 AM - 9:30 AM",
      "fees": 140,
      "category": "Dermatology",
      "hospital": "Skin Care Clinic",
      "gender": "Male"
    },
    {
      "id": 10,
      "name": "Dr. Karen Adams",
      "appointment_time": "5:30 PM - 6:30 PM",
      "fees": 210,
      "category": "Ophthalmology",
      "hospital": "Eye Care Center",
      "gender": "Female"
    },
    {
      "id": 11,
      "name": "Dr. Steven Clark",
      "appointment_time": "11 AM - 12 PM",
      "fees": 190,
      "category": "ENT (Otorhinolaryngology)",
      "hospital": "Ear, Nose, and Throat Clinic",
      "gender": "Male"
    },
    {
      "id": 12,
      "name": "Dr. Nancy King",
      "appointment_time": "9:30 AM - 10:30 AM",
      "fees": 160,
      "category": "Emergency Medicine",
      "hospital": "City Hospital",
      "gender": "Female"
    },
    {
      "id": 13,
      "name": "Dr. Matthew Scott",
      "appointment_time": "10:45 AM - 11:45 AM",
      "fees": 175,
      "category": "Physical Medicine and Rehabilitation",
      "hospital": "Rehabilitation Center",
      "gender": "Male"
    },
    {
      "id": 14,
      "name": "Dr. Jessica Lewis",
      "appointment_time": "1:45 PM - 2:45 PM",
      "fees": 280,
      "category": "Pathology",
      "hospital": "Pathology Lab",
      "gender": "Female"
    },
    {
      "id": 15,
      "name": "Dr. George Thompson",
      "appointment_time": "2:30 PM - 3:30 PM",
      "fees": 230,
      "category": "Allergy and Immunology",
      "hospital": "Allergy Clinic",
      "gender": "Male"
    },
    {
      "id": 16,
      "name": "Dr. Olivia Martinez",
      "appointment_time": "3:15 PM - 4:15 PM",
      "fees": 190,
      "category": "Public Health and Preventive Medicine",
      "hospital": "Community Health Center",
      "gender": "Female"
    }
  ]
  

  export const currentUser = [
    {
      name:"John",
      email:"john@gmail.com",

    }
  ]




 export const appointments = [
    {
      user: {
        name: "Alice Johnson",
        email: "alice.johnson@example.com"
      },
      appointment_time: "10 AM - 11 AM",
      status: "Confirmed",
      appointment_date: "2024-11-12",
      doctor: {
        name: "Dr. John Smith",
        hospital: "City Health Center"
      }
    },
    {
      user: {
        name: "Bob Williams",
        email: "bob.williams@example.com"
      },
      appointment_time: "2 PM - 3 PM",
      status: "Pending",
      appointment_date: "2024-11-14",
      doctor: {
        name: "Dr. Michael Brown",
        hospital: "Downtown Clinic"
      }
    },
    {
      user: {
        name: "Catherine Lee",
        email: "catherine.lee@example.com"
      },
      appointment_time: "3 PM - 4 PM",
      status: "Cancelled",
      appointment_date: "2024-11-16",
      doctor: {
        name: "Dr. David Lee",
        hospital: "Children's Hospital"
      }
    },
    {
      user: {
        name: "David Miller",
        email: "david.miller@example.com"
      },
      appointment_time: "1 PM - 2 PM",
      status: "Confirmed",
      appointment_date: "2024-11-18",
      doctor: {
        name: "Dr. Anna Taylor",
        hospital: "Mental Wellness Center"
      }
    },
    {
      user: {
        name: "Eve Robinson",
        email: "eve.robinson@example.com"
      },
      appointment_time: "9 AM - 10 AM",
      status: "Rescheduled",
      appointment_date: "2024-11-20",
      doctor: {
        name: "Dr. Sarah Wilson",
        hospital: "Women’s Health Hospital"
      }
    },
    {
      user: {
        name: "Frank Harris",
        email: "frank.harris@example.com"
      },
      appointment_time: "11 AM - 12 PM",
      status: "Confirmed",
      appointment_date: "2024-11-22",
      doctor: {
        name: "Dr. Steven Clark",
        hospital: "Ear, Nose, and Throat Clinic"
      }
    },
    {
      user: {
        name: "Grace King",
        email: "grace.king@example.com"
      },
      appointment_time: "5:30 PM - 6:30 PM",
      status: "Pending",
      appointment_date: "2024-11-25",
      doctor: {
        name: "Dr. Karen Adams",
        hospital: "Eye Care Center"
      }
    },
    {
      user: {
        name: "Hannah Wright",
        email: "hannah.wright@example.com"
      },
      appointment_time: "4 PM - 5 PM",
      status: "Confirmed",
      appointment_date: "2024-11-27",
      doctor: {
        name: "Dr. Lisa Green",
        hospital: "Surgical Center"
      }
    },
    {
      user: {
        name: "Ian Scott",
        email: "ian.scott@example.com"
      },
      appointment_time: "2:30 PM - 3:30 PM",
      status: "Confirmed",
      appointment_date: "2024-11-29",
      doctor: {
        name: "Dr. George Thompson",
        hospital: "Allergy Clinic"
      }
    },
    {
      user: {
        name: "Jack Turner",
        email: "jack.turner@example.com"
      },
      appointment_time: "12 PM - 1 PM",
      status: "Pending",
      appointment_date: "2024-11-30",
      doctor: {
        name: "Dr. Robert White",
        hospital: "Radiology Imaging Center"
      }
    }
  ];
  