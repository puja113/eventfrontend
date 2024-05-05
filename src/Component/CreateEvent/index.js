import React, { Component } from 'react';
import '../../Assets/Styles/_main.scss';
import '../../Assets/Styles/_header.scss';
import '../../Assets/Styles/_dropdown.scss'
import '../Home/home.css'

import DropdownHandeler from '../DropdownHandeler';
import 'animate.css';
import { Navigate } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import '../CreateEvent/createEvent.css'
import Headers from '../shared/Header';


const options = [
    { key: '1', text: 'Wedding Events...', value: 'wedding ' },
    { key: '2', text: 'BirthDay Parties...', value: 'birthDay' },
    { key: '3', text: 'Corporate Events...', value: 'Corporate' },
    { key: '4', text: 'Anniversary Parties...', value: 'anniversary' },
    { key: '5', text: 'Music Concert...', value: 'musicConcert'}
]


class CreateEvents extends Component{


    constructor(props){
        super(props);

        this.state=  {
            formSubmit: false,
            objError: { eventName: { err: false, value: '' }, name: { err: false, value: '' }, email: { err: false, value: '' }, phone: { err: false, value: '' }, eventType: { err: false, value: [] } ,guest: {err: false , value: '' }, dateTime :{err: false , value: ''}, food :{err:false , value:''} , extraService :{err: false , value:''}  },
            cancelBtn: false
        };
    }


    componentDidMount(){
        console.log(this.state.objError)
    }

    ImportAllImages(r) {
        let images = {};
        r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    onFormChange(e) {
        
        let obj = this.state.objError
        console.log("obj",obj)

        obj[e.target.name].value = e.target.value
        obj[e.target.name].err = e.target.value !== '' ? false : true
        this.setState({
            objError: obj
        })
    }
    onHandleDropdown(e, { value }) {
        console.log(value)
        let obj = this.state.objError
        if (value.length) {
            obj.eventType.value = value
            obj.eventType.err = value.length? false : true
        }else{
            obj.eventType.err = value.length? false : true
        }
    }
    handelBackButton = async () => {
        await this.setState({
            redirection:true
        })

        if(this.state.redirection){
            window.location.href = '/'
        }
    }
    onFormSubmit() {
        let obj = this.state.objError
        if (obj.name.value && obj.email.value && obj.phone.value && obj.eventType.value.length && obj.dateTime.value &&obj.extraService.value && obj.food.value && obj.guest.value ) {
            fetch(`https://web-five-dusky.vercel.app/createEvent1`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify({
                    "eventName":obj.eventName.value,
                    "name": obj.name.value,
                    "email": obj.email.value,
                    "phone": obj.phone.value,
                    "eventType": obj.eventType.value,
                    "guest": obj.guest.value,
                    "dateTime": obj.dateTime.value,
                    "food":obj.food.value,
                    "extraService": obj.extraService.value

                })
            });
            obj.eventName.err = false
            obj.name.err = false
            obj.email.err = false
            obj.phone.err = false
            obj.eventType.err = false
            obj.guest.err= false
            obj.dateTime.err = false
            obj.food.err= false
            obj.extraService.err =false
            this.setState({ formSubmit: true })
            
        } else if (obj.eventName.value === '') {
            obj.eventName.err = true
        } 
        else if (obj.name.value === '') {
            obj.name.err = true
        } else if (obj.email.value === '') {
            obj.email.err = true
        } else if (obj.phone.value === '') {
            obj.phone.err = true
        } else if (!obj.eventType.value.length) {
            obj.eventType.err = true
        }else if (obj.food.err === '') {
            obj.phone.err = true
        }else if (obj.dateTime.err === '') {
            obj.phone.err = true
        }else if (obj.guest.err === '') {
            obj.phone.err = true
        }
        else if (obj.extraService.err === '') {
            obj.phone.err = true
        }
        this.setState({ objError: obj })
    }
    handelCancelBtn() {
        this.setState({ cancelBtn: true })
    }




    render(){
        const { formSubmit, objError, cancelBtn } = this.state
        const borderStyle = {
            border: '1px solid red',
        };

        
        return (
            <div className='main_container'>
                { <div className='section_demo_wrap'>
                   <Headers isLoggedIn={this.props.isLoggedIn}/>
                {!formSubmit ?
                        <div className='middle_section'>
                            <div className='form_heading'>
                                <h2 className='animate__animated animate__pulse'>Create Your Events</h2>
                                <p className='animate__animated animate__pulse'>Please fill your details to create your Events </p>
                            </div>
                            <div className='form_wrap'>
                                <div className='input_wrap'>
                                    <label>Event Name</label>
                                    <input type='text' name='eventName' onChange={(e) => this.onFormChange(e)} placeholder='Enter...' style={objError.eventName.err ? borderStyle : null} />
                                </div>
                                <div className='input_wrap'>
                                    <label>Full Name</label>
                                    <input type='text' name='name' onChange={(e) => this.onFormChange(e)} placeholder='Enter...' style={objError.name.err ? borderStyle : null} />
                                </div>
                                <div className='input_wrap'>
                                    <label>Email</label>
                                    <input type='email' name='email' placeholder='example@gmail.com' onChange={(e) => this.onFormChange(e)} style={objError.email.err ? borderStyle : null} />
                                </div>
                                <div className='input_wrap'>
                                    <label>Phone No.</label>
                                    <input type='text' name='phone' placeholder='+91 9833774XXX' onChange={(e) => this.onFormChange(e)} style={objError.phone.err ? borderStyle : null} />
                                </div>
                                <div className='input_wrap'>
                                    <label>Start Date & Time</label>
                                    <input type="datetime-local" name='dateTime' onChange={(e) => this.onFormChange(e)} placeholder='dd-mm-yyyy --:--' style={objError.dateTime.err ? borderStyle : null} />
                                </div>
                                <div className='input_wrap'>
                                    <label>Food Preference .</label>
                                    <input type='text' name='food' placeholder='Enter...' onChange={(e) => this.onFormChange(e)} style={objError.food.err ? borderStyle : null} />
                                </div>
                                <div className='input_wrap'>
                                    <label>Number Of Guests</label>
                                    <input type='number' name='guest' placeholder='Enter...' onChange={(e) => this.onFormChange(e)} style={objError.guest.err ? borderStyle : null} />
                                </div>

                               
                                <div className='input_wrap'>
                                    <label>Event Type </label>
                                    <Dropdown name="eventType" placeholder='Select' fluid  selection options={options} onChange={(e, { value }) => this.onHandleDropdown(e, { value })} style={objError.eventType.err ? borderStyle : null}/>
                                </div>  

                                <div className='input_wrap'>
                                    <label>Anything You Want To Add?</label>
                                    <input type='text' name='extraService' placeholder='Enter...' onChange={(e) => this.onFormChange(e)} style={objError.extraService.err ? borderStyle : null} />
                                </div>
                                {cancelBtn && <Navigate from='/getDemo' to='/' />}
                                <div className='btn_wrap'>
                                    <button onClick={() => this.handelCancelBtn()}>Cancel</button>
                                    <button onClick={() => this.onFormSubmit()}>Submit</button>
                                    
                                </div>
                                
                            </div>
                        </div> :
                        <div className='thankyou_wrap'>
                            <h2 className='animate__animated animate__pulse'>Thank You!</h2>
                            <p className='animate__animated animate__pulse'>Our team will contact you soon </p>
                        </div>
                    }
                </div>
                        }
                
            </div>
        )
    }


}
export default  CreateEvents;