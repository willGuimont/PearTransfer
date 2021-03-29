import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import lime from '@material-ui/core/colors/lime';

export const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: lime["A700"],
    },
    secondary: {
      main: lime["A200"],
    },
  },
}));
