import React, { createContext } from 'react';
import app from '../Firebase/Firebase.init';
import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth"


const auth = getAuth(app)

const facebookProvider = new FacebookAuthProvider()


export const UserContext = createContext()

const UserProvider = ({ children }) => {
    const user = { name: "Naimur Rahman" }

    const signInWithFaceBook = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const authInfo = { user, signInWithFaceBook }
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;