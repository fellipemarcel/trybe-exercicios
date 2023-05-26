import React from "react";
import { screen } from '@testing-library/react';
import App from './App';
import { renderWithRedux } from "./helpers/renderWithRedux";
import userEvent from "@testing-library/user-event";

it('A página deve renderizar dois botões e o número 0', () => {
  renderWithRedux(<App />);
  const buttons = screen.queryAllByRole('button');
  expect(buttons).toHaveLength(2);
  screen.getByText('0');
});

it('O número renderizado na página deve ser o mesmo valor do estado global', () => {
  const initialState = {
    counterReducer: {
      count: 10,
    }
  };
  renderWithRedux(<App />, { initialState });
  expect(screen.queryByText('0')).not.toBeInTheDocument();
  expect(screen.getByText('10')).toBeInTheDocument();
}); 

it('O clique dos botões incrementa corretamente o valor do estado global', async () => {
  renderWithRedux(<App />);
  screen.getByRole('heading', {  name: /contador/i});
  userEvent.click(screen.getByRole('button', {  name: /incrementar 1/i}));
  await screen.findByText('1');
});

it('O clique incrementa corretamente quando o count do estado começa com 5', async () => {
  const initialState = {
    counterReducer: {
      count: 5,
    }
  };
  renderWithRedux(<App />, { initialState });
  screen.getByText('5');
  userEvent.click(screen.getByRole('button', {  name: /incrementar 1/i}));
  await screen.findByText('6');
});

it('Incrementa o valor da store ao clicar no botão', async () => {
  const { store } = renderWithRedux(<App />);
  screen.getByText('0');
  expect(store.getState().counterReducer.count).toBe(0);
  userEvent.click(screen.getByRole('button', {  name: /incrementar 1/i}));
  await screen.findByText('1');
  expect(store.getState().counterReducer.count).toBe(1);
});