import mongoose from "mongoose"


export default async function connectDB () {
    let connection

   
    if(connection?.Connection?.readyState != 1) {

    connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB Conected");
        
}

}