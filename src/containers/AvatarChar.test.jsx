import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import AvatarChars from './AvatarChars';

const server = setupServer(
  rest.get(
    'https://last-airbender-api.herokuapp.com/api/v1/characters',
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            _id: '3af4',
            name: 'Aang',
            photoUrl: 'none',
            affiliation: 'Air Nomads',
            gender: 'leaf',
            weapon: 'all elements',
            profession: 'avatar',
            position: 'keeper of peace',
          },
        ])
      );
    }
  )
);

describe('Character List Loader', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  test('Loader > UL of Avatar characters', async () => {
    render(
      <MemoryRouter>
        <AvatarChars />
      </MemoryRouter>
    );

    screen.getByAltText('Loading');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });
});
