import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

const {googleLogin} = useContext(AuthContext) ;
const axiosPublic = useAxiosPublic() ;
const navigate = useNavigate() ;

const handleGoogleLogin = () => {
    googleLogin()
    .then(res => {
        console.log(res.user);
        const userInfo = {
            email: res.user.email ,
            name: res.user.displayName
        }
        axiosPublic.post("/users", userInfo)
        .then(res => {
            console.log(res);
            navigate("/") ;
        })
    })
}

    return (
        <div>
            <div className="divider"></div>

            <button 
            onClick={handleGoogleLogin} 
            className="btn btn-warning flex items-center gap-2 w-full"><FcGoogle className="text-2xl"/> Login with GOOGLE</button>
        </div>
    );
};

export default SocialLogin;