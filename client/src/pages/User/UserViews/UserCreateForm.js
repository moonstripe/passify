import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextAreaInput } from '../../common';
import { useCreateUser } from '../UserHooks';

export const UserCreateForm = reduxForm({ form: 'userCreateForm' })((props) => {
  const { handleSubmit } = props;
  const { handleSaveUser } = useCreateUser();
  return (
    <form onSubmit={handleSubmit(handleSaveUser)}>
      <Field
        name='username'
        component={TextAreaInput}
      />
      <Field
        name='password'
        component={TextAreaInput}
      />
      <Field
        name='anotherState'
        component={TextAreaInput}
      />
      <button type='submit'>Create User</button>
    </form>
  );
});

