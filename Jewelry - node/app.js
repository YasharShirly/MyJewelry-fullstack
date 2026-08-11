import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import fs  from "fs";

import prodRouter from "./router/product.js"
import userRouter from "./router/user.js"
import orderRouter from "./router/order.js"
import categoryRouter from "./router/category.js"


dotenv.config();
const app=express()

app.use((req,res,next)=>{
    fs.appendFileSync("log.txt","\n"+new Date().toISOString()+req.method+" "+req.url);
    next()
})

app.use(cors());
app.use(express.json())
app.use("/prouduct",prodRouter)
app.use("/user",userRouter)
app.use("/order",orderRouter)
app.use("/category",categoryRouter)

let port=process.env.PORT;
app.listen(port,"localhost",()=>{
    console.log("app is running on port " + port)
});