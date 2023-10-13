/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, type FC } from 'react';

import { Marker, Popup, useMap } from 'react-leaflet';

import type * as I from './types';

const MapMaker: FC<I.IMapMakerProps> = ({ lat, lon }) => {

  const mapController = useMap();

  useEffect(() => {

    mapController.flyTo([lat, lon]);

  }, [lat, lon]);

  return (
    <Marker position={[lat, lon]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );

};

export default MapMaker;
