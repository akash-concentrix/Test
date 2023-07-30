import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';

import Router from './routes';

import ThemeProvider from './theme';

import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';

import { AuthProvider } from './providers/auth';

const queryClient = new QueryClient();

const App = () => {
  
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>
            <ThemeProvider>
              <ScrollToTop />
              <StyledChart />
              <Router />
            </ThemeProvider>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;