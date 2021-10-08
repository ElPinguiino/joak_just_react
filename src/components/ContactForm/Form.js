/* eslint-disable no-undef */
import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledContactFormContainer, StyledContactForm, StyledInput, StyledFieldSet, StyledTextArea, StyledError, StyledButton, StyledH2 , StyledLabel } from './ContactFormElements';
import validate from './validateInfo';
import useForm from './useForm';


const Form = ({ submitForm }) => {

    let history = useHistory();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [contactType, setContactType] = useState(null);
    const [message, setMessage] = useState("")
    
    const addContactForm = async () => {
        let formField = new FormData()
        formField.append('firstName', firstName)
        formField.append('lastName', lastName)
        formField.append('phoneNumber', phoneNumber)
        formField.append('email', email)
        formField.append('contactType', contactType)
        formField.append('message', message)

        await axios({
            method: 'post',
            url:'http://localhost:8000/api/contactform/',
            data: formField
          }).then(response=>{
            console.log(response.data);
            history.push('/')
          })

    };

    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

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
                        defaultValue={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        
                    />
                    {errors.firstName && <p>{errors.firstName}</p>}
                    <label htmlFor="lastName"></label>
                    <StyledInput 
                        type="text" 
                        name="lastName" 
                        placeholder="Last Name" 
                        defaultValue={lastName} 
                        onChange={(e) => setLastName(e.target.value)}

                    />
                    {errors.lastName && <p>{errors.lastName}</p>}
                    <br />
                    <label htmlFor="phoneNumber"></label>
                    <StyledInput 
                        type="text" 
                        name="phoneNumber" 
                        placeholder="Phone Number" 
                        defaultValue={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)}

                    />
                    {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                    <label htmlFor="email"></label>
                    <StyledInput 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        defaultValue={email} 
                        onChange={(e) => setEmail(e.target.value)}

                    />
                    {errors.email && <p>{errors.email}</p>}
                    <StyledFieldSet>
                        <legend>Contact Type</legend>
                        <label>
                            <input 
                                type="radio" 
                                defaultValue="Question" 
                                name="contactType" 
                                onChange={(e) => setContactType(e.target.value)} 

                            />
                            Question
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                defaultValue="Concern" 
                                name="contactType" 
                                onChange={(e) => setContactType(e.target.value)} 

                            />
                            Concern
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                defaultValue="Feedback" 
                                name="contactType" 
                                onChange={(e) => setContactType(e.target.value)} 

                            />
                            Feedback
                        </label>
                    </StyledFieldSet>
                    <StyledLabel htmlFor="message">Message:</StyledLabel>
                    <br />
                    <StyledTextArea 
                        name="message" 
                        placeholder="Give us a little more info about your contact in order to better assist you!" 
                        defaultValue={values.message} 
                        onChange={(e) => setMessage(e.target.value)} 
                    
                    />
                    {errors.message && <p>{errors.message}</p>}
                    <br />
                    <StyledButton onClick={addContactForm}>Submit Contact</StyledButton>
                </StyledContactForm>
            </StyledContactFormContainer>
        </>
    );      
};

export default Form;