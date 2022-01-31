// routes
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
// ----------------------------------------------------------------------

// contexts
import { SettingsProvider } from './contexts/SettingsContext';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <SettingsProvider>
      <ThemeConfig>
        <QueryClientProvider client={queryClient}>
          <ScrollToTop />
          <GlobalStyles />
          <BaseOptionChartStyle />
          <Router />
        </QueryClientProvider>
      </ThemeConfig>
    </SettingsProvider>
  );
}
