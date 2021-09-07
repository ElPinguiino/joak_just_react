import React, {useState, useEffect, Component} from 'react';
import ReactCardCarousel from 'react-card-carousel';
import axios from 'axios';
import { VolumeUpTwoTone } from '@material-ui/icons';
import Carousel from './DisplayReviews';
import { ShowReviewContainer, ShowReviewP, StyledH2, StyledCarousel } from './ReviewFormElements';

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
            <StyledH2>Reviews</StyledH2>
            {
                // reviews.map((reviews,index) => (
                //     <ShowReviewContainer>
                //         <ShowReviewP>{reviews.first_name} {reviews.last_initial}</ShowReviewP>
                //         <ShowReviewP>Date Visited: {reviews.date_visited}</ShowReviewP>
                //         <ShowReviewP>Food Rating: {reviews.food_rating}</ShowReviewP>
                //         <ShowReviewP>Service Rating: {reviews.service_rating}</ShowReviewP>
                //         <ShowReviewP>Review:{reviews.review_message}</ShowReviewP>
                //     </ShowReviewContainer>
                // )
                // )
                reviews.map((reviews,index) => (
                    <StyledCarousel autoplay={ true } autoplay_speed={ 5000 }>
                        <div style={ Carousel.CARD_STYLE }>
                            <p>{reviews.first_name} {reviews.last_initial}</p>
                            <p>Date Visited: {reviews.date_visited}</p>
                            <p>Food Rating: {reviews.food_rating}</p>
                            <p>Service Rating: {reviews.service_rating}</p>
                            <p>Review:{reviews.review_message}</p>
                        </div>
                    </StyledCarousel>
                )
                )
            }
        </div>
    )
}

export default ShowReviews

    