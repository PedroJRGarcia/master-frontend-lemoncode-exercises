import { CharacterEntityApi } from './hotel-collection.api-model';
import { mockCharacterCollection } from './hotel-collection.mock-data';

let hotelCollection = [...mockCharacterCollection];

export const getHotelCollection = async (): Promise<CharacterEntityApi[]> => {
  return hotelCollection;
};

export const deleteHotel = async (id: number): Promise<boolean> => {
  hotelCollection = hotelCollection.filter((h) => h.id !== id);
  return true;
};
