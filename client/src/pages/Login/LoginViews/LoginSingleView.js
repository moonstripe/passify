import React from 'react';
import {useLoginView, useFetchLogins, useBreachPull } from '../LoginHooks';

export const LoginSingleView = () => {
    const {logins} = useFetchLogins();
    const {selectedLogin} = useLoginView();
    const { isBreached } = useBreachPull();



    console.log('breached', isBreached);

    return (
        <div>
            <h1>{selectedLogin?.website}</h1>
            <br/>
            <p>{selectedLogin?.passwordStrength}</p>
            <p>{selectedLogin?.username}</p>
        </div>

    );
};
