import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Transfer } from './features/transfer/Transfer'
import { theme } from './theme/theme'
import { ThemeProvider } from '@material-ui/styles';
import { About } from './features/about/About';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <React.StrictMode>
              <ThemeProvider theme={theme}>
                <div className="App">
                  <header className="App-header">
                    <Transfer />
                  </header>
                </div>
              </ThemeProvider>
            </React.StrictMode>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
