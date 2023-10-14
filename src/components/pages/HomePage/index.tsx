/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, type FC, useContext, useState } from 'react';

import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MapIcon from '@mui/icons-material/Map';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WbTwilightOutlinedIcon from '@mui/icons-material/WbTwilightOutlined';
import {
  AccordionDetails,
  Box,
  Grid,
  Stack
} from '@mui/material';
import useTranslation from 'next-translate/useTranslation';

import { WeatherContext } from '@/contexts';
import { useWeather } from '@/hooks';
import { type MinGeocodingResponse, type WeatherIconId } from '@/interfaces';
import { Card, Forecast, Map, ProgressBar, SearchBoxModal, Text, WeatherIcon } from '@/ui';
import { formatters } from '@/utils';

import * as S from './styles';

const cardCommonProps = { minHeight: 220 };

const HomePage: FC = () => {

  const { changeBackground } = useContext(WeatherContext);
  const [open, setOpen] = useState(false);

  const { t } = useTranslation('home');

  const { inputData: locationData, responseData: weather, setLocation } = useWeather();

  console.log(locationData);

  const openSearchBoxModal = (): void => {

    setOpen(true);

  };

  const closeSearchBoxModal = (): void => {

    setOpen(false);

  };

  const onLocationChange = (location: MinGeocodingResponse): void => {

    const { lat, lon, locationName } = location;

    setLocation({ lat, lon, locationName });

  };

  useEffect(() => {

    if (weather) changeBackground(weather.current.iconId as WeatherIconId);

  }, [weather]);

  return (
    <S.CustomGridContainer container >
      <S.CustomGridPanel1Item item xs={6}>
        <Box sx={{
          height:         '100%',
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'flex-end',
          gap:            '25px'
        }}>

          <SearchBoxModal
            open={open}
            onClose={closeSearchBoxModal}
            onLocationChange={onLocationChange}
          />

          <Text
            $fontSize='font_size_xxl'
            $fontWeight='bold'
          >
            {weather?.current.temp}°C
          </Text>

          <S.LocationButton
            variant="text"
            onClick={openSearchBoxModal}
          >
            <Text
              $fontSize='font_size_lg'
              $fontWeight='bold'
            >
              {locationData.locationName}
            </Text>
          </S.LocationButton>

          <Stack
            direction="row"
            alignItems="center"
            spacing="10px"
          >
            <WeatherIcon
              iconId={weather?.current.iconId as WeatherIconId || '01d'}
              iconProps={{ fontSize: 'large', style: { color: '#FFF' } }}
            />
            <Text $fontSize='font_size_md'>{weather?.current.description ? formatters.capitalize(weather.current.description) : ''}</Text>
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
              title={t('information_cards.forecast_title')}
              headIcon={<CalendarMonthOutlinedIcon />}
              loading={!weather?.daily}
              minHeight={228}
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
              title={t('information_cards.uv_index_title')}
              headIcon={<WbSunnyOutlinedIcon />}
              loading={(!weather?.current.uvi) && (typeof weather?.current.uvi !== 'number')}
              {...cardCommonProps}
            >
              <Stack textAlign="center">
                <Text $fontSize="font_size_xl">{weather?.current.uvi}</Text>
                <Text $fontSize="font_size_md">Promedio</Text>
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
              title={t('information_cards.sunset_title')}
              headIcon={<WbTwilightOutlinedIcon />}
              loading={!weather?.current.sunset}
              {...cardCommonProps}
            >
              <S.StackList>
                <Text $fontSize="font_size_xl">{weather?.current.sunset}</Text>
                {
                  weather?.current.sunrise && <Text $fontSize="font_size_sm">{`Amanecer: ${weather?.current.sunrise}`}</Text>
                }
              </S.StackList>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              title={t('information_cards.precipitation_title')}
              headIcon={<BeachAccessOutlinedIcon />}
              loading={(!weather?.current.precipitation) && (typeof weather?.current.precipitation !== 'number')}
              {...cardCommonProps}
            >
              <S.StackList>
                <Text $fontSize="font_size_xl">{weather?.current.precipitation}mm</Text>
                <Text $fontSize="font_size_sm">Predicción de la última hora</Text>
              </S.StackList>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              title={t('information_cards.temperature_title')}
              headIcon={<DeviceThermostatOutlinedIcon />}
              loading={!weather?.current.temp}
              {...cardCommonProps}
            >
              <S.StackList>
                <Text $fontSize="font_size_xl">{weather?.current.temp}°C</Text>
                <Text $fontSize="font_size_sm">Se siente mas fresco con el viento</Text>
              </S.StackList>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              title={t('information_cards.humidity_title')}
              headIcon={<WaterDropOutlinedIcon />}
              loading={!weather?.current.humidity}
              {...cardCommonProps}
            >
              <S.StackList>
                <Text $fontSize="font_size_xl">{weather?.current.humidity}%</Text>
                <Text $fontSize="font_size_sm">{`El punto de rocío ahora es ${weather?.current.dewPoint}°`}</Text>
              </S.StackList>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card
              title={t('information_cards.pressure_title')}
              headIcon={<SpeedOutlinedIcon />}
              loading={!weather?.current.pressure}
              {...cardCommonProps}
            >
              <S.StackList>
                <Text $fontSize="font_size_xl">{weather?.current.pressure}</Text>
                <Text $fontSize="font_size_sm">Arte</Text>
              </S.StackList>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card
              title={t('information_cards.interactive_map_title')}
              headIcon={<MapIcon />}
              loading={false}
            >
              <Map
                lat={locationData.lat}
                lon={locationData.lon}
                zoom={8}
              />
            </Card>
          </Grid>

        </Grid>
      </S.CustomGridPanel2Item>
    </S.CustomGridContainer>
  );

};

export default HomePage;
