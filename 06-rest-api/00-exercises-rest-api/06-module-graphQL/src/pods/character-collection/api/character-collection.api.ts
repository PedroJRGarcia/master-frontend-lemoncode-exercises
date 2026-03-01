import { CharacterEntityApi } from './character-collection.api-model';
import axios from 'axios';

const graphqlUrl = '/graphql';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const { data } = await axios.post(graphqlUrl, {
    query: `query {
      characters {
        results {
          id
          name
          status
          species
          image
        }
      }
    }`,
  });
  console.log('full response', JSON.stringify(data));
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
    }`,
  });
  return data.data.character;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  await axios.delete(`/api/character/${id}`);
  return true;
};
