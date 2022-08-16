import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import About from '../pages/About';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <About.js />.', () => {
  test('01.Teste se a página contém as informações sobre a Pokédex.', () => {
    renderWithRouter(<About />);
    const paragraph = screen.getByText(/This application/i);
    expect(paragraph).toBeInTheDocument();
  });
  test('02.Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
    renderWithRouter(<About />);
    const h2 = screen.getByRole('heading', { level: 2, name: /About Pokédex/i });
    expect(h2).toBeInTheDocument();
  });
  test('03.Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    renderWithRouter(<About />);
    const paragraphs = screen.getAllByText(/Pokédex/i);
    paragraphs.forEach((p) => expect(p).toBeInTheDocument());
  });
  test('04.Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png.', () => {
    renderWithRouter(<About />);
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const img = screen.getByRole('img', { alt: /Pokédex/i, src: url });
    expect(img.src).toEqual(url);
  });
});
