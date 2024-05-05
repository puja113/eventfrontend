import React, { useEffect } from 'react';
import '../../Assets/Styles/_main.scss';
import '../Login/login.css'
import Home from '../Home';
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";


export default function LoginPage() {
  const navigate = useNavigate();

  const [user, setUser] = React.useState({
    "email": "",
    "password": ""

  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  // const [loader , setLoader] = React.useState(false)



  const onLogin = async () => {
    try {
      //setLoader(true);
      toast.loading('Loading...');
      const response = await axios.post("https://web-five-dusky.vercel.app/login", user);
      toast.dismiss();

      console.log("Login successfull", response);
      const { token } = response.data;
      if (response) {
        // localStorage.setItem('isLoggedIn', 'true');
        
        localStorage.setItem('token', token);
        toast.success('Login Successfully')
      }
      console.log("dfffff")
      navigate('/home')
      // router.refresh();

    } catch (error) {
      console.log("login failed ", error.message);
      toast.error("login failed");

    }
    //   finally{
    //     setLoader(false);

    //   }
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)

    }
    else {

      setButtonDisabled(true);

    }
  }, [user])
  return (

    <div className="loginMain_container loginpage">
      <div className="login_container">
        <h1 style={{ fontWeight: "bold", marginBottom: "8px" }}>Login</h1>

        <input className="text_container p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Email"
        />

        <input className=" text_container p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Password"
        />

        <button
          onClick={onLogin}
          className="button_login">Login </button>
        <div className='link'>
          <a href="/signup" className="text-xs text-blue-600">Visit Signup page</a>
          <span>or</span>
          <a href="/" className="text-xs text-blue-600">Visit Home page</a>

        </div>

        {/* <Link href ="/signup" className="text-xs text-blue-600">Visit Signup page</Link> */}


      </div>

    </div>
  )
}