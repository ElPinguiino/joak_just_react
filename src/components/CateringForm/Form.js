/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import 
{ 
    CateringFormInnerContainer, CateringFormInnerWrapper, CateringForm, CateringFormNameArea, CateringFormFirstName,CateringFormLastName, CateringFormContactInfoArea, CateringFormPhoneNumber, CateringFormEmail, CateringFormPackageTypeArea,CateringFormPackages, CateringFormEventInfo, CateringFormPeopleAttending, CateringFormBudget, CateringFormEventDate, CateringFormAdditionalHours, CateringFormEventLocation, CateringFormMessage, CateringFormPaymentType, Input, StyledTextArea, Button, CateringFormInformation, CateringFormInformationTitle, CateringFormInformationSubtitle
    
} 
 from './CateringFormElements';

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
        <>
            <CateringFormInnerContainer>
                <CateringFormInnerWrapper>
                    <CateringForm>
                        <CateringFormNameArea>
                            <CateringFormFirstName>
                                <Input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)} />
                            </CateringFormFirstName>
                            <CateringFormLastName>
                                <Input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)} />
                            </CateringFormLastName>
                        </CateringFormNameArea>
                        <CateringFormContactInfoArea>
                            <CateringFormPhoneNumber>
                                <Input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Phone Number"
                                    name="phoneNumber"
                                    deafultValue={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)} />
                            </CateringFormPhoneNumber>
                            <CateringFormEmail>
                                <Input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </CateringFormEmail>
                        </CateringFormContactInfoArea>
                        <CateringFormPackageTypeArea>
                            <CateringFormPackages>
                                <label>The Lieutant</label>   
                                <Input
                                    type="radio"
                                    className="form-control form-control-lg"
                                    name="packageType"
                                    value={packageType}
                                    onchange={(e) => setPackageType(e.target.value)} />
                                <label>The Captain</label>
                                <Input
                                    type="radio"
                                    className="form-control form-control-lg"
                                    name="packageType"
                                    value={packageType}
                                    onChange={(e) => setPackageType(e.target.value)} />
                                <label>The Sargeant</label>
                                <Input
                                    type="radio"
                                    className="form-control form-control-lg"
                                    name="packageType"
                                    value={packageType}
                                    onChange={(e) => setPackageType(e.target.value)} />
                            </CateringFormPackages>
                        </CateringFormPackageTypeArea>
                        <CateringFormEventInfo>
                            <CateringFormPeopleAttending>
                                <Input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="# of people attending"
                                    name="peopleAttending"
                                    value={peopleAttending}
                                    onChange={(e) => setPeopleAttending(e.target.value)} />
                            </CateringFormPeopleAttending>
                            <CateringFormBudget>
                                <Input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Planned budget for the food"
                                    name="budget"
                                    value={budget}
                                    onChange={(e) => setBudget(e.target.value)} />
                            </CateringFormBudget>
                            <CateringFormEventDate>
                                <Input
                                    type="text"
                                    className="form-control form-control-lg"
                                    name="eventDate"
                                    value={eventDate}
                                    onChange={(e) => setEventDate(e.target.value)} />
                            </CateringFormEventDate>
                            <CateringFormAdditionalHours>
                                <label>1</label>
                                <Input
                                    type="radio"
                                    className="form-control form-control-lg"
                                    name="additionalHours"
                                    value={additionalHours}
                                    onChange={(e) => setAdditionalHours(e.target.value)} />
                                <label>2</label>
                                <Input
                                    type="radio"
                                    className="form-control form-control-lg"
                                    name="additionalHours"
                                    value={additionalHours}
                                    onChange={(e) => setAdditionalHours(e.target.value)} />
                                <label>3</label>
                                <Input
                                    type="radio"
                                    className="form-control form-control-lg"
                                    name="additionalHours"
                                    value={additionalHours}
                                    onChange={(e) => setAdditionalHours(e.target.value)} />
                                <label>4</label>
                                <Input
                                    type="radio"
                                    className="form-control form-control-lg"
                                    name="additionalHours"
                                    value={additionalHours}
                                    onChange={(e) => setAdditionalHours(e.target.value)} />
                            </CateringFormAdditionalHours>
                            <CateringFormEventLocation>
                                <Input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="location"
                                    name="location"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)} />
                            </CateringFormEventLocation>
                        </CateringFormEventInfo>
                        <CateringFormMessage>
                            <StyledTextArea
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Give us a little more info regarding your contact..."
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)} />
                        </CateringFormMessage>
                        <CateringFormPaymentType>
                            <label>Cash</label>   
                            <Input
                                type="radio"
                                className="form-control form-control-lg"
                                name="paymentType"
                                value={paymentType}
                                onchange={(e) => setPaymentType(e.target.value)} />
                            <label>Venmo</label>   
                            <Input
                                type="radio"
                                className="form-control form-control-lg"
                                name="paymentType"
                                value={paymentType}
                                onchange={(e) => setPaymentType(e.target.value)} />
                            <label>Card</label>   
                            <Input
                                type="radio"
                                className="form-control form-control-lg"
                                name="paymentType"
                                value={paymentType}
                                onchange={(e) => setPaymentType(e.target.value)} />
                        </CateringFormPaymentType>
                        <Button onClick={AddCateringForm}>Submit</Button>
                    </CateringForm>
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
                </CateringFormInnerWrapper>
            </CateringFormInnerContainer>
        </>
    );        
};

export default Form;