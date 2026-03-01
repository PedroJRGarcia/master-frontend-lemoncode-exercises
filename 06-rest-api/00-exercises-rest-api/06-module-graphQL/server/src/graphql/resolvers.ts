import { db } from '../db.js';
import { Character } from '../model.js';

export const resolvers = {
  characters: () => ({
    info: {
      count: db.characters.length,
    },
    results: db.characters,
  }),
  character: ({ id }: { id: number }) => {
    return db.characters.find((c) => c.id === id);
  },
};
