import { useEffect, useState } from "react";
import axios from 'axios';


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    //componentDidMount
    useEffect(() => {
        const ourRequest = axios.CancelToken.source();
        async function fetchData() {
            try {
                // You can await here
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token,
                })
                let data = res && res.data ? res.data : [];
                setData(data);
                setIsLoading(false);
                setIsError(false);
            }
            catch (e) {
                console.log('>>> check error: ', e)
                // setIsError(true);
                // setIsLoading(false);
            }
        }

        setTimeout(() => {
            fetchData();
        }, 3000)

        return () => {
            ourRequest.cancel('Operation canceled by the user.')
        }
    }, [url]);

    return {
        data, isLoading, isError
    }
}

export default useFetch;