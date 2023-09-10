'use client';

import { useState, type FC, useEffect } from 'react';

import { Skeleton } from '@mui/material';
import { LayersControl, MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { LayerTypes } from '@/interfaces';

const Map: FC = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setLoading(false);

  }, []);

  if (loading) {

    return (
      <Skeleton
        variant="rounded"
        width="100%"
        height="400px"
        animation="pulse"
        sx={{ bgcolor: 'rgb(134, 133, 133, 0.5)' }}
      />
    );

  };

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        height:       '400px',
        borderRadius: '10px'
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LayersControl position='topright'>
        <LayersControl.Overlay name='Precipitación'>
          <TileLayer url={`/api/maps?type=${LayerTypes.precipitation_new}&z={z}&x={x}&y={y}`} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name='Nubes'>
          <TileLayer url={`/api/maps?type=${LayerTypes.clouds_new}&z={z}&x={x}&y={y}`} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name='Nivel de presión'>
          <TileLayer url={`/api/maps?type=${LayerTypes.pressure_new}&z={z}&x={x}&y={y}`} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name='Velocidad del viento'>
          <TileLayer url={`/api/maps?type=${LayerTypes.wind_new}&z={z}&x={x}&y={y}`} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name='Temperatura'>
          <TileLayer url={`/api/maps?type=${LayerTypes.temp_new}&z={z}&x={x}&y={y}`} />
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );

};

export default Map;
