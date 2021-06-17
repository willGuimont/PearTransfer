import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.css';
import {Transfer} from './features/transfer/Transfer'
import {theme} from './theme/theme'
import {ThemeProvider} from '@material-ui/styles';
import {About} from './features/about/About';
import {AppBar, Button, CssBaseline, makeStyles, Toolbar} from "@material-ui/core";
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
    titleButton: {
        textTransform: 'none'
    }
}));

function App() {
    const classes = useStyles();
    return (
        <div>
            <React.StrictMode>
                <ThemeProvider theme={theme}>
                    <CssBaseline>
                        <Router>
                            <AppBar position="static">
                                <Toolbar>
                                    <Link to="/" className={classes.title}>
                                        <Button className={classes.titleButton}>
                                            <Typography variant="h6">
                                                Pear Transfer
                                            </Typography>
                                        </Button>
                                    </Link>
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
                                <Route path="/" children={<Transfer/>}/>
                            </Switch>
                        </Router>
                    </CssBaseline>
                </ThemeProvider>
            </React.StrictMode>
        </div>
    );
}

export default App;
