import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Social/SocialLogin/SocialLogin';

const Login = () => {

const [disabled, setDisabled] = useState(true) ;
const {loginUser} = useContext(AuthContext) ;
const location = useLocation() ;
const from = location?.state || "/" ;
const navigate = useNavigate() ;

    useEffect(() => {
        loadCaptchaEnginge(6); 
    } , [])

const handleLogin = e => {
    e.preventDefault() ;
    const form = e.target ;
    const email = form.email.value ;
    const pass = form.pass.value ;
    console.log(email, pass);

    loginUser(email,pass)
    .then(res => {
      const user = res.user ;
      console.log(user);
      Swal.fire({
        title: "Login Successfull",
        text: "Welcome to Bistro Boss",
        icon: "success"
      });
      navigate(from, {replace: true})
    })
}

const handleValidateCaptcha = (e) => {
const user_captcha_value = e.target.value ;
console.log(user_captcha_value);

if(validateCaptcha(user_captcha_value)){
setDisabled(false)
}
else{
setDisabled(true)
}
}

    return (
        <div className="hero bg-base-200 min-h-screen">
          <Helmet>
                      <title>Bistro Boss | Login</title>
                    </Helmet>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="pass" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
              <input type="text" onBlur={handleValidateCaptcha} name="captcha" placeholder="type the captcha code" className="input input-bordered col-span-2" required />
              {/* <button onClick= className='btn btn-warning btn-outline'>Validate</button> */}
              </div>
              <div className="form-control mt-6">
               <input disabled={disabled} type="submit" className="btn btn-warning" value="Login" />
              </div>
              <p className='font-semibold'>New here ? <Link to='/signup' className='text-warning'>Create a new Account.</Link></p>
           <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;