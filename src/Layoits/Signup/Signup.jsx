
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const Signup = () => {

    const axiosPublic = useAxiosPublic() ;
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.pass)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {

                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                    axiosPublic.post("/users", userInfo)
                    .then(res => {
if(res.data.insertedId){
    console.log(res.data);
    Swal.fire({
        title: "welcome",
        text: "New user account has been created",
        icon: "success"
    });
    reset();
    navigate('/')
}
                    })

                       
                    })
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" required />
                            {errors.name && <span>Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} placeholder="Photo URL" className="input input-bordered" required />
                            {errors.photo && <span>Photo is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                            {errors.email && <span>Email is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" {...register("pass", {
                                required: true,
                                minLength: 8,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/
                            })} placeholder="password" className="input input-bordered" required />
                            {errors.pass?.type === "required" && <span className="text-red-600">Password is required</span>}
                            {errors.pass?.type === "minLength" && <span className="text-red-600">Password must be at least 8 characters</span>}
                            {errors.pass?.type === "maxLength" && <span className="text-red-600">Password must be smaller than 20 characters</span>}
                            {errors.pass?.type === "pattern" && <span className="text-red-600">Password must have 1 uppercase, 1 lowercase, 1 special character and 1 digit</span>}

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Sign up</button>
                        </div>
                        <p className='font-semibold'>Already have an account ? <Link to='/login' className='text-warning'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;