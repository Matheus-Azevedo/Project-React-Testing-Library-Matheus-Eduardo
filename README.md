# React Testing Library
### Autor: Matheus Eduardo de Sousa Azevedo

Este projeto foi desenvolvido por mim e faz parte do acervo de atividades executadas na escola de programação Trybe. A formação ao longo de 1 ano em Desenvolvimento Web desta instituição  conta com mais de 1.500 horas de aulas e aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais. Tudo voltado totalmente para o mercado de trabalho com intuito de entregar um profissional adequado para a realidade atual. 


## Sobre o projeto

Este projeto tem como objetivo criar e executar testes automatizados para uma aplicação React já existente e configurada. Para isso, serão utilizados as ferramentas Jest e a biblioteca React Testing Library.

## Começando

Para começar, você precisará ter a aplicação React já instalada e configurada em sua máquina. Além disso, é necessário ter o Jest e a React Testing Library instalados.

## Configuração

Para configurar o Jest e a React Testing Library, siga os seguintes passos:

1.  Instale o Jest e a React Testing Library usando o comando: 

`npm install jest @testing-library/react`.

2.  Adicione as seguintes linhas ao arquivo `package.json`:

`"scripts": {
  "test": "jest"
}` 

3.  Crie uma pasta `tests` na raiz da aplicação React, que será onde os testes serão armazenados.

## Criando os Testes

Agora que a configuração está pronta, você pode começar a criar os testes. Para isso, siga os seguintes passos:

1.  Crie um arquivos separados de testes na pasta `tests`.
2.  Importe a React Testing Library usando `import { render } from '@testing-library/react';`.
3.  Escreva o código do teste utilizando a função `render()`.
4.  Execute os testes usando o comando `npm test`.

## Documentação

A documentação para a React Testing Library e Jest pode ser encontrada nos seguintes links:

-   React Testing Library: [https://testing-library.com/docs/react-testing-library/intro](https://testing-library.com/docs/react-testing-library/intro)
-   Jest: [https://jestjs.io/docs/en/getting-started](https://jestjs.io/docs/en/getting-started)

## Conclusão

Com o Jest e a React Testing Library, é possível criar testes automatizados de maneira fácil e eficiente para aplicações React. Esperamos que este projeto possa ajudá-lo a melhorar a qualidade de seus testes.
