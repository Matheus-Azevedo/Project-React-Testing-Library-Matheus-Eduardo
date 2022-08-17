import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <Pokemon.js />.', () => {
  test('01.A imagem do pokemon possui o src e o alt <name> sprite correto.',
    () => {
      renderWithRouter(<App />);
      const url = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
      const img = screen.getByRole('img', {
        name: /Pikachu sprite/i,
        src: url,
      });
      expect(img.src).toEqual(url);
    });
  test('02.É exibido na tela um texto com o tipo do pokemon.', () => {
    renderWithRouter(<App />);
    const paragraph = screen.getByTestId('pokemon-type');
    expect(paragraph).toHaveTextContent('Electric');
  });
  test('03.É exibido na tela um link com o href /pokemons/<id>.', () => {
    renderWithRouter(<App />);
    const hrefLink = screen
      .getByText(/More details/i);
    userEvent.click(hrefLink);
  });
  test(`04.A imagem de favorito ⭐ possui o src /star-icon.svg e 
  alt <name> is marked as favorite`, () => {
    renderWithRouter(<App />);
    const btnDetails = screen.getByText(/More details/i);
    userEvent.click(btnDetails);
    const checkbox = screen
      .getByLabelText(/Pokémon favoritado/i);
    userEvent.click(checkbox);
    const homeLink = screen
      .getByRole('link', { name: /Home/i });
    userEvent.click(homeLink);
    const url = 'http://localhost/star-icon.svg';
    const img = screen.getByRole('img', {
      name: /Pikachu is marked as favorite/i,
      src: url,
    });
    expect(img.src).toEqual(url);
  });
});
