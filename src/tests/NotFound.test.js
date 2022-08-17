import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <NotFound.js />.', () => {
  test('01.Teste se a página contém um heading h2 com o texto Page requested not found.',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/matheuseduardo');
      const notFoundTitle = screen.getByRole(
        'heading', { level: 2, name: /Page requested not found/i },
      );
      expect(notFoundTitle).toBeInTheDocument();
    });
  test('02.Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/matheuseduardo');
    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const img = screen.getByRole('img', {
      name: /Pikachu crying because the page/i,
      src: url,
    });
    expect(img.src).toEqual(url);
  });
});
