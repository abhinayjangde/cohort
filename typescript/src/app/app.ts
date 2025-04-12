import express from "express"
import type {Request, Response} from "express"
import fs from "fs"


const app = express()
const port = process.env.PORT ?? 4000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/",(req: Request,res: Response)=>{
    res.json({
        msg: "hello"
    })
})
