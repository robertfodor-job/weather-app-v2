import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Card,
  Box,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from '@mui/material';

const WeatherCardToday = ({ data, city }) => {
  const {
    avgtemp_c: temp,
    maxwind_kph: wind,

    condition: { icon },
    condition: { text },
    avghumidity: humidity,
    totalprecip_mm: precip,
  } = data.day;
  const { date } = data;

  const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  return (
    <Card sx={{ maxWidth: 285, m: 3 }}>
      <CardContent>
        {/*  City Name */}
        <Box>
          <Typography
            sx={{
              fontSize: 'h5.fontSize',
              textTransform: 'uppercase',
              fontWeight: '600',
            }}
            color="text.primary"
            variant="body1"
          >
            {city}
          </Typography>
          {/* Date and word presentation of status */}
          <Typography sx={{ fontSize: 16 }} variant="h8" color="text.secondary">
            {date}, {text}
          </Typography>
        </Box>
        {/* Temperature and image of status */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            maxWidth: 265,
          }}
        >
          <Typography
            gridColumn="span 4"
            sx={{
              color: 'text.primary',
              fontSize: 81,
              fontWeight: 'normal',
              pl: 1,
              text,
              textAlign: 'right',
            }}
          >
            {Math.round(temp)}
          </Typography>
          <Typography
            gridColumn="span 2"
            sx={{
              color: 'text.primary',
              fontSize: 33,
              fontWeight: 'normal',
              px: 0,
              py: 2,
            }}
          >
            °C
          </Typography>
          <Box sx={{ maxWidth: 100, pt: 2 }} gridColumn="span 6">
            <CardMedia component="img" height="100" image={icon} alt="cloudy" />
          </Box>
        </Box>
        <Typography sx={{ mb: 1.5, fontSize: 11 }} color="text.secondary">
          Precipitation: {precip} mm
          <br />
          Humidity: {humidity}%
          <br />
          Wind: {wind} km/h
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Box
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="expand"
        >
          <Button size="small">Expand</Button>
        </Box>
      </CardActions> */}
    </Card>
  );
};

export default WeatherCardToday;
