import React from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {useFetchLogins} from '../LoginHooks';

import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));


export const LoginListView = () => {
    const classes = useStyles();
    const { logins } = useFetchLogins();

    console.log(logins);


    return (
        <List component="nav" className={classes.root} aria-label="contacts">
            {logins?.map(login => {
                    return (
                        <ListItem key={login.id} component={Link} to={`/logins/${login.id}`}>
                            <ListItemText primary={login.website}/>
                        </ListItem>
                    );
                })
            }
            <ListItem key={logins?.length+1} component={Link} to={`/`}>
                <ListItemText primary="Add an Account"/>
            </ListItem>
        </List>
    );
};
