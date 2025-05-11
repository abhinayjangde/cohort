import { useEffect, useState } from "react";

function useGithubProfile(username){
    const [data, setData]= useState({})
    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
        .then((res)=> res.json())
        .then((res)=>setData(res))
        .catch((err)=>console.log(err))
    },[username])
    return data
}
export default useGithubProfile;