/* eslint-disable no-undef */
import React, { useState } from 'react';
import Select from "react-select";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ReviewFormInnerContainer, ReviewFormInnerWrapper, ReviewForm, ReviewFormFirstName, ReviewFormLastInitial, ReviewFormDate, ReviewFormFoodRating, ReviewFormServiceRating, ReviewFormMessage, Input, Button } from './ReviewFormElements';

import { StyledReviewFormContainer, StyledReviewForm, StyledInput, StyledFieldSet, StyledTextArea, StyledError, StyledButton, StyledH2, StyledLabel } from './ReviewFormElements';

const Form = () => {

    const [firstName, setFirstName] = useState("")
    const [lastInitial, setLastInitial] = useState("")
    const [dateVisited, setDateVisited] = useState("")
    const [foodRating, setFoodRating] = useState("")
    const [serviceRating, setServiceRating] = useState(null);
    const [message, setMessage] = useState("")

    const addReviewForm = () => {
        const data = {
            first_name: {firstName},
            last_initial: {lastInitial},
            date_visited: {dateVisited},
            food_rating: {foodRating},
            service_rating: {serviceRating},
            message: {message}
        }

        axios.post('http://127.0.0.1:8000/api/reviewform/', data)
        .then(res=> {
            console.log(res.data)
        })
        .catch(err => console.error(err))
    }



    // let history = useHistory();

    
    
    // const addReviewForm = async () => {
    //     let formField = new FormData()

    //     formField.append('firstName', first_name)
    //     formField.append('lastInitial', first_initial)
    //     formField.append('dateVisited', date_visited)
    //     formField.append('foodRating', food_rating)
    //     formField.append('serviceRating', service_rating)
    //     formField.append('message', message)

    //     await axios({
    //         method: 'post',
    //         url: 'http://127.0.0.1:8000/api/reviewform/',
    //         data: formField
    //     }).then((response) => {
    //         console.log(response.data);
    //         history.push('/')
    //     })
    // }
    return (
        <>
            <StyledReviewFormContainer>
                <StyledH2>Leave Us a Review!</StyledH2>
                <StyledReviewForm>
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
                        name="lasInitial" 
                        placeholder="Last Initial" 
                        value={lastInitial} 
                        onChange={(e) => setLastInitial(e.target.value)} />
                    <label htmlFor="dateVisited"></label>
                    <StyledInput
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Date Visited"
                        name="dateVisited"
                        defaultValue={dateVisited}
                        onChange={(e) => setDateVisited(e.target.value)} />
                    <StyledFieldSet>
                        <legend>Food Rating</legend>
                        <label>
                            <input 
                                type="radio" 
                                value="Very good" 
                                name="foodRating" 
                                onChange={(e) => setFoodRating(e.target.value)} />
                                Very good
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="Good" 
                                name="foodRating" 
                                onChange={(e) => setFoodRating(e.target.value)} />
                                Good
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="OK" 
                                name="foodRating" 
                                onChange={(e) => setFoodRating(e.target.value)} />
                            OK
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="Not good" 
                                name="foodRating" 
                                onChange={(e) => setFoodRating(e.target.value)} />
                            Not good
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="Not very good" 
                                name="foodRating" 
                                onChange={(e) => setFoodRating(e.target.value)} />
                            Not very good
                        </label>
                    </StyledFieldSet>
                    <StyledFieldSet>
                        <legend>Service Rating</legend>
                        <label>
                            <input type="radio" value="Very good" name="serviceRating" onChange={(e) =>       setServiceRating(e.target.value)} />
                            Very good
                        </label>
                        <label>
                            <input type="radio" value="Good" name="serviceRating" onChange={(e) =>          setServiceRating(e.target.value)} />
                            Good
                        </label>
                        <label>
                            <input type="radio" value="OK" name="serviceRating" onChange={(e) =>            setServiceRating(e.target.value)} />
                            OK
                        </label>
                        <label>
                            <input type="radio" value="Not good" name="serviceRating" onChange={(e) =>          setServiceRating(e.target.value)} />
                            Not good
                        </label>
                        <label>
                            <input type="radio" value="Not very good" name="serviceRating" onChange={(e) => setServiceRating(e.target.value)} />
                            Not very good
                        </label>
                    </StyledFieldSet>
                    <StyledTextArea 
                        name="message" 
                        placeholder="Let us know how your experience was!" 
                        defaultValue={message} 
                        onChange={(e) => setMessage(e.target.value)} />
                    <StyledButton onClick={addReviewForm}>Submit Review</StyledButton>
                </StyledReviewForm>
            </StyledReviewFormContainer>
        </>
    );        
};

export default Form;