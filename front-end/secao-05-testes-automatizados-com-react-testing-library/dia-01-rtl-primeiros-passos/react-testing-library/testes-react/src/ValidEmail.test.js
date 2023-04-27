import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando se o componente não aparece caso o campo e-mail esteja vazio', () => {
    render(<ValidEmail email=''/>);
    const isValidText = screen.queryByTestId('valid-text');
    expect(isValidText).not.toBeInTheDocument();
});

test('Testando se o texto é verde com o e-mail válido', () => {
    const EMAIL_USER = 'teste@teste.com';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValidText = screen.queryByTestId('valid-text');
    expect(isValidText).toHaveAttribute('class', 'green-text');
});

test('Testando se o texto é vermelho com o e-mail inválido', () => {
    const EMAIL_USER = 'teste';
    render(<ValidEmail email={ EMAIL_USER } />);
    const isValidText = screen.queryByTestId('valid-text');
    expect(isValidText).toHaveAttribute('class', 'red-text');
});