import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import {Transfer} from './features/transfer/Transfer'
import {theme} from './theme/theme'
import {ThemeProvider} from '@material-ui/styles';
import {About} from './features/about/About';
import {AppBar, Button, IconButton, makeStyles, Toolbar} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div>

            <React.StrictMode>
                <ThemeProvider theme={theme}>
                    <Router>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" className={classes.title}>
                                    Pear Transfer
                                </Typography>
                                <Link to="/">
                                    <Button>Home</Button>
                                </Link>
                                <Link to="/about">
                                    <Button>About</Button>
                                </Link>
                            </Toolbar>
                        </AppBar>

                        <Switch>
                            <Route path="/about">
                                <About/>
                            </Route>
                            <Route path="/:id" children={<Transfer/>}/>
                            <Route path="/" children={<Transfer/>}/>
                        </Switch>
                    </Router>
                </ThemeProvider>
            </React.StrictMode>
        </div>
    );
}

export default App;
