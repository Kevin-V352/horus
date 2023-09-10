'use client';

import { type FC } from 'react';

import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WbTwilightOutlinedIcon from '@mui/icons-material/WbTwilightOutlined';
import { AccordionDetails, Grid, Stack } from '@mui/material';

import { useWeather } from '@/hooks';
import { Card, Map, ProgressBar } from '@/ui';

import * as S from './styles';

const cardCommonProps = { minHeight: 235 };

const HomePage: FC = () => {

  const { data: weather } = useWeather(-32.745820, -60.734330, 'en');

  return (
    <S.CustomGridContainer container >
      <S.CustomGridPanel1Item item xs={6}>
        <Stack>
          <S.CardMainTextValue
            fontSize="4.5rem"
            fontWeight="bold"
          >
            17°
          </S.CardMainTextValue>
          <Stack >
            <S.LocationButton
              variant="text"
              startIcon={<S.CustomSearchIcon fontSize='small' />}
            >
              <S.CardMainTextValue
                size="large"
                fontWeight="bold"
              >
                Barcelona, España
              </S.CardMainTextValue>
            </S.LocationButton>
            <Stack
              direction="row"
              alignItems="center"
              spacing="10px"
            >
              <CloudOutlinedIcon />
              <S.CardMainTextValue size='default'>5</S.CardMainTextValue>
            </Stack>
          </Stack>
        </Stack>
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
              loading={false}
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
              loading={!weather?.current.uvi && (typeof !weather?.current.uvi !== 'number')}
              {...cardCommonProps}
            >
              <Stack textAlign="center">
                <S.CardMainTextValue size='large'>{weather?.current.uvi}</S.CardMainTextValue>
                <S.CardMainTextValue>Promedio</S.CardMainTextValue>
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
              title='Atardecer'
              headIcon={<WbTwilightOutlinedIcon />}
              loading={!weather?.current.sunset}
              {...cardCommonProps}
            >
              <S.StackList>
                <S.CardMainTextValue size="large">{weather?.current.sunset}</S.CardMainTextValue>
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
              loading={true}
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
              loading={!weather?.current.temp}
              {...cardCommonProps}
            >
              <S.StackList>
                <S.CardMainTextValue size="large">{weather?.current.temp}°C</S.CardMainTextValue>
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
              loading={!weather?.current.humidity}
              {...cardCommonProps}
            >
              <S.StackList>
                <S.CardMainTextValue size="large">{weather?.current.humidity}%</S.CardMainTextValue>
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
              loading={!weather?.current.pressure}
              {...cardCommonProps}
            >
              <S.StackList>
                <S.CardMainTextValue size="large">{weather?.current.pressure}hPa</S.CardMainTextValue>
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
