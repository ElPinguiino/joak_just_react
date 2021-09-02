/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import 
{ 
    CateringFormInnerContainer, CateringFormInnerWrapper, CateringForm, CateringFormNameArea, CateringFormFirstName,CateringFormLastName, CateringFormContactInfoArea, CateringFormPhoneNumber, CateringFormEmail, CateringFormPackageTypeArea,CateringFormPackages, CateringFormEventInfo, CateringFormPeopleAttending, CateringFormBudget, CateringFormEventDate, CateringFormAdditionalHours, CateringFormEventLocation, CateringFormMessage, CateringFormPaymentType, Input, Button, CateringFormInformation, CateringFormInformationTitle, CateringFormInformationSubtitle
    
} 
 from './CateringFormElements';

 import { StyledCateringFormContainer, StyledCateringForm, StyledInput, StyledFieldSet, StyledTextArea, StyledError, StyledButton, StyledH2, StyledLabel } from './CateringFormElements';

const Form = () => {

    let history = useHistory();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [packageType, setPackageType] = useState(null);
    const [peopleAttending, setPeopleAttending] = useState("")
    const [budget, setBudget] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [additionalHours, setAdditionalHours] = useState(null);
    const [location, setLocation] = useState("")
    const [message, setMessage] = useState("")
    const [paymentType, setPaymentType] = useState(null);

    const addCateringForm = async () => {
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
        <>
                    <StyledCateringFormContainer>
                        <StyledH2>Catering Request</StyledH2>
                        <StyledCateringForm>
                            <label htmlFor="firstName"></label>
                                <StyledInput 
                                    type="text" 
                                    name="firstName" 
                                    placeholder="First Name" 
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)} />
                                <label htmlFor="lastName"></label>
                                <StyledInput 
                                    type="text" 
                                    name="lastName" 
                                    placeholder="Last Name" 
                                    value={lastName} 
                                    onChange={(e) => setLastName(e.target.value)} />
                                <br />
                                <label htmlFor="phoneNumber"></label>
                                <StyledInput 
                                    type="text" 
                                    name="phoneNumber" 
                                    placeholder="Phone Number" 
                                    value={phoneNumber} 
                                    onChange={(e) => setPhoneNumber(e.target.value)} />
                                <label htmlFor="email"></label>
                                <StyledInput 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    defaultValue={email} 
                                    onChange={(e) => setEma(e.target.value)}/>
                                <StyledFieldSet>
                                    <legend>Contact Type</legend>
                                    <label>
                                        <input type="radio" value="The Lieutant" name="packageType" onChange={(e) => setPackageType(e.target.value)} />
                                        The Lieutant
                                    </label>
                                    <label>
                                        <input type="radio" value="The Captain" name="packageType" onChange={(e) => setPackageType(e.target.value)} />
                                        The Captain
                                    </label>
                                    <label>
                                        <input type="radio" value="The Sargeant" name="packageType" onChange={(e) => setPackageType(e.target.value)} />
                                        The Sargeant
                                    </label>
                                </StyledFieldSet>
                                <label htmlFor="peopleAttending"></label>
                                <StyledInput 
                                    type="text" 
                                    name="peopleAttending" 
                                    placeholder="How many people for your event?" 
                                    value={peopleAttending}
                                    onChange={(e) => setPeopleAttending(e.target.value)} />
                                <label htmlFor="budget"></label>
                                <StyledInput 
                                    type="text" 
                                    name="budget" 
                                    placeholder="What is your budget for your event?" 
                                    value={budget} 
                                    onChange={(e) => setBudget(e.target.value)} />
                                <label htmlFor="eventDate"></label>
                                <StyledInput 
                                    type="text" 
                                    name="eventDate" 
                                    placeholder="Date of your event" 
                                    value={eventDate} 
                                    onChange={(e) => setEventDate(e.target.value)} />
                                <StyledFieldSet>
                                    <legend>Additional Hours</legend>
                                    <label>
                                        <input type="radio" value="1" name="additionalHours" onChange={(e) => setAdditionalHours(e.target.value)} />
                                        1 Hour
                                    </label>
                                    <label>
                                        <input type="radio" value="2" name="additionalHours" onChange={(e) => setAdditionalHours(e.target.value)} />
                                        2 Hours
                                    </label>
                                    <label>
                                        <input type="radio" value="3" name="additionalHours" onChange={(e) => setAdditionalHours(e.target.value)} />
                                        3 Hours
                                    </label>
                                    <label>
                                        <input type="radio" value="4" name="additionalHours" onChange={(e) => setAdditionalHours(e.target.value)} />
                                        4 Hours
                                    </label>
                                </StyledFieldSet>
                                <label htmlFor="location"></label>
                                <StyledInput 
                                    type="text" 
                                    name="location" 
                                    placeholder="Location of the event" 
                                    value={location} 
                                    onChange={(e) => setLocation(e.target.value)} />
                                <br />
                                <StyledLabel htmlFor="message">Message:</StyledLabel>
                                <br />
                                <StyledTextArea 
                                    name="message" 
                                    placeholder="Pleae provide us with any additional info you think may help us    better serve your catering request" 
                                    defaultValue={message} 
                                    onChange={(e) => setMessage(e.target.value)} />
                                <StyledFieldSet>
                                    <legend>Payment Type</legend>
                                    <label>
                                        <input type="radio" value="Cash" name="paymentType" onChange={(e) => setPaymentType(e.target.value)} />
                                        Cash
                                    </label>
                                    <label>
                                        <input type="radio" value="Venmo" name="paymentType" onChange={(e) => setPaymentType(e.target.value)} />
                                        Venmo
                                    </label>
                                    <label>
                                        <input type="radio" value="Card" name="paymentType" onChange={(e) => setPaymentType(e.target.value)} />
                                        Card
                                    </label>
                                </StyledFieldSet>
                                <StyledError><p>Error Message</p></StyledError>
                                <StyledButton onClick={addCateringForm}>Submit Request</StyledButton>
                        </StyledCateringForm>
                    </StyledCateringFormContainer>
                    <CateringFormInformation>
                        <CateringFormInformationTitle>
                        Service Fee:
                        </CateringFormInformationTitle>
                        <CateringFormInformationSubtitle>
                        15% from the total amount at the end of the event.
                        </CateringFormInformationSubtitle>

                        <CateringFormInformationTitle>
                        Service Fee Includes:
                        </CateringFormInformationTitle>

                        <CateringFormInformationSubtitle>
                        Cost of Driving to the location of your event.
                        2 hours or serving food provided at the event.
                        Credit Card transaction fees.
                        </CateringFormInformationSubtitle>

                        <CateringFormInformationTitle>
                        Drive to you:
                        </CateringFormInformationTitle>
                        <CateringFormInformationSubtitle>
                        Currently this only applies to Salt Lake and Utah County, as we expand, our services maavailable elsewhere. Feel                free to follow us on our social media's to get the latest updatewhat we're up to!
                        </CateringFormInformationSubtitle>
                        <CateringFormInformationTitle>
                        Additional hours:
                        </CateringFormInformationTitle>
                        <CateringFormInformationSubtitle>
                        If you will want or need any additional hours, the cost will be $100/hr.
                        </CateringFormInformationSubtitle>
                        <CateringFormInformationTitle>
                        Cancellation Policy:
                        </CateringFormInformationTitle>
                        <CateringFormInformationSubtitle>
                        If you must cancel your catering reservation instead of rescheduling, we will issues a 50% reup    until 14 days                before the planned date. If you must cancel before that time, we can ieither a 25%  refund or a 50% refund in Juan                  Of A Kind Gift Cards.
                        </CateringFormInformationSubtitle>
                    </CateringFormInformation>
        </>
    );        
};

export default Form;