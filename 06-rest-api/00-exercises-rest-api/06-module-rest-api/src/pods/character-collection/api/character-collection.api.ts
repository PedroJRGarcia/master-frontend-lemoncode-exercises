import { CharacterEntityApi } from './character-collection.api-model';
import axios from 'axios';

const url = '/api/character';

export const getCharacterCollection = async (page: number = 1): Promise<CharacterEntityApi[]> => {
  const { data } = await axios.get<{ results: CharacterEntityApi[] }>(`${url}?page=${page}`);
  return data.results;
};

export const getCharacter = async (id: number): Promise<CharacterEntityApi> => {
  const { data } = await axios.get<CharacterEntityApi>(`${url}/${id}`);
  return data;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  await axios.delete(`${url}/${id}`);
  return true;
};
