import { Character } from './character.api-model';
import { Lookup } from '#common/models';
import { mockCities, mockCharacterCollection } from './character.mock-data';

export const getCharacter = async (id: number): Promise<Character> => {
  return mockCharacterCollection.find((h) => h.id === id);
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
