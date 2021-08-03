import React, { useEffect, useState } from 'react';
import { fetchChars } from '../services/avatarApi';
import CharacterList from '../components/characters/CharacterList';

const AvatarCharacters = () => {
  const [loading, isLoading] = useState(true);
  const [characters, updateCharacters] = useState([]);

  useEffect(async () => {
    const characters = await fetchChars();
    updateCharacters(characters);
    isLoading(false);
  });

  if (loading)
    return (
      <img
        src="https://media.giphy.com/media/jyanYxvGz3MOc/giphy.gif"
        alt="Loading"
      />
    );
  return <CharacterList characters={characters} />;
};

export default AvatarCharacters;
