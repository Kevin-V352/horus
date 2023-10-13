import { type MinGeocodingResponse } from '@/interfaces';

export interface IProps {
  open: boolean;
  onClose: () => void;
  onLocationChange: (location: MinGeocodingResponse) => void;
};
