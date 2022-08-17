import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <Pokemon.js />.', () => {
  test('01.Teste se é renderizado um card com as informações de determinado pokémon.',
    () => {
      renderWithRouter(<App />);
      const h2 = screen.getByRole(
        'heading', { level: 2, name: /Encountered pokémons/i },
      );
      expect(h2).toBeInTheDocument();
    });
  // test('02.Teste se a Pokédex tem os botões de filtro.', () => {
  //   renderWithRouter(<App />);
  //   const types = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
  //   const btns = screen.getAllByTestId('pokemon-type-button');
  //   btns.forEach((btn, index) => expect(btn).toHaveTextContent(types[index]));
  // });
  // test('03.O botão All precisa estar sempre visível.', () => {
  //   renderWithRouter(<App />);
  //   const btn = screen.getByText(/All/i);
  //   userEvent.click(btn);
  // });
});
