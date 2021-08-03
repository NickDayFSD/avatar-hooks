import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  const characterElement = characters.map((character) => (
    <li key={character._id}>
      <Character {...character} />
    </li>
  ));
  return <ul>{characterElement}</ul>;
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      photoUrl: PropTypes.string,
      affiliation: PropTypes.string,
    })
  ),
};

export default CharacterList;
