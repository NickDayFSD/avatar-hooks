import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarChars from './AvatarChars';

describe.skip('Character List Loader', () => {
  test('Loader > UL of Avatar characters', async () => {
    render(<AvatarChars />);

    screen.getByAltText('Loading');

    const ul = await screen.findByRole('listitem');
    expect(ul).not.toBeEmptyDOMElement();
  });
});
