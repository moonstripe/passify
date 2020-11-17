import {createSlice} from '@reduxjs/toolkit';
import Entropizer from 'entropizer';
const entropizer = new Entropizer();

const INITIAL_STATE = {
    logins: [],
    selectedLogin: null,
    strength: 0,
    isBreached: false
};

const loginSlice = createSlice({
    name: 'logins',
    initialState: INITIAL_STATE,
    reducers: {
        getLogins: (state, action) => ({
            ...state,
            logins: action.payload
        }),
        getLogin: (state, action) => ({
            ...state,
            selectedLogin: action.payload
        }),
        computeStrength: (state, action) => ({
            ...state,
            strength: Math.floor(entropizer.evaluate(action.payload.password)),
        }),
        setIsBreached: (state, action) => ({
            ...state,
            isBreached: action.payload,
        })
    },
});

export const {
    getLogins,
    getLogin,
    computeStrength,
    setIsBreached
} = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
