import { useEffect, useState } from "react";



export const useFetch = (url) => {

    
    //console.log(initialValue);       
    const [fetchT, setFetch] = useState({
        data:null,
        isLoading:true,
        hasError:null
    });

    const getFetch = async()=>{
        setFetch({
            ...fetchT,
            isLoading:true,
        });

        const resp = await fetch(url);
        const data = await resp.json();
        setFetch({
            data,
            isLoading:false,
            hasError:null
        })
    }

    useEffect(() => {
        getFetch();
    }, [url])
    
    return {
        data: fetchT.data,
        isLoading: fetchT.isLoading,
        hasError: fetchT.hasError
    }
}
