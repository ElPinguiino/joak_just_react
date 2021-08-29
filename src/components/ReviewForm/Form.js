/* eslint-disable no-undef */
import React, { useState } from 'react';
import Select from "react-select";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ReviewFormInnerContainer, ReviewFormInnerWrapper, ReviewForm, ReviewFormFirstName, ReviewFormLastInitial, ReviewFormDate, ReviewFormFoodRating, ReviewFormServiceRating, ReviewFormMessage, Input, StyledTextArea, Button } from './ReviewFormElements';

const Form = () => {
    const options = [
        { value: "Not very good", label: "Not very good (1)" },
        { value: "Not good", label: "Not good (2)" },
        { value: "OK", label: "OK (3)" },
        { value: "Good", label: "Good (4)" },
        { value: "Very good", label: "Very good (5)" },
    ];

    
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
            <ReviewFormInnerContainer>
                <ReviewFormInnerWrapper>
                    <ReviewForm>
                        <ReviewFormFirstName>
                            <Input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="First Name"
                                name="firstName"
                                defaultValue={firstName}
                                onChange={(e) => setFirstName(e.target.value)} />
                        </ReviewFormFirstName>
                        <ReviewFormLastInitial>
                            <Input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Last Initial"
                                name="lastInitial"
                                defaultValue={lastInitial}
                                onChange={(e) => setLastInitial(e.target.value)} />
                        </ReviewFormLastInitial>
                        <ReviewFormDate>
                            <Input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Date Visited"
                                name="dateVisited"
                                defaultValue={dateVisited}
                                onChange={(e) => setDateVisited(e.target.value)} />
                        </ReviewFormDate>
                        <ReviewFormFoodRating>
                            <label>Food Rating:</label>       
                                <Select
                                    defaultValue={foodRating}
                                    onChange={setFoodRating}
                                    options={options}
                                />
                        </ReviewFormFoodRating>
                        <ReviewFormServiceRating>
                            <label>Service Rating:</label>       
                                <Select
                                    defaultValue={serviceRating}
                                    onChange={setServiceRating}
                                    options={options}
                                />
                        </ReviewFormServiceRating>
                        <ReviewFormMessage>
                            <StyledTextArea
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Give us a little more info regarding your contact..."
                                    name="message"
                                    defaultValue={message}
                                    onChange={(e) => setMessage(e.target.value)} />
                        </ReviewFormMessage>
                        <Button onClick={addReviewForm}>Submit Review</Button>
                    </ReviewForm>
                </ReviewFormInnerWrapper>
            </ReviewFormInnerContainer>
        </>
    );        
};

export default Form;