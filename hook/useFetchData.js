import { useState, useEffect } from "react";
// import { RAPID_API_KEY } from '@env'

// const rapidApiKey = RAPID_API_KEY;

const useFetchData = (endpoint, query) => {
    const [data, setData ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError ] = useState(null);

    const axios = require('axios');

    const options = {
      method: 'GET',
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
        'X-RapidAPI-Key': '86b38aae69msh94a8d1c7312cba4p1d4e05jsnd9fadbd9cdd0',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      },
      params: {
        ...query
      },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
             setError(error);
             alert('There is an error');
             setIsLoading(false);
        }
    }

    useEffect(() => {
      const fetchData = async () => {
          setIsLoading(true);

          try {
              const response = await axios.request(options);
              setData(response.data.data);
              setIsLoading(false);
          } catch (error) {
               setError(error);
               alert('There is an error');
               setIsLoading(false);
          }
      };

      fetchData();}, []);

      const refetch = () => {
          setIsLoading(true);
          fetchData(); 
      };
  
      return { data, isLoading, error, refetch };
  };
export default useFetchData;
