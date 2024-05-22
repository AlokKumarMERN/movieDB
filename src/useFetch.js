import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = `https://api.themoviedb.org/3`;

const useFetch = (isSearching, urlParams, delay = 600) => {

    // console.log(`usefetch ${urlParams}`);
    const urlType = isSearching ? '/search/movie?' : '/movie/'
    const [data, setData] = useState(null);
    const [error, setError] = useState({
        show: false,
        msg: "",
    });
    const [isLoading, setIsLoading] = useState(true);
    // const [debounceTimeout, setDebounceTimeout] = useState(null)

    const fetchData = async (params) => {
        setIsLoading(true);

        const options = {
            method: "GET",
            url: BASE_URL+urlType+params,
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.
                    VITE_TMDB_JWT_TOKEN}`,
            },
        };

        try {
            const response = await axios.request(options);
            if (response.status === 200) {
                setData(response.data);

                setError({
                    show: false,
                    msg: "",
                });

            } else {
                setError({
                    show: true,
                    msg: "Something went wrong",
                });

            }
            setIsLoading(false);

        } catch (error) {
            setError({
                show: true,
                msg: error,
            });
        }
    };

    useEffect(() => {
        // if(debounceTimeout){
        //     clearTimeout(debounceTimeout);
        // }

        const timeout = setTimeout(() => {
            fetchData(urlParams);
            console.log("data fetched");
        }, delay)

        console.log(timeout);

        return () => {
            console.log("cleanup function");
            return clearTimeout(timeout)
        }
    }, [urlParams]);

    return { isLoading, error, data };
};

export default useFetch;