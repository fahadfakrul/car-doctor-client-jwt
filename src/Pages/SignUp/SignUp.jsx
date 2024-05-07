import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/Authproviders';
const SignUp = () => {
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form =  event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
       console.log(name, email, password);

       createUser(email, password)
       .then(result => {
        const user =result.user;
        console.log(user);
       })
       .catch(error => console.log(error));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" lg:w-1/2 mr-16">
            
           <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm border  bg-base-100">
            <div className="card-body">
            <h1 className="text-4xl font-semibold font-bold text-[#444] text-center">Sign Up</h1>
             <form onSubmit={handleSignUp}>
             <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold ">Email</span>
                </label>
                <input
                  type="text"
                  name='name'
                  placeholder="name"
                  className="input input-bordered "
                  required
                />
              </div>
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
                  <span className="label-text font-semibold">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control mt-6">
                <input className="btn bg-[#FF3811] text-white text-xl font-semibold" type="submit" value="Sign Up" />
              </div>
             </form>
             <div className='mt-7'>
             <p className='text-[#444]  text-center'>Or Sign Up With</p>
              <div className='flex justify-center gap-4 mt-7 '>
              <button className="btn btn-circle hover:bg-[#FF3811] hover:text-white"><FaFacebookF /></button>
            
              <button className="btn btn-circle hover:bg-[#FF3811] hover:text-white "><FaGoogle /></button>
              </div>
             </div>
             <p className='text-[#444] my-8'>Already have an account? <Link className='font-blod text-[#FF3811] hover:underline' to='/login'>Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;