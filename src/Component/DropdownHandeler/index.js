import React, { Component } from 'react';

import '../../Assets/Styles/_main.scss';
import '../Home/home.css'
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css';
import Marquee from "react-marquee-slider";
import times from "lodash/times";
import { Navigate } from "react-router-dom";
import 'animate.css';
import CreateEvents from '../CreateEvent';
import { FaAngleDown } from "react-icons/fa";
import { CiBrightnessDown } from "react-icons/ci";
import { RiLogoutCircleLine } from "react-icons/ri";


const options = [
    { key: '2', value: 'Service', label: 'Service' },
    { key: '3', value: 'About', label: 'About' },
    { key: '4', value: 'CreateEvent', label: 'CreateEvent' },
    // Add more options as needed
];

class DropdownHandeler extends Component {

    constructor(props) {

        super(props)
        this.state = {
            openDropdown: false,
            redirection: false,

        };
    }

    componentDidMount() {

    }


    redirectGetDemo = async () => {
        console.log("Clicked on get started")
        await this.setState({
            redirection: true
        })
        if (this.state.redirection) {
            console.log("inside iff")
            window.location.href = '/getDemo'
        }
    }
    handeldropdown = async () => {
        await this.setState({
            openDropdown: !this.state.openDropdown
        })

    }
    handleLogout=async()=>{
        window.location.href='/'
        localStorage.clear()

    }
    CreateEvents = async()=>{
        window.location.href='/createevent'
    }

    redirectToDropDown = async (e) => {

        if (e.target.value === 'CreateEvent') {

            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            if (isLoggedIn) {
                window.location.href = '/createevent'
            }
            else {
                toast.error('You are not logged in. Please log in to create an event.', {

                    autoClose: 3000, // Close the toast after 3 seconds
                });
            }
        }
        else {
            window.location.href = '/' + e.target.value.toLowerCase()
        }


        console.log("e.target.value", e.target.value)

    }

    render() {
        const { redirection } = this.state

        return (
            <div className='custom_dropdown'>
                <FaAngleDown className={this.state.openDropdown &&'autoRotate'} onClick={this.handeldropdown} />
                {this.state.openDropdown &&
                    <ul>
                        <li onClick={this.CreateEvents}> <CiBrightnessDown  /> <span  className='ms-2'>Create Event</span></li>
                        <li onClick={this.handleLogout}><RiLogoutCircleLine  /><span className='ms-2'>Logout</span></li>
                    </ul>
                }





                <ToastContainer />
            </div>
        )
    }



}

export default DropdownHandeler;