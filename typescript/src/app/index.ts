import http from "http"
import {env} from "./env"


async function main() {
    try {
        const PORT: number = +(env.PORT ?? 4000)
        const server = http.createServer()
        server.listen(PORT,()=>{
            console.log("server is running")
        })
    } catch (error) {
        
    }
}