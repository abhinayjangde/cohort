import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(data => setData(data))
            .catch(err => setError(err))
    }, [])

    return [data,error]
}

export default useFetch