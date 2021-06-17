import React from 'react';
import {theme} from '../../theme/theme'
import styles from './About.module.css';
import {ThemeProvider} from '@material-ui/styles';
import {Button, Collapse} from "@material-ui/core";

export function About() {
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    return (
        <ThemeProvider theme={theme}>
            <div className={styles.about}>
                <h1>Welcome to PearTransfer</h1>
                <p>The 🍐2🍐 files transfer app!</p>

                <Button onClick={handleChange} variant={"contained"}
                        color={"primary"}>{checked ? "Hide" : "Show"} Special Thanks</Button>
                <Collapse in={checked}>
                    <p>Theme idea: Alejandro Khabarov</p>
                    <p>Logo: Simon Cardinal</p>
                </Collapse>
            </div>
        </ThemeProvider>
    );
}
