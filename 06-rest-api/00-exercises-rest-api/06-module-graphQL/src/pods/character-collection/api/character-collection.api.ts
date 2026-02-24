import { CharacterEntityApi } from './character-collection.api-model';
import axios from 'axios';

const graphqlUrl = 'https://rickandmortyapi.com/graphql';

export const getCharacterCollection = async (page: number = 1): Promise<CharacterEntityApi[]> => {
  const { data } = await axios.post(graphqlUrl, {
    query: `query {
      characters(page: ${page}) {
        results {
          id
          name
          status
          species
          image
        }
      }
    }`
  });
  return data.data.characters.results;
};

export const getCharacter = async (id: number): Promise<CharacterEntityApi> => {
  const { data } = await axios.post(graphqlUrl, {
    query: `query {
      character(id: ${id}) {
        id
        name
        status
        species
        image
      }
    }`
  });
  return data.data.character;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  await axios.delete(`${graphqlUrl}/${id}`);
  return true;
};
