import React, { Component } from 'react';

import '../../../Assets/Styles/_main.scss';
import '../../Home/home.css'
import '../../../Assets/Styles/_header.scss';

import Marquee from "react-marquee-slider";
import times from "lodash/times";
import { NavLink, Navigate } from "react-router-dom";
import 'animate.css';
import DropdownHandeler from '../../DropdownHandeler';


class Headers extends Component {



    constructor(props) {

        super(props)
        this.state = {
            events: [],
            redirection: false,
            myNavigations: [{ name: "Home",  path: "/Home" }, { name: "Service", path: "/Service" }, { name: "About", path: "/About" }],
            activePath: localStorage.getItem("myPath") !== null ? localStorage.getItem("myPath")  : "/Home"
        };
    } 

    componentDidMount() {

    }

   handelPath = (element) => {
      
        this.setState({
            activePath: element.path
        });
        localStorage.setItem("myPath",element.path)
        //window.location.href = element.path
    }

    redirectLogin = async () => {
        console.log("Clicked on login")
        await this.setState({
            redirection: true
        })
        if (this.state.redirection) {
            window.location.href = '/login'
        }

    }

    redirectSignup = async () => {
        console.log("Clicked on login")
        await this.setState({
            redirection: true
        })
        if (this.state.redirection) {
            window.location.href = '/signup'
        }

    }
    // redirectToDropDown = async (e) => {

    //     window.location.href = '/' + e.target.value.toLowerCase()
    //     console.log("e.target.value" ,e.target.value)

    // }
    ImportAllImages(r) {
        let images = {};
        r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    }


    render() {
        const images = this.ImportAllImages(require.context('../../../Assets/Images', false, /\.(png|jpe?g|svg)$/));
        const { events, redirection } = this.state
        const isLoggedIn = localStorage.getItem('token')?.length > 0 ? true : false;

        console.log("this.state.activePath",this.state.activePath)

        return (
            <div className='main_container'>
                
                <div className='header_section'>
                    <div className='header_wrap'>
                        <div className='logo'>
                            <img style={{maxWidth:"150px"}} src={images['Spotlight-02-01.svg']} alt='no-img' />
                            {this.state.myNavigations.map((ele, ind) => {
                                return (
                                    <NavLink to={ele.path} className={this.state.activePath === ele.path ? "activeTab navlink_div" : "navlink_div"}>
                                    <h5 key={ind} onClick={() => { this.handelPath(ele) }}  >{ele.name}</h5>
                                    </NavLink>
                                )
                            })}

                        </div>
                        <div className='get_hire w-50'>
                            {isLoggedIn ?
                                <div className='d-flex w-50'>
                                    <DropdownHandeler/>
                                </div> :
                                <div className='d-flex w-50 justify-content-end'>

                                    <button onClick={this.redirectLogin}>Login
                                    </button>
                                    <button className='ms-2' onClick={this.redirectSignup}>Signup</button>

                                </div>}
                        </div>
                    </div>
                    </div>
                    </div>
                   
                    
               
        )
    }

}

export default Headers;