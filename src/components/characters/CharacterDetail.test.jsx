/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Char from './CharacterDetail';
import { MemoryRouter } from 'react-router-dom';

describe.skip('CharacterDetail component', () => {
  afterEach(() => cleanup());
  it('renders CharacterDetail', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Char />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
