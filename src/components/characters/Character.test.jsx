/* eslint-disable max-len */
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Character from './Character';

describe('Character component', () => {
  it('renders a Character', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Character
          name="Aang"
          photoUrl="https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003"
          affiliation="Air Acolytes Air Nomads Air Scouts (formerly) Team Avatar"
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
