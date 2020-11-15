import React from 'react';
import { useSelector } from 'react-redux';
import {useLoginView, useFetchLogins, useBreachPull } from '../LoginHooks';

export const LoginSingleView = () => {
    const {logins} = useFetchLogins();
    const {selectedLogin} = useLoginView();
    const { isBreached } = useBreachPull();
    console.log('IS BREACHED?????', isBreached);



    console.log('breached', isBreached);

    return (
        <div>
            <h1>{selectedLogin?.website}</h1>
            <br/>
            <p>{selectedLogin?.passwordStrength}</p>
            <p>{selectedLogin?.username}</p>
            {isBreached
              ? <p>Your credentials for this site have been discovered in a breach. Please change them as soon as possible!</p>
              : <p>You were implicated in no known breaches for this site.</p>
            }

        </div>

    );
};
