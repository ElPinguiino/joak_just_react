/* eslint-disable no-undef */
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledContactFormContainer, StyledContactForm, StyledInput, StyledFieldSet, StyledTextArea, StyledError, StyledButton, StyledH2 , StyledLabel, StyledSuccess } from './ContactFormElements';


const Form = () => {

    const [error, setError] = useState('');

    const [success, setSuccess] = useState(false);

    const [submitted, setSubmitted] = useState(false);

    let history = useHistory();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [contactType, setContactType] = useState(null);
    const [message, setMessage] = useState("")
    // const [image, setImage] = useState(null)
    
    const addContactForm = async () => {
        let formField = new FormData()
        formField.append('firstName', firstName)
        formField.append('lastName', lastName)
        formField.append('phoneNumber', phoneNumber)
        formField.append('email', email)
        formField.append('contactTyple', contactType)
        formField.append('message', message)

        await axios({
            method: 'post',
            url:'http://localhost:8000/api/contactform/',
            data: formField
          }).then(response=>{
            console.log(response.data);
            history.push('/')
          })

        setSubmitted(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");

        // for (let key in { formField} ) {
        //     if ({formField}[key] === '') {
        //         setError(`You must provide the ${key}`)
        //     }
        // }
    }

    return (
        <>
            <StyledContactFormContainer>
            <StyledH2>Message Us!</StyledH2>
                <StyledContactForm onSubmit={handleSubmit}>
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
                    {error && (
                        <StyledError>
                            <p>Error Message</p>
                        </StyledError>
                    )}

                    {success && (
                        <StyledSuccess>
                            <p>Success</p>
                        </StyledSuccess>
                    )}
                    <StyledButton onClick={addContactForm}>Submit Contact</StyledButton>
                </StyledContactForm>
            </StyledContactFormContainer>
        </>
    );      
};

export default Form;