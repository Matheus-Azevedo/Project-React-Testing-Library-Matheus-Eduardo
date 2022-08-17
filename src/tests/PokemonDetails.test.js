import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <PokemonDetails.js />', () => {
  test('01.É exibido na tela um h2 com o texto <name> Details.',
    () => {
      renderWithRouter(<App />);
      const btn = screen.getByText(/More details/i);
      userEvent.click(btn);
      const h2 = screen.getByRole(
        'heading', { level: 2, name: /Pikachu Details/i },
      );
      expect(h2).toBeInTheDocument();
    });
  test('02.É exibido na tela um h2 com o texto Summary.', () => {
    renderWithRouter(<App />);
    const btn = screen.getByText(/More details/i);
    userEvent.click(btn);
    const h2 = screen.getByRole(
      'heading', { level: 2, name: /Summary/i },
    );
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent('Summary');
  });
  test('03.É exibido na tela um h2 com o texto Game Locations of <name>.', () => {
    renderWithRouter(<App />);
    const btn = screen.getByText(/More details/i);
    userEvent.click(btn);
    const h2 = screen.getByRole(
      'heading', { level: 2, name: /Game Locations/i },
    );
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent('Game Locations of Pikachu');
  });
  test('04.É exibido na tela uma label com o texto Pokémon favoritado?.', () => {
    renderWithRouter(<App />);
    const btn = screen.getByText(/More details/i);
    userEvent.click(btn);
    const label = screen.getByLabelText(/Pokémon favoritado/i);
    expect(label).toBeInTheDocument();
  });
  test('05.São exibidas na tela imagens de localização com o src correto.', () => {
    renderWithRouter(<App />);
    const btn = screen.getByText(/More details/i);
    userEvent.click(btn);
    const urls = ['https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png'];
    const imgs = screen.getAllByRole('img', {
      name: /Pikachu location/i,
    });
    imgs.forEach((img, index) => expect(img.src).toEqual(urls[index]));
  });
  test(`06.A seção de detalhes deve conter um parágrafo com o resumo
  do pokémon específico sendo visualizado.`, () => {
    renderWithRouter(<App />);
    const btn = screen.getByText(/More details/i);
    userEvent.click(btn);
    const paragraph = screen.getByText(/This intelligent Pokémon roasts hard/i);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent(/This intelligent Pokémon roasts hard/i);
  });
});
