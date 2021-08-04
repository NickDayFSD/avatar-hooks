import React from 'react';
import PropTypes from 'prop-types';

const Char = ({ char }) => (
  <figure>
    <img src={char.photoUrl} alt={char.name} />
    <figcaption>
      <div>name: {char.name}</div>
      <div>affiliation: {char.affiliation}</div>
      <div>gender: {char.gender}</div>
      <div>weapon: {char.weapon}</div>
      <div>profession: {char.profession}</div>
      <div>position: {char.position}</div>
    </figcaption>
  </figure>
);

Char.propTypes = {
  char: PropTypes.objectOf(PropTypes.string),
};

export default Char;
