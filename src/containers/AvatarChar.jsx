import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Char from '../components/characters/CharacterDetail';
import { fetchChar } from '../services/avatarApi';

const AvatarChar = () => {
  const [loading, isLoading] = useState(true);
  const [character, updateChar] = useState({});

  const { id } = useParams();

  useEffect(async () => {
    const char = await fetchChar(id);
    updateChar(char);
    isLoading(false);
  });

  if (loading)
    return (
      <img
        src="https://media.giphy.com/media/jyanYxvGz3MOc/giphy.gif"
        alt="Loading"
      />
    );
  return <Char char={character} />;
};

export default AvatarChar;
