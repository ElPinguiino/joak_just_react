import React, {useState, useEffect, Component} from 'react';
import ReactCardCarousel from 'react-card-carousel';
import axios from 'axios';
import { VolumeUpTwoTone } from '@material-ui/icons';
import Carousel from './DisplayReviews';

const ShowReviews = () => {

    const [reviews, setReviews] = useState([])

    const getReviews = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/reviewform/')
        setReviews(response.data)
    }
    
    useEffect(() =>{
        getReviews();
    }, [])


    return (
        <div>
            <h1>Reviews</h1>
            {
                reviews.map((reviews,index) => (
                    <div>
                        <p>{reviews.first_name} {reviews.last_initial}</p>
                        <p>Date Visited: {reviews.date_visited}</p>
                        <p>Food Rating: {reviews.food_rating}</p>
                        <p>Service Rating: {reviews.service_rating}</p>
                        <p>Review:{reviews.review_message}</p>
                    </div>
                )
                )
            }
        </div>
    )
}

export default ShowReviews

    