import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Router from './routes';

import ThemeProvider from './theme';

import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';

const App = () => {
  
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;