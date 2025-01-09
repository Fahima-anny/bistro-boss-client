/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../Providers/useAuth";


const AdminRoutes = ({children}) => {

const {user, loading} = useAuth() ;
const [isAdmin, isAdminLoading] = useAdmin() ;

const location = useLocation() ;

if(loading || isAdminLoading){
    return <div className="min-h-[90vh] flex justify-center items-center"><progress className="progress w-56"></progress></div>
}

if(user && isAdmin){
    return children ;
}

    return <Navigate to="/" state={location.pathname} replace></Navigate>
};

export default AdminRoutes;