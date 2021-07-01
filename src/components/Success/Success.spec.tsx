import { ThemeProvider } from 'styled-components';
import { render, cleanup } from '@testing-library/react';
import {
  Container,
  CheckMark,
  InfoBox,
  CheckoutBox,
  PlanBox,
  ManagePlanBtn,
  Star,
  UserBox,
} from './styles';
import theme from '../../styles/theme';

afterEach(cleanup);

test('success components renders correctly', () => {
  const { debug } = render(
    <ThemeProvider theme={theme}>
      <Container />
      <CheckMark />
      <InfoBox />
      <CheckoutBox />
      <Star />
      <PlanBox />
      <UserBox />
      <ManagePlanBtn />
    </ThemeProvider>,
  );

  debug();
});
