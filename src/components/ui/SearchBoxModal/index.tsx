import React, { type FC } from 'react';

import HistoryIcon from '@mui/icons-material/History';
import { Modal } from '@mui/material';

import { useGeocoding } from '@/hooks';
import { MinGeocodingResponseType, type MinGeocodingClientResponse, type MinGeocodingResponse } from '@/interfaces';

import * as S from './styles';
import type * as T from './types';

const SearchBoxModal: FC<T.IProps> = ({ open, onClose, onLocationChange }) => {

  const { loading, locations, searchLocation, saveLocationInLocalHistory, reset } = useGeocoding();

  const onInputChange = (_event: React.SyntheticEvent<Element, Event>, value: string): void => {

    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    void searchLocation(value);

  };

  const onChange = (_event: React.SyntheticEvent<Element, Event>, value: MinGeocodingClientResponse): void => {

    if (value) {

      const { label, lat, lon } = value;

      const valueToSend: MinGeocodingResponse = {
        locationName: label,
        lat,
        lon
      };

      onLocationChange(valueToSend);
      saveLocationInLocalHistory(value);
      reset();

    };

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
            loadingText={<S.SearchBoxModalAutocompleteLinearProgress />}
            onChange={onChange as any}
            onInputChange={onInputChange}
            options={locations}
            ListboxComponent={(params) => (<S.SearchBoxModalAutocompleteListBox {...params} />)}
            PaperComponent={(params) => (<div {...params} />)}
            renderInput={(params) => (
              <S.SearchBoxModalLocationInput
                {...params}
                label="Location"
              />
            )}
            renderOption={(props, option: any) => (
              <S.SearchBoxModalAutocompleteOption {...props} key={option.tempId}>
                {
                  (option.type === MinGeocodingResponseType.historyItem) && <HistoryIcon />
                }
                {option.label}
              </S.SearchBoxModalAutocompleteOption>
            )}
          />
      </S.SearchBoxModalMainContent>
    </Modal>
  );

};

export default SearchBoxModal;
