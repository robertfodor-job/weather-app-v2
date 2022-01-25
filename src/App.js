import React, { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useFetch from './hooks/useFetch';
import WeatherCardToday from './components/WeatherCardToday';

const App = () => {
  const [searchCity, setSearchCity] = useState('');
  const [city, setCity] = useState('Nove Zamky');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCity(searchCity);
    }, 800);

    return () => clearTimeout(timeout);
  }, [searchCity]);

  const { loading, data } = useFetch(`&q=${city}`);
  if (loading) {
    return <div className="loading"></div>;
  }

  if (!loading) {
    return (
      <>
        <Box
          component="form"
          sx={{ mt: 6, ml: 9, '& > :not(style)': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="City"
            label="City"
            variant="outlined"
            onChange={e => setSearchCity(e.target.value)}
          />
        </Box>

        <div className="container">
          <WeatherCardToday data={data.today} city={data.location} />
          <WeatherCard data={data.d1} city={data.location} />
          <WeatherCard data={data.d2} city={data.location} />
        </div>
      </>
    );
  }
};

export default App;
