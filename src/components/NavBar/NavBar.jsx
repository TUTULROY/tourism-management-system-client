import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";



const NavBar = () => {

    const {user, logOut} = useContext(AuthContext);

    const [theme, setTheme] = useState('light')

    useEffect(() =>{
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    },[theme])

    const handleToggle = e =>{
        if(e.target.checked) {
            setTheme('synthwave')
        }
        else {
            setTheme('light')
        }
    }
console.log(theme);
    const navLink = <>
    
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/all-spots'>All Tourists Spot</NavLink></li>
    <li><NavLink to='/add-spots'> Add Tourists Spot</NavLink></li>
   
    <li><NavLink to='/my-lists'>My List</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navLink
        }
      </ul>
      
    </div>
    <Link to='/'  className="btn btn-ghost text-xl">
      <span className="text-green-500 font-extrabold">Tourism</span> <span className="text-orange-500 font-bold">Management</span>
      </Link> 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      {
        navLink
      }
    </ul>
    
  </div>
  <div className="navbar-end">
  <label className="cursor-pointer grid place-items-center">
  <input
  onChange={handleToggle}
  type="checkbox" 
  

   className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
    
    {
    user? <div className="dropdown dropdown-end tooltip tooltip-right" data-tip={user.displayName}>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
  <div className="w-10 rounded-full ">
    <img src={user?.photoURL || "https://i.postimg.cc/5N1C1vBJ/Tutul-roy.jpg" } />
  </div>
</label>
        <ul tabIndex={0} className="mt-3 z-[50] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
  
  <li><button className="btn btn-sm btn-ghost">
    {user?.displayName || 'user name not found'}
    </button></li>
  <li><button onClick={logOut} className="btn btn-sm btn-ghost">
    Logout
    </button>
    </li>
  
</ul>
</div>
:
<Link to='/login'>
<button className="btn btn-sm btn-ghost">
    Login
    </button>
</Link>
    }
  
         
      </div>
</div>
        </div>
    );
};

export default NavBar;