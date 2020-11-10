import React from 'react';
import {useLoginView, useFetchLogins} from '../LoginHooks';

export const LoginSingleView = () => {
    const {logins} = useFetchLogins();
    const {selectedLogin} = useLoginView();

    console.log(selectedLogin?.website);

    return (
        <div>
            <h1>{selectedLogin?.website}</h1>
            <br/>
            <p>{selectedLogin?.passwordStrength}</p>
            <p>{selectedLogin?.username}</p>
        </div>

    );
};
