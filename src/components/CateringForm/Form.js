/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Form = () => {

    let history = useHistory();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [packageType, setPackageType] = useState("")
    const [peopleAttending, setPeopleAttending] = useState("")
    const [budget, setBudget] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [additionalHours, setAdditionalHours] = useState("")
    const [location, setLocation] = useState("")
    const [message, setMessage] = useState("")
    const [paymentType, setPaymentType] = useState("")

    const AddCateringForm = async () => {
        let formField = new FormData()

        formField.append('firstName', first_name)
        formField.append('lastName', last_name)
        formField.append('phoneNumber', phone_number)
        formField.append('email', email)
        formField.append('packageType', package_type)
        formField.append('peopleAttending', people_attending)
        formField.append('budget', budget)
        formField.append('eventDate', event_date)
        formField.append('additionalHours', additional_hours)
        formField.append('location', location)
        formField.append('message', message)
        formField.append('paymentType', payment_type)

        await axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/cateringform/',
            data: formField
        }).then((response) => {
            console.log(response.data);
            history.push('/')
        })
    }


    return (
        <div>
            <h1>Catering Form</h1>

            <div className="container">

                <div className="form-group">
                        
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="First Name"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Last Name"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} />
                    </div>        
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            deafultValue={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div className="form-group">     
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>The Lieutant</label>   
                        <input
                            type="radio"
                            className="form-control form-control-lg"
                            name="packageType"
                            value={packageType}
                            onchange={(e) => setPackageType(e.target.value)} />
                        <label>The Captain</label>
                        <input
                            type="radio"
                            className="form-control form-control-lg"
                            name="packageType"
                            value={packageType}
                            onChange={(e) => setPackageType(e.target.value)} />
                        <label>The Sargeant</label>
                        <input
                            type="radio"
                            className="form-control form-control-lg"
                            name="packageType"
                            value={packageType}
                            onChange={(e) => setPackageType(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="# of people attending"
                            name="peopleAttending"
                            value={peopleAttending}
                            onChange={(e) => setPeopleAttending(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Planned budget for the food"
                            name="budget"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Planned budget for the food"
                            name="eventDate"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)} />
                    </div>
                    <div>
                        <label>1</label>
                        <input
                            type="radio"
                            className="form-control form-control-lg"
                            name="additionalHours"
                            value={additionalHours}
                            onChange={(e) => setAdditionalHours(e.target.value)} />
                        <label>2</label>
                        <input
                            type="radio"
                            className="form-control form-control-lg"
                            name="additionalHours"
                            value={additionalHours}
                            onChange={(e) => setAdditionalHours(e.target.value)} />
                        <label>3</label>
                        <input
                            type="radio"
                            className="form-control form-control-lg"
                            name="additionalHours"
                            value={additionalHours}
                            onChange={(e) => setAdditionalHours(e.target.value)} />
                        <label>4</label>
                        <input
                            type="radio"
                            className="form-control form-control-lg"
                            name="additionalHours"
                            value={additionalHours}
                            onChange={(e) => setAdditionalHours(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="location"
                            name="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <textarea
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Give us a little more info regarding your contact..."
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Cash</label>   
                        <input
                            type="radio"
                            className="form-control form-control-lg"
                            name="paymentType"
                            value={paymentType}
                            onchange={(e) => setPaymentType(e.target.value)} />
                        <label>Venmo</label>   
                        <input
                            type="radio"
                            className="form-control form-control-lg"
                            name="paymentType"
                            value={paymentType}
                            onchange={(e) => setPaymentType(e.target.value)} />
                        <label>Card</label>   
                        <input
                            type="radio"
                            className="form-control form-control-lg"
                            name="paymentType"
                            value={paymentType}
                            onchange={(e) => setPaymentType(e.target.value)} />
                    </div>
                    <button className="btn btn-success" onClick={AddCateringForm}>Submit</button>
                </div>
            </div>
        </div>
    );        
};

export default Form;