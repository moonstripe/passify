import { useEffect } from 'react';
import { getLogins, getLogin } from './LoginReducer';
import { useUtils } from '../common';
import { reset } from 'redux-form';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

export const useFetchLogins = () => {
  // const {
  //   dispatch,
  // } = useUtils();
  const dispatch = useDispatch();
  const { logins } = useSelector(state => state.login);

  // console.log(logins);
  useEffect(() => {
    axios.get('/api/logins', { headers: { authorization: localStorage.getItem('token') }})
      .then(res => {
        dispatch(getLogins(res.data));
      })
      .catch(e => console.log(e));

  }, [dispatch]);


  return {
    logins,
  };
};


export const useLoginView = () => {
  const dispatch = useDispatch();

  const params = useParams();
  console.log(params);
  const { selectedLogin } = useSelector(state => state.login);
  useEffect(() => {
    axios.get(`/api/logins/${params.loginId}`, { headers: { authorization: localStorage.getItem('token') }})
      .then(res => {
        dispatch(getLogin(res.data));
      })
      .catch(e => console.log(e));

  }, [dispatch, params.loginId]);

  return {
    selectedLogin,
  };
};


export const useCreateLogin = () => {

  const handleSaveLogin = (formValues, dispatch) => {
    console.log(formValues);
    axios.post('/api/logins', formValues)
      .then(res => {
        console.log(res);
        dispatch(reset('saveLogin'));
      });
  };

  return {
    handleSaveLogin,
  };
};
