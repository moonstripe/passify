import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { computeStrength } from '../../Login/LoginReducer';

export const TextFieldInput = ({ input, meta }) => {
  // console.log(input);
  return <TextField
    {...input}
    label={input.name}
    variant="filled"
  />;
};

export const PassInput = ({ input, meta }) => {
  // console.log(input);

    const dispatch = useDispatch();
  //  create local State
    const [ password, setPassword ] = useState('');
    useEffect(()=>{
        // put in logic for passwordStrength here
        dispatch(computeStrength({password}));
        console.log(password.length);
    },[password]);
    const changeHandler = (e) => {
        setPassword(e.target.value);

    }
  return <TextField
      {...input}
      value={password}
      label='confirm'
      onChange={ changeHandler}
      // label={label}
      variant="filled"
  />;
};
