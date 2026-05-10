import { Character } from './character.api-model';
import { Lookup } from '#common/models';
import axios from 'axios';

const characterListUrl = '/api/character';
const episodeUrl = 'https://rickandmortyapi.com/api/episode';

export const getCharacter = async (id: number): Promise<Character> => {
  const { data } = await axios.get<Character>(`${characterListUrl}/${id}`);
  return data;
};

export const getEpisodes = async (): Promise<Lookup[]> => {
  const {data} = await axios.get<{ results: Lookup[] }>(episodeUrl);
  return data.results;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    await axios.put<Character>(`${characterListUrl}/${character.id}`, character);
  } else {
    await axios.post<Character>(`${characterListUrl}`, character);
  }
  return true;
};
