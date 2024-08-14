import dotenv  from "dotenv";
import {app} from "./app.js"
import connectDB from "./db/index.js"
dotenv.config({
    path:"./env"
})
connectDB().then(()=>{
    app.listen(process.env.PORT ||8000,()=>{
        console.log("server is running on port",process.env.PORT);
    })
}).catch((err)=>{
    console.log("mongo connection failed!!!",err);
})
// import express from "express"

// const app=express()
// connectDB().then(()=>{
//     app.listen(process.env.PORT ||8000,()=>{
//         console.log("server is running on port",process.env.PORT);
//     })
// }).catch((err)=>{
//     console.log("mongo connection failed!!!",err);
// })

// import express from "express"
// const app = express()

    // ; (async () => {
    //     try {
    //         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    //         app.on("error", (error) => {
    //             console.log("ERROR:", error);
    //         })
    //         app.listen(process.env.PORT, () => {
    //             console.log(`your data has been succesfully connected ${process.env.PORT}`);
    //         })


    //     } catch (error) {
    //         console.log("ERROR", error);
    //     }
    // })()

