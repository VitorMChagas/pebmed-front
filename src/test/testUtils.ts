/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

const Providers = ({ children }) => children;
// return (
//   <ThemeProvider theme="light">
//     <TranslationProvider messages={defaultStrings}>
//       {children}
//     </TranslationProvider>
//   </ThemeProvider>
// )
const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
