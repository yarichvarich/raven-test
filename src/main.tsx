import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';

import { theme } from '@src/theme.ts';
import App from '@src/App.tsx';
import Provider from '@src/store/Provider';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@src/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
    <CssBaseline />
  </StrictMode>
);
