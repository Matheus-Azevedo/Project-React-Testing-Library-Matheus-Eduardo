import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <FavoritePokemons.js />.', () => {
  test(`01.Teste se é exibida na tela a mensagem No favorite 
  pokemon found, caso a pessoa não tenha pokémons favoritos.`, () => {
    renderWithRouter(<FavoritePokemons />);
    const paragraph = screen.getByText(/No favorite pokemon found/i);
    expect(paragraph).toBeInTheDocument();
  });
  test('02.Teste se são exibidos todos os cards de pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const btnDetails = screen.getByText(/More details/i);
    userEvent.click(btnDetails);
    const checkbox = screen
      .getByLabelText(/Pokémon favoritado/i);
    userEvent.click(checkbox);
    const favoriteLink = screen
      .getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(favoriteLink);
    const paragraph = screen.getByTestId('pokemon-name');
    expect(paragraph).toHaveTextContent('Pikachu');
  });
});
