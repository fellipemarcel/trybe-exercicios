import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import renderWithRouterAndRedux from './redux/helpers/renderWithRouterAndRedux';

it('Ao acessar a rota /profile, o nome da pessoa deverá ser renderizado', () => {
  renderWithRouterAndRedux(<App />);
  const input = screen.getByRole('textbox');
  userEvent.type(input, 'Tryber');
  expect(input).toHaveValue('Tryber');
  userEvent.click(screen.getByRole('button', { name: /entrar/i }));
  screen.getByText('Boas vindas, Tryber');
});

it('Ao acessar a rota /profile, o nome da pessoa não pode ser renderizado', () => {
  const initialEntries = ['/profile'];
  renderWithRouterAndRedux(<App />, { initialEntries });
  expect(screen.queryByText('Boas vindas')).not.toBeInTheDocument();
  expect(screen.getByText('Você precisa realizar o login')).toBeInTheDocument();
});

it('Ao acessar a /profile e alterando o estado, o nome deve ser renderizado', () => {
  const initialEntries = ['/profile'];
  const initialState = { userName: 'Tryber' };
  renderWithRouterAndRedux(<App />, { initialState, initialEntries });
  expect(screen.queryByText('Você precisa realizar o login')).not.toBeInTheDocument();
  expect(screen.getByText('Boas vindas, Tryber')).toBeInTheDocument();
});
