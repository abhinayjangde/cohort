import express from "express";

process.loadEnvFile()
const port = process.env.PORT ?? 8000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.post('/api/login', (req,res)=>{
    const {email, password} = req.body
    
    console.log(email,password)

    return res.status(200).json({
        success: true,
        message: "User logged in successfully",
        data: req.body
    })
})

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}`)
})