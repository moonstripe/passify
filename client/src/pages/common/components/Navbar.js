import React from 'react';;
import { Button } from 'evergreen-ui';
import { TabNavigation } from 'evergreen-ui';
import { Link, useHistory } from 'react-router-dom';


import {useSelector, useDispatch} from 'react-redux';
import {setViewerToken} from '../../Viewer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonTabNavigation() {
  const classes = useStyles();
  const { token } = useSelector(state => state.viewer);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    dispatch(setViewerToken(null));
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <TabNavigation position="static">
        
          <Button
            component={Link}
            to='/'
            color="inherit">
            About
          </Button>
          {
            token ?
              <Button
                color='inherit'
                onClick={ handleSignOut}
              >
                Sign Out
              </Button> :
              <div>
                <Button
                  to='/signup'
                  component={Link}
                  color="inherit">
                  Sign Up
                </Button>
                <Button
                  to='/signin'
                  component={Link}
                  color="inherit">
                  Sign In
                </Button>
              </div>
          }
        
      </TabNavigation>
    </div>
  );
};
