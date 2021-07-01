import { ThemeProvider } from 'styled-components';
import { render, cleanup } from '@testing-library/react';

import {
  Container,
  Content,
  FormDiv,
  FormData,
  PlansDiv,
  About,
  AboutContainer,
  QuestionCircle,
} from './styles';

import theme from '../../styles/theme';

afterEach(cleanup);

test('Checkout components renders correctly', () => {
  const { debug } = render(
    <ThemeProvider theme={theme}>
      <Container />
      <Content />
      <FormDiv />
      <FormData />
      <PlansDiv />
      <AboutContainer />
      <About />
      <QuestionCircle />
    </ThemeProvider>,
  );

  debug();
});
