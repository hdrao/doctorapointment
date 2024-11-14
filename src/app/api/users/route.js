import connectDB from "@/lib/connectDB";
import { UserModel } from "@/lib/models/UserModel";





export async function POST(request) {
    await connectDB();

    try {
    const obj = await request.json();

    let newUser = await new UserModel({...obj})
    newUser = await newUser.save();
    


   return Response.json({
        error: false,
        message: "User created successfully",
        user: newUser
    },
    {status: 200}
)
    }catch(err) {
        return Response.json({
            error: true,
            message: "User did not created successfully",
        },
        {status: 500}
    )
    }
}
 
 
export async function GET(request) {
    await connectDB();

    try {
    let users = await  UserModel.find();
   return Response.json({
        error: false,
        message: "User fetched successfully",
        users,
    },
    {status: 200},)
}catch (e) {
    console.log(e);
}
}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 