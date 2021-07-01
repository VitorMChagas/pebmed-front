/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-useless-return */
import { ThemeProvider } from 'styled-components';

import { render, screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import { Container, MainButton, Select, SelectIcon, Group } from './styles';

import theme from '../../styles/theme';
import FormData from '.';

test('Form components renders correctly', () => {
  const { debug } = render(
    <ThemeProvider theme={theme}>
      <Container />
      <Group />
      <SelectIcon />
      <Select />
      <MainButton />
    </ThemeProvider>,
  );

  debug();
});

it('should type in form inputs and read valid inputs', async () => {
  const handleSubmit = jest.fn();
  const { getByRole } = render(
    <ThemeProvider theme={theme}>
      <FormData isChecked installments={12} />
      <MainButton onSubmit={handleSubmit} />
    </ThemeProvider>,
  );

  userEvent.type(
    screen.getByLabelText(/Número do cartão/i),
    '0000000000000000',
  );
  userEvent.type(screen.getByLabelText(/Validade/i), '12/21');
  userEvent.type(screen.getByLabelText(/CVV/i), '123');
  userEvent.type(screen.getByLabelText(/Nome impresso no cartão/i), 'Teste');
  userEvent.type(screen.getByLabelText(/CPF/i), '00000000000');
  userEvent.type(screen.getByLabelText(/Cupom/i), 'Teste');

  userEvent.click(
    getByRole('button', {
      name: 'Finalizar pagamento',
    }),
  );

  waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      creditCardNumber: '0000000000000000',
      creditCardExpirationDate: '12/21',
      creditCardCVV: '123',
      creditCardHolder: 'Teste',
      creditCardCPF: '00000000000',
      couponCode: '',
    }),
  );
});
