import React from 'react';
import {useLoginView} from '../LoginHooks';

export const LoginSingleView = () => {
  const { selectedLogin } = useLoginView();

  return <h1>selectedLogin</h1>;
};
