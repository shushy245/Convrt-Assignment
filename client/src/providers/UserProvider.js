import React, { useState, createContext, useContext } from 'react';
import { put } from '../axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userID, setUserID] = useState();
    const [credits, setCredits] = useState();

    const decrementCredit = async () => {
        const { data } = await put(`/user/decrement-credit/${userID}`);
        setCredits(data.credits);
    }

    const resetUser = () => {
        setUserID();
        setCredits();
    }

    return (
        <UserContext.Provider value={{
            userID, setUserID,
            credits, setCredits,
            decrementCredit, resetUser
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);