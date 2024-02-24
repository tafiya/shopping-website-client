import { useContext } from 'react';

import lock from '../../assets/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    
    const {signIn}=useContext(AuthContext);
    const navigate =useNavigate();
    const location =useLocation();
    const from =location.state?.from?.pathname || "/";
 
    const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
       
        signIn(email,password)
        .then(result=>{
            const user =result.user;
            Swal.fire("login successfully done!");
          console.log(user);
          navigate(from,{replace: true});
        })
    }
    return (
        <>
         {/* <Helmet>
            <title>ChatNook |login</title>
            </Helmet> */}
          <div className="hero min-h-screen ">
        <div className="hero-content gap-24 flex-col md:flex-row">
          <div className="text-center lg:text-left w-1/2">
            
          <img src={lock} className=" w-96 " alt="" />
          </div>
          <div className="card w-1/2 max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
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
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              {/* <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input onBlur={handleValidCaptcha} type="text" placeholder="type the text above" name="captcha" className="input input-bordered" required />
                
              
              </div> */}
              <div className="form-control mt-6">
                <input  type="submit"  className="btn btn-primary" value="Login" />
                {/* disabled={disable} */}
              </div>
            </form>
            <p className=' p-4 text-base'><small>New here? <Link to='/signup'><span className=' text-lg text-green-700'>Create an Account</span></Link></small></p>
            {/* <SocialLogin></SocialLogin> */}
          
          </div>
         
        </div>
      </div></>
      
    );
};

export default Login;