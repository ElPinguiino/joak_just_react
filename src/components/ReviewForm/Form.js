/* eslint-disable no-undef */
import React, { useState } from 'react';
import Select from "react-select";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

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
        <div>
            <h1>Review Form</h1>

            <div className="container">
                <div className="form-group">
                    
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="First Name"
                        name="firstName"
                        defaultValue={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Last Initial"
                        name="lastInitial"
                        defaultValue={lastInitial}
                        onChange={(e) => setLastInitial(e.target.value)} />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Date Visited"
                        name="dateVisited"
                        defaultValue={dateVisited}
                        onChange={(e) => setDateVisited(e.target.value)} />
                </div>       
                <div className="form-group">
                <label>Food Rating:</label>       
                    <Select
                        defaultValue={foodRating}
                        onChange={setFoodRating}
                        options={options}
                    />
                </div>
                <div className="form-group">
                <label>Service Rating:</label>       
                    <Select
                        defaultValue={serviceRating}
                        onChange={setServiceRating}
                        options={options}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Give us a little more info regarding your contact..."
                        name="message"
                        defaultValue={message}
                        onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button className="btn btn-success" onClick={addReviewForm}>Submit</button>
                </div>
            </div>
        </div>
    );        
};

export default Form;