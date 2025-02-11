import { useEffect, useState } from "react"

export default function (){
    const [count, setCount]= useState(0)
    
    useEffect(function(){
        if(!localStorage.getItem("count")){
            localStorage.setItem("count","0")
            console.log("not found count")
        }
        else{
            setCount(JSON.parse(localStorage.getItem("count")))
            
        }
    },[])
    return <div>
        <p>You clicked {count} times</p>
        <button onClick={()=>{
            setCount(count+1)
            localStorage.setItem("count",JSON.stringify(count))
        }} >Increament</button>

        <button onClick={()=>{
            setCount(0)
            localStorage.setItem("count","0")
        }} >Reset</button>
    </div>
}