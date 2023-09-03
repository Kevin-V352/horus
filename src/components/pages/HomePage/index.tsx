'use client';

import { type FC } from 'react';

import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WbTwilightOutlinedIcon from '@mui/icons-material/WbTwilightOutlined';
import { Grid, Stack } from '@mui/material';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { Card, ProgressBar } from '@/ui';

import * as S from './styles';

const cardCommonProps = { minHeight: 235 };

const HomePage: FC = () => {

  return (
    <S.CustomGridContainer container >
      <S.CustomGridPanel1Item item xs={6}>
        <p>holaaa</p>
      </S.CustomGridPanel1Item>
      <S.CustomGridPanel2Item item xs={6}>
        <Grid
          container
          spacing="10px"
        >

          <Grid item xs={12}>
            <Card
              title='Previsión a 10 dias'
              headIcon={<CalendarMonthOutlinedIcon />}
            >
              <Stack>
                <ProgressBar
                  title='Hoy'
                  icon={<CloudOutlinedIcon />}
                  minValue={12}
                  maxValue={30}
                />
                <ProgressBar
                  title='Mañana'
                  icon={<CloudOutlinedIcon />}
                  minValue={12}
                  maxValue={30}
                />
                <ProgressBar
                  title='Domingo'
                  icon={<CloudOutlinedIcon />}
                  minValue={12}
                  maxValue={30}
                />
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              title='Índice UV'
              headIcon={<WbSunnyOutlinedIcon />}
              {...cardCommonProps}
            >
              <Stack textAlign="center">
                <S.CardMainTextValue size='large'>5</S.CardMainTextValue>
                <S.CardMainTextValue>Promedio</S.CardMainTextValue>
                <S.UVSlider
                  defaultValue={50}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  disabled
                />
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              title='Atardecer'
              headIcon={<WbTwilightOutlinedIcon />}
              {...cardCommonProps}
            >
              <S.StackList>
                <S.CardMainTextValue size="large">20:30</S.CardMainTextValue>
                <S.CardMainTextValue size="small">
                  Amanecer: 06:00
                </S.CardMainTextValue>
              </S.StackList>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              title='Precipitación'
              headIcon={<BeachAccessOutlinedIcon />}
              {...cardCommonProps}
            >
              <S.StackList>
                <S.CardMainTextValue size="large">0mm</S.CardMainTextValue>
                <S.CardMainTextValue size="small">Últimas 24hs</S.CardMainTextValue>
                <S.CardMainTextValue size="small" marginTop="10px">
                  0mm esperado dentro de un dia
                </S.CardMainTextValue>
              </S.StackList>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              title='Temperatura'
              headIcon={<DeviceThermostatOutlinedIcon />}
              {...cardCommonProps}
            >
              <S.StackList>
                <S.CardMainTextValue size="large">20°</S.CardMainTextValue>
                <S.CardMainTextValue size="small">
                  Se siente mas fresco con el viento
                </S.CardMainTextValue>
              </S.StackList>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              title='Humedad'
              headIcon={<WaterDropOutlinedIcon />}
              {...cardCommonProps}
            >
              <S.StackList>
                <S.CardMainTextValue size="large">55%</S.CardMainTextValue>
                <S.CardMainTextValue size="small">
                  El punto de rocío ahora es 1°
                </S.CardMainTextValue>
              </S.StackList>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              title='Presión'
              headIcon={<SpeedOutlinedIcon />}
              {...cardCommonProps}
            >
              <S.StackList>
                <S.CardMainTextValue size="large">764mmHg</S.CardMainTextValue>
                <S.CardMainTextValue size="small">
                  Arte
                </S.CardMainTextValue>
              </S.StackList>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card
              title='Precipitación'
              headIcon={<BeachAccessOutlinedIcon />}
            >
              <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
                style={{
                  height:   '400px',
                  overflow: 'hidden'
                }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
              </MapContainer>
            </Card>
          </Grid>

        </Grid>
      </S.CustomGridPanel2Item>
    </S.CustomGridContainer>
  );

};

export default HomePage;
