import * as React from 'react';
import { CharacterEntityVm } from './hotel-collection.vm';
import { getHotelCollection } from './api';
import { mapFromApiToVm } from './hotel-collection.mapper';
import { mapToCollection } from '#common/mappers';

export const useHotelCollection = () => {
  const [hotelCollection, setHotelCollection] = React.useState<CharacterEntityVm[]>(
    []
  );

  const loadHotelCollection = () => {
    getHotelCollection().then((result) =>
      setHotelCollection(mapToCollection(result, mapFromApiToVm))
    );
  };

  return { hotelCollection, loadHotelCollection };
};
