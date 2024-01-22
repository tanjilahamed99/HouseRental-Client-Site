import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (!user) {
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    else {
        return children
    }
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;