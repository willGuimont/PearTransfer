import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import lime from '@material-ui/core/colors/lime';
import green from '@material-ui/core/colors/green';

export const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: green["A700"],
    },
    secondary: {
      main: lime["A700"],
    },
  },
}));
