import * as apiModel from './api/hotel.api-model';
import * as viewModel from './hotel.vm';

export const mapHotelFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  status: character.status,
  species: character.species,
  image: character.image,
});

export const mapHotelFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    image: character.image,
  } as unknown) as apiModel.Character);
