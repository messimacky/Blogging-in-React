import { useEffect, useState } from "react";


const useFetch =(url)=>{

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState([]);

   useEffect(() =>{
    const abortController = new AbortController()
    setTimeout(() =>{
        fetch(url, {signal: abortController.signal})
        .then(res =>{
            if(!res.ok){
                throw Error("Couldn't fetch data for this resource!");
            }
            return res.json();
        })
        .then(data =>{
            setData(data);
            setIsLoading(null);
        })
        .catch(err => {
            if(err.name === "AbortError"){
                console.log("fetch aborted")
            } else {
            setIsLoading(null);
            setError(err.message);
        }
        })
    })
    return ()=> abortController.abort();
   }, [url])

return {data, isLoading, error};
}

export default useFetch;