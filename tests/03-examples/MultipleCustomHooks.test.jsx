import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debe de mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole('button', { name: 'Next pokemon' });

    expect(nextButton.disabled).toBeTruthy();
    expect(screen.getByText('Loading...')).toBeTruthy();
    expect(screen.getByText('Pokemon Quotes')).toBeTruthy();
  });

  test('debe de mostrar un Quote', () => {
    useFetch.mockReturnValue({
      data: { forms: [{ name: 'Pikachu', url: 'https://url.com' }] },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole('button', { name: 'Next pokemon' });

    expect(screen.getByText('https://url.com')).toBeTruthy();
    expect(screen.getByText('Pikachu')).toBeTruthy();
    expect(nextButton.disabled).toBeFalsy();
  });

  test('debe de llamar a la función de incrementar', () => {
    useFetch.mockReturnValue({
      data: { forms: [{ name: 'Pikachu', url: 'https://url.com' }] },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole('button', { name: 'Next pokemon' });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
