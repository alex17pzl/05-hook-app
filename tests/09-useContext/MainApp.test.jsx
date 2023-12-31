import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routerConfig } from '../../src/main';

describe('Pruebas en <MainApp />', () => {
  // const routerConfig = [
  //   {
  //     path: '/',
  //     element: <MainApp />,
  //     children: [
  //       {
  //         path: '/',
  //         element: <HomePage />,
  //       },
  //       {
  //         path: 'about',
  //         element: <AboutPage />,
  //       },
  //       {
  //         path: 'login',
  //         element: <LoginPage />,
  //       },
  //       {
  //         path: '*',
  //         element: <Navigate to="/" replace />,
  //       },
  //     ],
  //   },
  // ];

  test('debe de mostrar el HomePage', () => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: ['/'],
    });

    render(<RouterProvider router={router} />);
    expect(screen.getByText('HomePage')).toBeTruthy();
  });

  test('debe de mostrar el LoginPage ', async () => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: ['/login'],
    });

    render(<RouterProvider router={router} />);
    expect(screen.getByText('LoginPage')).toBeTruthy();
  });
});
