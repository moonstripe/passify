import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StickyFooter from './pages/common/components/Footer';
import Navbar from './pages/common/components/Navbar';
import {WrappedSaveLogin} from "./pages/Login/LoginViews/SaveLogin";
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import {
    WrappedSignUp,
    WrappedSignIn,
} from './pages/Viewer';
import {useSelector} from "react-redux";
import {LoginListView} from "./pages/Login/LoginViews";
import {LoginContainer} from "./pages/Login";
export const theme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#7269EF',
        dark: '#464194',
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#3FF3CB',
        main: '#06D6A0',
       // dark: will be calculated from palette.secondary.main, 
        contrastText: '#7269EF',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.9,
    },
  });
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


function App() {

    const classes = useStyles();


    return (
        <div className={classes.root}>
<CssBaseline/>

            <Router>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <LoginListView className={classes.drawerContainer}/>
                </Drawer>
                <main className={classes.content}>
                <MuiThemeProvider theme={theme}>
                    <Navbar  variant="raised" color="primary" className={classes.appBar}/>
                    </MuiThemeProvider>
                    <Route path='/signup' component={WrappedSignUp}/>
                    <Route path='/signin' component={WrappedSignIn}/>
                    <Route exact path="/" component={WrappedSaveLogin}/>
                    <LoginContainer/>
                    <StickyFooter/>
                </main>
            </Router>
        </div>
    );
}

export default App;