import { useRef, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

export default function TodoList(){
    const [input, setInput] = useState("")
    const [isCopied, setIsCopied] = useState("copy")
    const inputRef = useRef(null)
  

    const handleCopyToClipboard = ()=>{

        if(input.trim() === ""){
            toast.error("Please enter some text 🔴")
            return
        }
        
        window.navigator.clipboard.writeText(input)
        toast("Text copied successfully👍")
        setIsCopied("copied")
        inputRef.current?.select()
        setTimeout(()=>{
            setIsCopied("copy")
        },2000)
        
    }
    return (


        <div className="flex gap-3 justify-center">
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />

            <input type="text"
            className="border-2 px-4 py-1"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            ref={inputRef}
            />
            <button onClick={handleCopyToClipboard} className="bg-green-500 text-black py-2 px-3 rounded-md" >{isCopied}</button>

        </div>
    )
}