import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    const {googleLogIn, githubLogIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state || "/"
    const handleSocialLogin = socialProvider => {

        socialProvider()
        .then(result =>{
            if(result.user){
                navigate(from);
            }
        })
    }
    return (
        <div className="text-center">
            <div>
                <h2 className="text-2xl mb-3">Continue With</h2>
            </div>
            <div>
            <button onClick={() => handleSocialLogin(googleLogIn)} className="btn btn-outline btn-success mr-2">
                <FaGoogle></FaGoogle>
            </button>
            <button onClick={() => handleSocialLogin(githubLogIn)} className="btn btn-outline ml-2">
                <FaGithub></FaGithub>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;