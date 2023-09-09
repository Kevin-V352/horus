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

import { Card, Map, ProgressBar } from '@/ui';

import * as S from './styles';

const cardCommonProps = { minHeight: 235 };

const HomePage: FC = () => {

  return (
    <S.CustomGridContainer container >
      <S.CustomGridPanel1Item item xs={6}>
        <Stack>
          <S.CardMainTextValue
            size="extralarge"
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
              <CloudOutlinedIcon/>
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
              <Map />
            </Card>
          </Grid>

        </Grid>
      </S.CustomGridPanel2Item>
    </S.CustomGridContainer>
  );

};

export default HomePage;
