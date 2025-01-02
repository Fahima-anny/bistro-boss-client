/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {

const {user, loading} = useContext(AuthContext) ;
const location = useLocation() ;

if(loading){
    return <div className="min-h-[90vh] flex justify-center items-center"><progress className="progress w-56"></progress></div>
}

if(user){
    return children ;
}

    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoutes;