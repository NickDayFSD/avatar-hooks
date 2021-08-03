import React, { useEffect, useState } from 'react';

const AvatarCharacters = () => {
  const [loading, isLoading] = useState(false);
  const [characters, updateCharacters] = useState([]);

  useEffect(async () => {
    // fetch from API
    updateCharacters(characters);
    isLoading(false);
  });

  if (loading) return <h1>Loading...</h1>;
  return <p>quote module here</p>;
};

export default AvatarCharacters;
