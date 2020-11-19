import React from 'react';
import LockIcon from '@material-ui/icons/Lock';
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
    marginL: {
        marginLeft: theme.spacing(1),
    }
}));


export const LoginListView = () => {
    const classes = useStyles();
    const { logins } = useFetchLogins();

    console.log(logins);


    return (
        <List component="nav" className={classes.root} aria-label="contacts">
            {logins?.map(login => {
                    console.log(login.passwordStrength);
                    return (



                        <ListItem key={login.id} component={Link} to={`/logins/${login.id}`}>

                            <LockIcon style={{color: `hsl(${login.passwordStrength>149 ? 150 : login.passwordStrength}, 100%, 50%)`}}/>
                            <ListItemText className={classes.marginL} primary={login.website} secondary={login.username}/>
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
