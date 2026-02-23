import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { Lookup } from '#common/models';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const [episodes, setEpisodes] = React.useState<Lookup[]>([]);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadEpisodeCollection = async () => {
    const apiEpisodes = await api.getEpisodes();
    setEpisodes(apiEpisodes);
  };

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(parseInt(id));
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
    handleLoadEpisodeCollection();
  }, []);

  const handleSave = async (character: Character) => {
    console.log('handleSave called', character);
    const apiCharacter = mapCharacterFromVmToApi(character);
    console.log('apiCharacter', apiCharacter);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save character');
    }
  };

  return <CharacterComponent character={character} episodes={episodes}  onSave={handleSave} />;
};

