import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";
// const connectDB = async ()=>{
//     try {
//         const uri = process.env.MONGODB_URI;
//         const connectionInstance=await mongoose.connect(uri, { useNewUrlParser: true });
//         console.log(`\n mongoDb connected !!DB host :${connectionInstance.connection.host},`);
//     } 
//     catch (error) {
//         console.log("MONGODB connnection error",error);
//         process.exit(1)
//     } }
        
//     export default connectDB;
const connectDB= async()=>{
    try {
        //mongoose return us object
        const connect= await mongoose.connect(`${process.env.MONGODB_URI} /${DB_NAME}`)
        console.log(`\n Mongodb connected !! DB HOST:`);
        
    } catch (error) {
        console.log(
            "mongodb connection error",error
        );
    }
}
export default connectDB