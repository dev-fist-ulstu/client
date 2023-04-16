import {useState} from "react";
import axios from "axios";

function useAxios(url, method, body, headers) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [percentage, setPercentage] = useState(null);
    const [isLoaded, setLoaded] = useState(false);

    axios({
        url,
        method,
        headers: headers,
        data: body,
        onUploadProgress: (p) => {
            const complete = Math.round((p.loaded / p.total) * 100);
            setPercentage(complete);
        }
    })
        .then((res) => {
            setResponse(res.data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoaded(true);
        })

    return {
        response,
        error,
        percentage,
        isLoaded
    }
}

export default useAxios;
