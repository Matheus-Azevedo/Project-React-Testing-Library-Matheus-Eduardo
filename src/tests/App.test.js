import React from 'react';
import { screen } from '@testing-library/react';
// import { Router } from 'react-router';
// import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Teste o componente <App.js />', () => {
  describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação:',
    () => {
    // beforeEach(() => {
    // });
      test('01.O primeiro link deve possuir o texto Home.', () => {
        renderWithRouter(<App />);
        const homeLink = screen
          .getByRole('link', { name: /home/i });
        userEvent.click(homeLink);
      });
      test('02.O segundo link deve possuir o texto About.', () => {
        renderWithRouter(<App />);
        const aboutLink = screen
          .getByRole('link', { name: /About/i });
        userEvent.click(aboutLink);
      });
      test('03.O terceiro link deve possuir o texto Favorite Pokémons.', () => {
        renderWithRouter(<App />);
        const favoritePokemonLink = screen
          .getByRole('link', { name: /Favorite Pokémons/i });
        userEvent.click(favoritePokemonLink);
      });
    });
  describe('Teste se a aplicação é redirecionada para a página inicial, na URL /', () => {
    test('Ao clicar no link Home da barra de navegação.', () => {
      const { history } = renderWithRouter(<App />);
      const homeLink = screen.getByRole('link', { name: /Home/i });
      expect(homeLink).toBeInTheDocument();
      userEvent.click(homeLink);
      expect(history.location.pathname).toBe('/');
    });
  });
  describe('Teste se a aplicação é redirecionada para a página de About, na URL /about',
    () => {
      test('Ao clicar no link About da barra de navegação.', () => {
        const { history } = renderWithRouter(<App />);
        const aboutLink = screen.getByRole('link', { name: /About/i });
        expect(aboutLink).toBeInTheDocument();
        userEvent.click(aboutLink);
        expect(history.location.pathname).toBe('/about');
      });
    });
  describe(`Teste se a aplicação é redirecionada para a página de 
  Pokémons Favoritados, na URL /favorites`,
  () => {
    test('Ao clicar no link Favorite Pokémons da barra de navegação.', () => {
      const { history } = renderWithRouter(<App />);
      const favoritesLink = screen.getByRole('link', { name: /Favorite Pokémons/i });
      expect(favoritesLink).toBeInTheDocument();
      userEvent.click(favoritesLink);
      expect(history.location.pathname).toBe('/favorites');
    });
  });
  describe(`Teste se a aplicação é redirecionada para a página Not Found 
  ao entrar em uma URL desconhecida.`,
  () => {
    test('Not Found ao entrar em uma URL desconhecida.', () => {
      const { history } = renderWithRouter(<App />);
      history.push('/matheuseduardo');
      const notFoundTitle = screen.getByRole(
        'heading', { level: 2, name: /Page requested not found/i },
      );
      expect(notFoundTitle).toBeInTheDocument();
    });
  });
});
