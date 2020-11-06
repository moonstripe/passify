import React from 'react';
import { TextInput } from 'evergreen-ui';

export const TextInputField = ({ input, meta }) => {
  console.log(input);
  return <TextInput
    {...input}
   
    placeholder="Textarea placeholder..."
    label="Filled"
    variant="filled"
  />;
};
