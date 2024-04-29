import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();
      const location = useLocation();
  
      const from = location?.state || "/"

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password')
        console.log(email, password);


        signIn(email, password)
        .then(result =>{
            if(result.user){
                Swal.fire({
                    title: 'Login successfully!',
                    text: 'Login successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                navigate(from);
            }
        })
        .catch(error =>{
            console.error(error);
            Swal.fire({
                title: 'Error login!',
                text: 'Incorrect Email & Password',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
        })
        }
    return (
        <div>
            <h2 className="text-center text-xl">Please Login</h2>
            <form onSubmit={handleLogin}  className="card-body md:w-3/4 lg:w-1/2 mx-auto">
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
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <SocialLogin></SocialLogin>
      <p className="text-center mb-1">Already Have Account <Link className="text-blue-500 font-bold" to="/register">Register</Link></p>
        </div>
    );
};

export default Login;