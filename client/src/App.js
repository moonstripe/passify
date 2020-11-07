import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './pages/common/components/Navbar';
import {WrappedSaveLogin} from "./pages/Login/LoginViews/SaveLogin";
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {useFetchLogins, useFetchUsers} from './pages/Login/LoginHooks';

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
                <Router>
                <CssBaseline/>
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
                </main>
            </Router>
            </div>
    );
}

export default App;
