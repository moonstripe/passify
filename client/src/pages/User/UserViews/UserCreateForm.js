import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextInputField } from '../../common/components/TextInputField.js';
import { useCreateUser } from '../UserHooks';

export const UserCreateForm = reduxForm({ form: 'userCreateForm' })((props) => {
  const { handleSubmit } = props;
  const { handleSaveUser } = useCreateUser();
  return (
    <form onSubmit={handleSubmit(handleSaveUser)}>
      <Field
        name='username'
        component={TextInputField}
      />
      <Field
        name='password'
        component={TextInputField}
      />
      <Field
        name='anotherState'
        component={TextInputField}
      />
      <button type='submit'>Create User</button>
    </form>
  );
});

