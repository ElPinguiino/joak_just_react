/* eslint-disable no-undef */
import axios from 'axios';
import React, { useState } from 'react';
import Select from "react-select";
import { useHistory } from 'react-router-dom';
import { ContactFormInnerContainer, ContactFormInnerWrapper, ContactFormH1, ContactFormNameArea, ContactFormFirstName, ContactFormLastName, ContactFormPhoneNumber, ContactFormEmail, ContactFormContactType, ContactFormMessage, Input, Button } from './ContactFormElements';


const Form = () => {
    const options = [
        { value: "Feedback", label: "Feedback" },
        { value: "Question", label: "Question" },
        { value: "Concern", label: "Concern" },
    ]; 

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [contactType, setContactType] = useState(null);
    const [message, setMessage] = useState("")
    // const [image, setImage] = useState(null)

    const addContactForm = () => {
        const data = {
            first_name: {firstName},
            last_name: {lastName},
            phone_number: {phoneNumber},
            email: {email},
            contact_type: {contactType},
            message: {message}
        }

        axios.post('http://127.0.0.1:8000/api/contactform/', data)
        .then(res=> {
            console.log(res.data)
        })
        .catch(err => console.error(err))
    }

    return (
        <>
            <ContactFormInnerContainer>
                <ContactFormH1>Message Us!</ContactFormH1>
                <ContactFormInnerWrapper>
                    <ContactFormNameArea>
                        <ContactFormFirstName>
                            <Input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="First Name"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} />
                        </ContactFormFirstName>
                        <ContactFormLastName>
                            <Input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)} />
                        </ContactFormLastName>
                    </ContactFormNameArea>
                    <ContactFormPhoneNumber>
                        <Input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </ContactFormPhoneNumber>
                    <ContactFormEmail>
                        <Input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            name="email"
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </ContactFormEmail>
                    <ContactFormContactType>
                        <Select
                            defaultValue={contactType}
                            onChange={setContactType}
                            options={options}
                            />
                    </ContactFormContactType>
                    <ContactFormMessage>
                        <textarea
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Give us a little more info regarding your contact."
                            name="message"
                            defaultValue={message}
                            onChange={(e) => setMessage(e.target.value)} />
                    </ContactFormMessage>
                    <Button className="btn btn-success" onClick={addContactForm}>Submit</Button>
                </ContactFormInnerWrapper>
            </ContactFormInnerContainer>
        </>
    );      
};

export default Form;