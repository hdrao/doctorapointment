"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Label } from "@radix-ui/react-label"

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2).max(50),
  bio: z.string().min(2).max(120),
  hospital: z.string().min(2).max(50),
  days: z.array(z.string()),
  fees: z.string(),
  gender: z.string(),
  degree: z.string(),
  specialisation: z.string(),
  experience: z.string(),
  profileIg: z.string(),
  phoneNo: z.string(),
  email: z.string().email(),
  address: z.string(),
})
// React Hook Form with Zod validation
const MyFormComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      hospital: "",
      days: [],
      fees: "",
      gender: "",
      degree: "",
      specialisation: "",
      experience: "",
      profileIg: "",
      phoneNo: "",
      email: "",
      address: "",
    }
  });

  // Submit handler
  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <div className="min-h-screen flex justify-center items-center min-w-full py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">Doctor Information Form</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("name")}
            />
            {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>}
          </div>

          {/* Bio */}
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea
              id="bio"
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("bio")}
            />
            {errors.bio && <p className="mt-2 text-sm text-red-500">{errors.bio.message}</p>}
          </div>

          {/* Hospital */}
          <div>
            <label htmlFor="hospital" className="block text-sm font-medium text-gray-700">Hospital</label>
            <input
              id="hospital"
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("hospital")}
            />
            {errors.hospital && <p className="mt-2 text-sm text-red-500">{errors.hospital.message}</p>}
          </div>

          {/* Days */}
          <div>
            <label htmlFor="days" className="block text-sm font-medium text-gray-700">Days</label>
            <input
              id="days"
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("days")}
            />
            {errors.days && <p className="mt-2 text-sm text-red-500">{errors.days.message}</p>}
          </div>

          {/* Fees */}
          <div>
            <label htmlFor="fees" className="block text-sm font-medium text-gray-700">Fees</label>
            <input
              id="fees"
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("fees")}
            />
            {errors.fees && <p className="mt-2 text-sm text-red-500">{errors.fees.message}</p>}
          </div>

          {/* Gender */}
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              id="gender"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("gender")}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="mt-2 text-sm text-red-500">{errors.gender.message}</p>}
          </div>

          {/* Appointment Date */}
          {/* Degree */}
          <div>
            <label htmlFor="degree" className="block text-sm font-medium text-gray-700">Degree</label>
            <input
              id="degree"
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("degree")}
            />
            {errors.degree && <p className="mt-2 text-sm text-red-500">{errors.degree.message}</p>}
          </div>

          {/* Specialisation */}
          <div>
            <label htmlFor="specialisation" className="block text-sm font-medium text-gray-700">Specialisation</label>
            <input
              id="specialisation"
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("specialisation")}
            />
            {errors.specialisation && <p className="mt-2 text-sm text-red-500">{errors.specialisation.message}</p>}
          </div>

          {/* Experience */}
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience</label>
            <input
              id="experience"
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("experience")}
            />
            {errors.experience && <p className="mt-2 text-sm text-red-500">{errors.experience.message}</p>}
          </div>

          {/* Instagram Profile */}
          <div>
            <label htmlFor="profileIg" className="block text-sm font-medium text-gray-700">Instagram Profile</label>
            <input
              id="profileIg"
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("profileIg")}
            />
            {errors.profileIg && <p className="mt-2 text-sm text-red-500">{errors.profileIg.message}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              id="phoneNo"
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("phoneNo")}
            />
            {errors.phoneNo && <p className="mt-2 text-sm text-red-500">{errors.phoneNo.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("email")}
            />
            {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              id="address"
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("address")}
            />
            {errors.address && <p className="mt-2 text-sm text-red-500">{errors.address.message}</p>}
          </div>

           {/* file upload */}
           <div className="grid w-full lg:max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Picture</Label>
                <input id="picture" type="file" />
          </div>
          {/* Submit Button */}
          <div className="mt-6">
            <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyFormComponent;


































































// "use client"

// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { z } from "zod"


// // Zod schema for form validation
// const formSchema = z.object({
//   name: z.string().min(2).max(50),
//   bio: z.string().min(2).max(120),
//   hospital: z.string().min(2).max(50),
//   days: z.array(z.string()),
//   fees: z.string(),
//   gender: z.string(),
//   appointment: z.date(),
//   degree: z.string(),
//   specialisation: z.string(),
//   experience: z.string(),
//   profileIg: z.string(),
//   phoneNo: z.string(),
//   email: z.string().email(),
//   address: z.string(),
// })

// // React Hook Form with Zod validation
// const MyFormComponent = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       name: "",
//       bio: "",
//       hospital: "",
//       days: [],
//       fees: "",
//       gender: "",
//       appointment: new Date(),
//       degree: "",
//       specialisation: "",
//       experience: "",
//       profileIg: "",
//       phoneNo: "",
//       email: "",
//       address: "",
//     }
//   });

//   // Submit handler
//   const onSubmit = (values) => {
//     console.log(values);
//   }

//   return (
//     <div className="form-container">
//       <form className="form" onSubmit={handleSubmit(onSubmit)}>
//         <h2>Doctor Information Form</h2>

//         <div className="form-group">
//           <label>Name</label>
//           <input className="form-input" {...register("name")} />
//           {errors.name && <span className="error">{errors.name.message}</span>}
//         </div>

//         <div className="form-group">
//           <label>Bio</label>
//           <textarea className="form-input" {...register("bio")} />
//           {errors.bio && <span className="error">{errors.bio.message}</span>}
//         </div>

//         <div className="form-group">
//           <label>Hospital</label>
//           <input className="form-input" {...register("hospital")} />
//           {errors.hospital && <span className="error">{errors.hospital.message}</span>}
//         </div>

//         <div className="form-group">
//           <label>Days</label>
//           <input className="form-input" {...register("days")} />
//           {errors.days && <span className="error">{errors.days.message}</span>}
//         </div>

//         <div className="form-group">
//           <label>Fees</label>
//           <input className="form-input" {...register("fees")} />
//           {errors.fees && <span className="error">{errors.fees.message}</span>}
//         </div>

//         <div className="form-group">
//           <label>Gender</label>
//           <select className="form-input" {...register("gender")}>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//           {errors.gender && <span className="error">{errors.gender.message}</span>}
//         </div>

//         <div className="form-group">
//           <label>Appointment Date</label>
//           <input className="form-input" type="date" {...register("appointment")} />
//           {errors.appointment && <span className="error">{errors.appointment.message}</span>}
//         </div>

//         <div className="form-group">
//           <label>Degree</label>
//           <input className="form-input" {...register("degree")} />
//           {errors.degree && <span className="error">{errors.degree.message}</span>}
//         </div>

//         <div className="form-group">
//           <label>Specialisation</label>
//           <input className="form-input" {...register("specialisation")} />
//           {errors.specialisation && <span className="error">{errors.specialisation.message}</span>}
//         </div>

//         <div className="form-group">
//           <label>Experience</label>
//           <input className="form-input" {...register("experience")} />
//           {errors.experience && <span className="error">{errors.experience.message}</span>}
//         </div>

//         <div className="form-group">
//           <label>Instagram Profile</label>
//           <input className="form-input" {...register("profileIg")} />
//           {errors.profileIg && <span className="error">{errors.profileIg.message}</span>}
//         </div>

//         <div className="form-group">
//           <label>Phone Number</label>
//           <input className="form-input" {...register("phoneNo")} />
//           {errors.phoneNo && <span className="error">{errors.phoneNo.message}</span>}
//         </div>

//         <div className="form-group">
//           <label>Email</label>
//           <input className="form-input" {...register("email")} />
//           {errors.email && <span className="error">{errors.email.message}</span>}
//         </div>

//         <div className="form-group">
//           <label>Address</label>
//           <textarea className="form-input" {...register("address")} />
//           {errors.address && <span className="error">{errors.address.message}</span>}
//         </div>

//         <button className="submit-btn" type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default MyFormComponent;
























// "use client"

// import { string, z } from "zod"

// const formSchema = z.object({
//   name: z.string().min(2).max(50),
//   bio: z.string().min(2).max(120),
//   hospital: z.string().min(2).max(50),
//   days: z.array[string],
//   fees: z.string(),
//   gender: z.string(),
//   appointment: z.date(),
//   degree: z.string(),
//   specialisation: z.string(),
//   experience: z.string(),
//   profileIg: z.string(),
//   phoneNo: z.string(),
//   email: z.string().email(),
//   address: z.string(),
// })


// const form = useForm ({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       username: "",
//     }
// });


// function onSubmit(values) {
//     console.log(values)
// }

