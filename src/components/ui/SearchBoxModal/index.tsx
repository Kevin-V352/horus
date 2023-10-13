import React, { type FC } from 'react';

import { LinearProgress, Modal } from '@mui/material';

import { useGeocoding } from '@/hooks';
import { type MinGeocodingResponse } from '@/interfaces';

import * as S from './styles';
import type * as T from './types';

const SearchBoxModal: FC<T.IProps> = ({ open, onClose, onLocationChange }) => {

  const { loading, locations, searchLocation } = useGeocoding();

  const options = locations.map((location) => ({ ...location, label: location.locationName }));

  const onInputChange = (_event: React.SyntheticEvent<Element, Event>, value: string): void => {

    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    void searchLocation(value);

  };

  const onChange = (_event: React.SyntheticEvent<Element, Event>, value: MinGeocodingResponse): void => {

    if (value) onLocationChange(value);
    onClose();

  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      style={{ backdropFilter: 'blur(10px)' }}
      aria-labelledby="search-box-modal-title"
      aria-describedby="search-box-modal-description"
    >
      <S.SearchBoxModalMainContent>
          <S.SearchBoxModalAutocomplete
            disablePortal
            id="search-box-autocomplete"
            loading={loading}
            loadingText={<LinearProgress />}
            onChange={onChange as any}
            onInputChange={onInputChange}
            options={options}
            PaperComponent={({ children }) => (<div>{children}</div>)}
            renderInput={(params) => (
              <S.SearchBoxModalLocationInput
                {...params}
                label="Location"
              />
            )}
            renderOption={(props, option: any) => (
              <li {...props} key={option.label}>
                {option.label}
              </li>
            )}
          />
      </S.SearchBoxModalMainContent>
    </Modal>
  );

};

export default SearchBoxModal;
