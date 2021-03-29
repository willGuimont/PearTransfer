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
    <div>

      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <header className="App-header">
            <div className="App">
              <Router>
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
                  <Route path="/:id" children={<Transfer />} />
                  <Route path="/" children={<Transfer />} />
                </Switch>
              </Router>
            </div>
          </header>
        </ThemeProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;
