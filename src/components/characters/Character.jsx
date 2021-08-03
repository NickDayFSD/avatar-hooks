import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ _id, name, photoUrl, affiliation }) => (
  <Link to={`/${_id}`}>
    <figure>
      <img src={photoUrl} alt={name} />
      <figcaption>
        <p>{name}</p>
        <p>{affiliation}</p>
      </figcaption>
    </figure>
  </Link>
);

Character.propTypes = {
  _id: PropTypes.string,
  name: PropTypes.string,
  photoUrl: PropTypes.string,
  affiliation: PropTypes.string,
};

export default Character;
