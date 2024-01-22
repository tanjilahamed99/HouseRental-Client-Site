import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../Utility/Firebase';




export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }



    const authValue = {
        user,
        loading,
        createUser,
        loginUser
    }

    return (
        <AuthContext.Provider value={authValue}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.node
};