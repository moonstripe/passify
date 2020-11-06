import React from 'react';
import TextArea from 'evergreen-ui';

export const TextAreaInput = ({ input, meta }) => {
  console.log(input);
  return <Textarea
    {...input}
    label="Filled"
    variant="filled"
  />;
};
