

import mongoose, { Schema } from "mongoose";
// import { string } from "zod";


const userSchema = new Schema ({
    firstname: String,
    lasttname: String,
    email: String,
    picture: String,
    role: {type: String, default: "user", enum: ["admin", "user","doctor"]},
    doctorinfo: {
        fees:Number,
        hospital:String,
        specialization:String,
        bio:String,
        gender:String,
    }
})


export const UserModel =mongoose.models.Users || mongoose.model("Users", userSchema)