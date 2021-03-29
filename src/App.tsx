import React from 'react';
import { Transfer } from './features/transfer/Transfer'
import './App.css';
import { theme } from './theme/theme'
import { ThemeProvider } from '@material-ui/styles';

function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <Transfer />
          </header>
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
