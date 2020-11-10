import React from 'react';
import TextField from '@material-ui/core/TextField';

export const TextFieldInput = ({ input, meta }) => {
  // console.log(input);
  return <TextField
    {...input}
      // label={label}
    variant="filled"
  />;
};

export const PassInput = ({ input, meta }) => {
  // console.log(input);
  return <TextField
      {...input}
      onChange={ (e, v) => {
       console.log(e.target.value);
       const currentVal = e.target.value;
       input.onChange(currentVal)
      }}
      // label={label}
      variant="filled"
  />;
};
