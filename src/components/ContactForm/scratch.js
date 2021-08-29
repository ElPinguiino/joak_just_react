/* eslint-disable no-undef */
import axios from 'axios';
import React, { useState } from 'react';
import Select from "react-select";
import { useHistory } from 'react-router-dom';
import { ContactFormInnerContainer, ContactFormInnerWrapper, ContactFormNameArea, ContactFormFirstName, ContactFormLastName, ContactFormPhone, ContactFormEmail, ContactFormContactType, ContactFormMessage } from


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
                <ContactFormH1>Contact Form</ContactFormH1>
                <ContactFormInnerWrapper>
                    <ContactFormNameArea>
                        <ContactFormFirstName>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="First Name"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)} />
                        </ContactFormFirstName>
                        <ContactFormLastName>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Last Name"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)} />
                        </ContactFormLastName>
                    </ContactFormNameArea>
                    <ContactFormPhoneNumber>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)} />
                    </ContactFormPhoneNumber>
                    <ContactFormEmail>
                        <input
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
                    <button className="btn btn-success" onClick={addContactForm}>Submit</button>
                </ContactFormInnerWrapper>
            </ContactFormInnerContainer>
        </>
    );      
};

export default Form;

<StyledContactFormContainer>
    <StyledContactForm>
        <h2>Message Us!</h2>
        <label htmlFor="firstName"></label>
        <StyledInput type="text" name="firstName" placeholder="First Name" />
        <label htmlFor="lastName"></label>
        <StyledInput type="text" name="lastName" placeholder="Last Name" />
        <label htmlFor="phoneNumber"></label>
        <StyledInput type="text" name="phoneNumber" placeholder="Phone Number" />
        <label htmlFor="email"></label>
        <StyledInput type="email" name="email" placeholder="Email" />
        <StyledFieldSet>
            <legend>Contact Type:</legend>
            <label>
                <input type="radio" value="question" name="contactType" />
                Question
            </label>
            <label>
                <input type="radio" value="concern" name="contactType" />
                Concern
            </label>
            <label>
                <input type="radio" value="feedback" name="contactType" />
                Feedback
            </label>
        </StyledFieldSet>
        <label htmlFor="message">Message</label>
        <StyledTextArea name="message" />
        <StyledError><p>Error Message</p></StyledError>
        <StyledButton>Submit Contact</StyledButton>
        <StyledError></StyledError>
    </StyledContactForm>
</StyledContactFormContainer>


export const StyledContactFormContainer = styled.div`

`

export const StyledContactForm = styled.form`
    width: 100%;
    padding: 40px;
    box-sizing: border-box;
`

export const StyledInput = styled.input`

`

export const StyledTextArea = styled.textarea`

`

export const StyledButton = styled.button`

`

export const StyledError = styled.div`

`