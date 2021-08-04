/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';

describe.skip('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders CharacterList', () => {
    const { asFragment } = render(<CharacterList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
