import { ThemeProvider } from 'styled-components';
import { render, cleanup } from '@testing-library/react';
import Header from '.';

import theme from '../../styles/theme';

import { Container, LeftArrow } from './styles';

afterEach(cleanup);

describe('Header component', () => {
  it('renders correcly', () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <Container />
        <Header />
        <LeftArrow />
      </ThemeProvider>,
    );

    debug();
  });
});
