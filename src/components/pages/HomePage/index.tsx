'use client';

import { type FC } from 'react';

import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WbTwilightOutlinedIcon from '@mui/icons-material/WbTwilightOutlined';
import { AccordionDetails, Box, Grid, Stack } from '@mui/material';

import { useWeather } from '@/hooks';
import { type WeatherIconId } from '@/interfaces';
import { Card, Forecast, Map, ProgressBar, Text, WeatherIcon } from '@/ui';
import { formatters } from '@/utils';

import * as S from './styles';

const cardCommonProps = { minHeight: 235 };

const HomePage: FC = () => {

  const { data: weather } = useWeather(-32.745820, -60.734330, 'en');

  console.log(typeof !weather?.current.uvi);

  return (
    <S.CustomGridContainer container >
      <S.CustomGridPanel1Item item xs={6}>
        <Box sx={{
          height:         '100%',
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'flex-end',
          gap:            '20px'
        }}>
          <Text $fontsize='font_size_xxl'>17°</Text>
          <S.LocationButton
            variant="text"
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <S.CustomSearchIcon fontSize='small' />
              <Text $fontsize='font_size_lg'>Barcelona, España</Text>
            </Box>
          </S.LocationButton>
          <Stack
            direction="row"
            alignItems="center"
            spacing="10px"
          >
            <WeatherIcon iconId={weather?.current.iconId as WeatherIconId || '01d'} />
            <Text $fontsize='font_size_md'>{weather?.current.description ? formatters.capitalize(weather.current.description) : ''}</Text>
          </Stack>
          {
            weather?.hourly && (
              <Forecast data={weather?.hourly} />
            )
          }
        </Box>
      </S.CustomGridPanel1Item>
      <S.CustomGridPanel2Item item xs={6}>
        <Grid
          container
          spacing="10px"
        >

          <Grid item xs={12}>
            <Card
              title='Previsión a 7 dias'
              headIcon={<CalendarMonthOutlinedIcon />}
              loading={!weather?.daily}
              minHeight={244}
            >
              <Stack>
                {
                  weather?.daily.slice(0, 3).map((day, index) => (
                    <ProgressBar key={index} data={day} />
                  ))
                }
                <S.DaysAccordion disableGutters>
                  <S.DaysAccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="days-panel-content"
                    id="days-panel-header"
                  >
                  </S.DaysAccordionSummary>
                  <AccordionDetails sx={{ padding: 0 }}>
                    {
                      weather?.daily.slice(3).map((day, index) => (
                        <ProgressBar key={index} data={day} />
                      ))
                    }
                  </AccordionDetails>

                </S.DaysAccordion>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              title='Índice UV'
              headIcon={<WbSunnyOutlinedIcon />}
              loading={(!weather?.current.uvi) && (typeof weather?.current.uvi !== 'number')}
              {...cardCommonProps}
            >
              <Stack textAlign="center">
                <Text $fontsize="font_size_lg">{weather?.current.uvi}</Text>
                <Text $fontsize="font_size_md">Promedio</Text>
                <S.UVSlider
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  value={weather?.current.uvi}
                  min={0}
                  max={10}
                  disabled
                />
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              title="Atardecer"
              headIcon={<WbTwilightOutlinedIcon />}
              loading={!weather?.current.sunset}
              {...cardCommonProps}
            >
              <S.StackList>
                <Text $fontsize="font_size_lg">{weather?.current.sunset}</Text>
                <Text $fontsize="font_size_sm">Amanecer: 06:00</Text>
              </S.StackList>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              title="Precipitación"
              headIcon={<BeachAccessOutlinedIcon />}
              loading={(!weather?.current.precipitation) && (typeof weather?.current.precipitation !== 'number')}
              {...cardCommonProps}
            >
              <S.StackList>
                <Text $fontsize="font_size_lg">{weather?.current.precipitation}mm</Text>
                <Text $fontsize="font_size_sm">Predicción de la última hora</Text>
              </S.StackList>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              title="Temperatura"
              headIcon={<DeviceThermostatOutlinedIcon />}
              loading={!weather?.current.temp}
              {...cardCommonProps}
            >
              <S.StackList>
                <Text $fontsize="font_size_lg">{weather?.current.temp}°C</Text>
                <Text $fontsize="font_size_sm">Se siente mas fresco con el viento</Text>
              </S.StackList>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              title="Humedad"
              headIcon={<WaterDropOutlinedIcon />}
              loading={!weather?.current.humidity}
              {...cardCommonProps}
            >
              <S.StackList>
                <Text $fontsize="font_size_lg">{weather?.current.humidity}%</Text>
                <Text $fontsize="font_size_sm">{`El punto de rocío ahora es ${weather?.current.dewPoint}°`}</Text>
              </S.StackList>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              title="Presión"
              headIcon={<SpeedOutlinedIcon />}
              loading={!weather?.current.pressure}
              {...cardCommonProps}
            >
              <S.StackList>
                <Text $fontsize="font_size_lg">{weather?.current.pressure}hPa</Text>
                <Text $fontsize="font_size_sm">Arte</Text>
              </S.StackList>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card
              title='Precipitación'
              headIcon={<BeachAccessOutlinedIcon />}
              loading={false}
            >
              <Map />
            </Card>
          </Grid>

        </Grid>
      </S.CustomGridPanel2Item>
    </S.CustomGridContainer>
  );

};

export default HomePage;
