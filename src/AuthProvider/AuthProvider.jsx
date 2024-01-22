import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../Utility/Firebase';
import UseAxiosPublic from '../Hooks/UseAxiosPublic';




export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const axiosPublic = UseAxiosPublic()
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            if (currentUser || user) {
                axiosPublic.post('/jwt', { email: currentUser?.email, name: currentUser?.displayName })
                    .then(res => {
                        localStorage.setItem("token",res.data.token)
                    })
            } else {
                localStorage.removeItem('token')
            }

            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])


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