import React, { useEffect, useState } from 'react';
import '../../Assets/Styles/_main.scss';
import '../Signup/Signup.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Signup() {
    // const router = useRouter();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        "email": "",
        "phone_no": "",
        "password": "",
        "username": ""
    })
    const [buttonDisabled, setButtonDisabled] = useState(false);

    // const [loader,setLoader] = React.useState(false);
    const onSignup = async () => {


        try {
            //setLoader(true);
            toast.loading('Loading...');

            const response = await axios.post("https://web-five-dusky.vercel.app/register", user);

            toast.dismiss();

            console.log("Signup success", response);
            if (response) {
                toast.success('SignUp Successfully');
            }

            // Dismiss the loading toast after success
            navigate('/')



        } catch (error) {
            console.log("Signup failed", error.message);
            // toast.dismiss();
            toast.error("Already register or something went wrong");

        }
        // finally{
        //    // setLoader(false)
        // }


    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0 && user.phone_no.length > 0) {
            setButtonDisabled(false);

        }
        else {
            setButtonDisabled(true);
        }
    }, [user])

    console.log(user)
    return (

        <div className="signupMain_container loginpage">
            <div className="login_container">
                <h1 style={{ fontWeight: "bold", marginBottom: "8px" }}>SignUp</h1>

                {/* <label htmlFor="username">Username</label> */}
                <input className="text_container  p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                    id="username"
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder="Username"
                />
                <br/>

                {/* <label htmlFor="password">Password</label> */}
                <input className="text_container  p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                    id="password"
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder="Password"
                />
                <br/>

                {/* <label htmlFor="phone_no">Phone No</label> */}
                <input className="text_container  p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                    id="phone_no"
                    type="text"
                    value={user.phone_no}
                    onChange={(e) => setUser({ ...user, phone_no: e.target.value })}
                    placeholder="Phone_no"
                />
                <br/>
                {/* <label htmlFor="email">Email</label> */}
                <input className="text_container p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600"
                    id="email"
                    type="text"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    placeholder="Email"
                />
<br/>
                <button
                    onClick={onSignup}
                    className="button_login">{buttonDisabled ? "Signup" : "SignUp"}</button>

                {/* <Link href ="/login" className="text-xs text-blue-600">Already a user? Visit Login page</Link> */}

                <div className='signuplink'>
                <a href="/login" className="text-xs text-blue-600 signup_text">Visit Login page</a>
                         <span>or</span>
                <a href="/" className="text-xs text-blue-600 signup_text">Visit Home page</a>

                </div>
                
            </div>
        </div>
    )

}