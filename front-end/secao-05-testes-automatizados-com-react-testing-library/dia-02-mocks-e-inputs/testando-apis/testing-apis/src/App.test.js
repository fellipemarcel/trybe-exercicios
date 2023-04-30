import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// afterEach(() => jest.clearAllMocks());

// it('fetches a joke', async () => {
//   const joke = {
//     id: '7h3oGtrOfxc',
//     joke: 'Whiteboards ... are remarkable.',
//     status: 200,
//   };

//   jest.spyOn(global, 'fetch');
//   global.fetch.mockResolvedValue({
//     json: jest.fn().mockResolvedValue(joke),
//   });

//   // Outra forma de mock do fetch:

//   /* global.fetch = jest.fn(() => Promise.resolve({
//     json: () => Promise.resolve(joke),
//   })); */

//   // Mais uma forma de mock de fetch:

//   /* global.fetch = jest.fn(async () => ({
//   json: async () => joke
// })); */

//   render(<App />);
//   const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
//   expect(renderedJoke).toBeInTheDocument();
//   expect(global.fetch).toHaveBeenCalledTimes(1);
//   expect(global.fetch).toHaveBeenCalledWith(
//     'https://icanhazdadjoke.com/',
//     { headers: { Accept: 'application/json' } },
//   );
// });

it('ao renderizar a página, a primeira piada é exibida na tela', async () => {
  const firstJoke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  const secondJoke = {
    id: 'R7UfaahVfFd',
    joke: 'My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.',
    status: 200,
  }

  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(firstJoke),
  }); 

  render(<App />);
  expect(await screen.findByText(firstJoke.joke)).toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(1);
  
  global.fetch.mockResolvedValueOnce({
    json: jest.fn().mockResolvedValue(secondJoke),
  });
  
  const newJokeBtn = screen.getByRole('button', { name: /new joke/i })
  userEvent.click(newJokeBtn);
  expect(await screen.findByText(secondJoke.joke)).toBeInTheDocument();
  expect(screen.queryByText(firstJoke)).not.toBeInTheDocument();
  expect(global.fetch).toHaveBeenCalledTimes(2);
});
