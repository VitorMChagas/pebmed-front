import { ThemeProvider } from 'styled-components';
import { render, cleanup } from '@testing-library/react';

import { Container, MainButton, Select, SelectIcon, Group } from './styles';

import theme from '../../styles/theme';

afterEach(cleanup);

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
