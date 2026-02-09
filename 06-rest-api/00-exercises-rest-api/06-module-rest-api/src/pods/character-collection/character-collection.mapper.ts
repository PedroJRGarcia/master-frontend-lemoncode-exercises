import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
    ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  image: character.image,
});
