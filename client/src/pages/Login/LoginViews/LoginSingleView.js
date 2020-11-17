import React from 'react';
import { useSelector } from 'react-redux';
import {useLoginView, useFetchLogins, useBreachPull } from '../LoginHooks';
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    marginL: {
        marginLeft: theme.spacing(1),
    },
    padding: {
        padding: theme.spacing(2)
    }
}));

export const LoginSingleView = () => {
    const {logins} = useFetchLogins();
    const {selectedLogin} = useLoginView();
    const { isBreached } = useBreachPull();
    const classes = useStyles();
    // console.log('IS BREACHED?????', isBreached);
    //
    //
    //
    // console.log('breached', isBreached);

    return (
        <Box className={classes.root}>
            <Paper className={classes.padding} elevation={3}>
                <Typography variant='h4'>{selectedLogin?.website}</Typography>
                <Typography variant='h6'>{selectedLogin?.username}</Typography>
                {isBreached
                    ? <Box bgcolor='secondary.main'><Typography variant='p'>Your credentials for this site have been discovered in a breach. Please change them as soon as possible!</Typography></Box>
                    : <Typography variant='p'>You were implicated in no known breaches for this site.</Typography>
                }
            </Paper>
        </Box>

    );
};
