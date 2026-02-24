import { Character } from './character.api-model';
import { Lookup } from '#common/models';
import axios from 'axios';

const graphqlUrl = 'https://rickandmortyapi.com/graphql';
const episodeUrl = 'https://rickandmortyapi.com/api/episode';

export const getCharacter = async (id: number): Promise<Character> => {
  const { data } = await axios.post(graphqlUrl, {
    query: `query {
      character(id: ${id}) {
        id
        name
        status
        species
        image
        origin {
          name
          url
        }
        location {
          name
          url
        }
        episode {
          id
          name
        }
      }
    }`
  });
  return data.data.character;
};

export const getEpisodes = async (): Promise<Lookup[]> => {
  const { data } = await axios.get<{ results: Lookup[] }>(episodeUrl);
  return data.results;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    await axios.put<Character>(`${graphqlUrl}/${character.id}`, character);
  } else {
    await axios.post<Character>(`${graphqlUrl}`, character);
  }
  return true;
};
