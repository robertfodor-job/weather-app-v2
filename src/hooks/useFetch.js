import React, { useEffect, useState } from 'react';

const API_ENDPOINT = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&days=3&aqi=no&alerts=no`;

const useFetch = urlParams => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchWeather = async url => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setData({
        today: data.current,
        d1: data.forecast.forecastday[1],
        d2: data.forecast.forecastday[2],
        location: data.location.name,
      });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeather(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { loading, data };
};

export default useFetch;
