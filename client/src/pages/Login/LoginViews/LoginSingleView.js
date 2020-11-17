import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Card from "@material-ui/core/Card";
import { palette } from '@material-ui/system';


import {useLoginView, useFetchLogins, useBreachPull} from '../LoginHooks';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    padding: {
        padding: theme.spacing(2),
    },
}));


export const LoginSingleView = () => {
    const classes = useStyles();
    const {logins} = useFetchLogins();
    const {selectedLogin} = useLoginView();
    const {isBreached} = useBreachPull();
    // console.log('IS BREACHED?????', isBreached);
    //
    // console.log('breached', isBreached);

    return (
            <Box className={classes.root}>
                <Paper className={classes.padding} variant='outlined' elevation={3}>
                    <CssBaseline />
                    <Typography variant='h3'>{selectedLogin?.website}</Typography>
                    <Typography variant='h6'>{selectedLogin?.username}</Typography>
                    {isBreached
                        ?
                        <Box className={classes.padding} bgcolor="secondary.main"><Typography variant='p'>Your credentials for this site have been discovered in a breach. Please change them as soon
                            as possible!</Typography></Box>
                        : <Box className={classes.padding}><Typography variant='p'>You were implicated in no known breaches for this site.</Typography></Box>
                    }
                </Paper>
            </Box>

            );
            };
