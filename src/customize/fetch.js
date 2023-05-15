import { useEffect, useState } from "react";
import axios from 'axios';


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    //componentDidMount
    useEffect(() => {
        try {
            async function fetchData() {
                // You can await here
                let res = await axios.get(url)
                let data = res && res.data ? res.data : [];
                setData(data);
                setIsLoading(false);
                setIsError(false);
            }
            fetchData();
        } catch (e) {
            setIsError(true);
            setIsLoading(false);
        }
    }, []);

    return {
        data, isLoading, isError
    }
}

export default useFetch;