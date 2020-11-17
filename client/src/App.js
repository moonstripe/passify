import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StickyFooter from './pages/common/components/Footer';
import Navbar from './pages/common/components/Navbar';
import {WrappedSaveLogin} from "./pages/Login/LoginViews/SaveLogin";
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';


import {
    WrappedSignUp,
    WrappedSignIn,
} from './pages/Viewer';
import {useSelector} from "react-redux";
import { LoginListView } from "./pages/Login/LoginViews";
import {LoginContainer} from "./pages/Login";

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

                {/*supposed to go here*/}
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar/>
                    <LoginListView className={classes.drawerContainer}/>
                </Drawer>
                <main className={classes.content}>
                    <Navbar className={classes.appBar}/>
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
