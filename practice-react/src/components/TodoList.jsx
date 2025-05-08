import { useState } from "react"

export default function TodoList(){
    const [input, setInput] = useState("")
    const [isCopied, setIsCopied] = useState("copy")

    const handleCopyToClipboard = ()=>{

        if(input.trim() === "") return
        
        window.navigator.clipboard.writeText(input)

        setIsCopied("copied")

        setTimeout(()=>{
            setIsCopied("copy")
        },2000)
        
    }
    return (


        <div className="flex gap-3 justify-center">
         
            <input type="text"
            className="border-2 px-4 py-1"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <button onClick={handleCopyToClipboard} className="bg-green-500 text-black py-2 px-3 rounded-md" >{isCopied}</button>

        </div>
    )
}