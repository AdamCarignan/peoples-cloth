import { createContext, useEffect, useReducer } from "react";
import { onAuthStateChangeListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null
});

export const USER_ACTION_TYPES = {
    "SET_CURRENT_USER": "SET_CURRENT_USER"
}

export const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state, action) => {
    const { type, payload } = action;
    switch (type ) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default: 
            throw new Error(`Invalid type: ${type}`);
    }
}

export const UserProvider = ({ children }) => {
    const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    }

    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener((user) => {
            if (user) createUserDocumentFromAuth(user);
            setCurrentUser(user);
        });
        return () => unsubscribe();
    }, []);
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
};
