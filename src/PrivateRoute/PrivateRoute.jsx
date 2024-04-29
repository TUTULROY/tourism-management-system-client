import { useContext } from "react";

import {Navigate , useLocation} from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <h2 className="text-4xl">
            <span className="loading loading-infinity loading-lg"></span>
        </h2>;
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
PrivateRoute.propTypes ={
    children: PropTypes.node
}