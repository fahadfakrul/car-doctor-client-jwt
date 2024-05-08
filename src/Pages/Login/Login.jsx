import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/Authproviders';
import axios from 'axios';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location);
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(() =>{
            // const loggedInUser = result.user;
            // console.log(loggedInUser);
            const user ={email};
          
            // get access token
            axios.post('https://car-doctor-server-roan-psi.vercel.app/jwt',user, {withCredentials:true})
            .then(res => {
              // console.log(res.data);
              if(res.data.success){
                navigate(location?.state ? location?.state : '/');
              }
            })
        })
        .catch(error => console.log(error))
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" lg:w-1/2 mr-16">
          
         <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm border  bg-base-100">
          <div className="card-body">
          <h1 className="text-4xl font-semibold font-bold text-[#444] text-center">Login</h1>
           <form onSubmit={handleLogin}>
           <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold ">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="email"
                className="input input-bordered "
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover font-semibold">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn bg-[#FF3811] text-white text-xl font-semibold" type="submit" value="Login" />
            </div>
           </form>
           <div className='mt-7'>
           <p className='text-[#444]  text-center'>Or Sign In With</p>
            <div className='flex justify-center gap-4 mt-7 '>
            <button className="btn btn-circle hover:bg-[#FF3811] hover:text-white"><FaFacebookF /></button>
            <button className="btn btn-circle hover:bg-[#FF3811] hover:text-white "><FaGoogle /></button>
            </div>
           </div>
           <p className='text-[#444] my-8'>New to Car Doctor? <Link className='font-blod text-[#FF3811] hover:underline' to='/signup'>Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
