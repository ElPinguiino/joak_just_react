/* eslint-disable no-undef */
import axios from 'axios';
import React, { useState } from 'react';
import Select from "react-select";
import { useHistory } from 'react-router-dom';
import { ContactFormInnerContainer, ContactFormInnerWrapper, ContactFormH1, ContactFormNameArea, ContactFormFirstName, ContactFormLastName, ContactFormPhoneNumber, ContactFormEmail, ContactFormContactType, ContactFormMessage, Input, Button, StyledLabel } from './ContactFormElements';
import { StyledContactFormContainer, StyledContactForm, StyledInput, StyledFieldSet, StyledTextArea, StyledError, StyledButton, StyledH2 } from './ContactFormElements';


const Form = () => {
    const options = [
        { value: "Feedback", label: "Feedback" },
        { value: "Question", label: "Question" },
        { value: "Concern", label: "Concern" },
    ]; 

    const [error, setError] = useState('');

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
            <StyledContactFormContainer>
            <StyledH2>Message Us!</StyledH2>
                <StyledContactForm>
                    <label htmlFor="firstName"></label>
                    <StyledInput 
                        type="text" 
                        name="firstName" 
                        placeholder="First Name" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                    <label htmlFor="lastName"></label>
                    <StyledInput type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <br />
                    <label htmlFor="phoneNumber"></label>
                    <StyledInput type="text" name="phoneNumber" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    <label htmlFor="email"></label>
                    <StyledInput type="email" name="email" placeholder="Email" defaultValue={email} onChange={(e) => setEmail(e.target.value)}/>
                    <StyledFieldSet>
                        <legend>Contact Type</legend>
                        <label>
                            <input type="radio" value="Question" name="contactType" onChange={(e) => setContactType(e.target.value)} />
                            Question
                        </label>
                        <label>
                            <input type="radio" value="Concern" name="contactType" onChange={(e) => setContactType(e.target.value)} />
                            Concern
                        </label>
                        <label>
                            <input type="radio" value="Feedback" name="contactType" onChange={(e) => setContactType(e.target.value)} />
                            Feedback
                        </label>
                    </StyledFieldSet>
                    <StyledLabel htmlFor="message">Message:</StyledLabel>
                    <br />
                    <StyledTextArea name="message" placeholder="Give us a little more info about your contact in order to better assist you!" defaultValue={message} onChange={(e) => setMessage(e.target.value)}/>
                    <br />
                    <StyledError><p>Error Message</p></StyledError>
                    <StyledButton onClick={addContactForm}>Submit Contact</StyledButton>
                </StyledContactForm>
            </StyledContactFormContainer>
        </>
    );      
};

export default Form;