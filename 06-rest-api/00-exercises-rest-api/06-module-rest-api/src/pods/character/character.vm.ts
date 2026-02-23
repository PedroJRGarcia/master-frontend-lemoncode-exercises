export interface Character {
  id: number;
  name: string;
  bestSentence: string;
  status: string;
  species: string;
  image: string;
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  name: '',
  bestSentence: '',
  status: '',
  species: '',
  image: '',
});
