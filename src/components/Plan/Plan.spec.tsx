import { ThemeProvider } from 'styled-components';
import { render, cleanup } from '@testing-library/react';

import { Container, Title, Price, Discount, Group } from './styles';

import theme from '../../styles/theme';

afterEach(cleanup);

test('Plan components renders correctly', () => {
  const { debug } = render(
    <ThemeProvider theme={theme}>
      <Container />
      <Title />
      <Price />
      <Discount />
      <Group />
    </ThemeProvider>,
  );

  debug();
});
