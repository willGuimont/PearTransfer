import {createTheme, responsiveFontSizes} from '@material-ui/core/styles';

export const theme = responsiveFontSizes(createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: "#849719",
        },
        secondary: {
            main: "#fdd186", // ecff81
        },
    },
}));
