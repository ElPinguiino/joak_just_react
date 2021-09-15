import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { StyledCarouselComponent, StyledCarouselItem } from './CarouselElements';

const CarouselComponent = () => {

    const [reviews, setReviews] = useState([])

    const getReviews = async () => {
        const response = await axios.get('http://127.0.0.1:8000/api/reviewform/')
        setReviews(response.data)
    }

    useEffect(() =>{
        getReviews();
    }, [])

    return (
        <>
            {
                reviews.map((reviews) => (
                <StyledCarouselComponent autoplay={ true } autoplay_speed={ 5000 }>
                    <StyledCarouselItem>
                        <p> {reviews.first_name} {reviews.last_initial}</p>
                        <p>Date Visited: {reviews.date_visited}</p>
                        <p>Food Rating: {reviews.food_rating}</p>
                        <p>Service Rating: {reviews.service_rating}</p>
                        <p>Review: {reviews.review_message}</p>
                    </StyledCarouselItem>
                    {/* <StyledCarouselItem>
                        <p>{reviews.first_name} {reviews.last_initial}</p>
                        <p>Date Visited: {reviews.date_visited}</p>
                        <p>Food Rating: {reviews.food_rating}</p>
                        <p>Service Rating: {reviews.service_rating}</p>
                        <p>Review:{reviews.review_message}</p>
                    </StyledCarouselItem>
                    <StyledCarouselItem>
                        <p>{reviews.first_name} {reviews.last_initial}</p>
                        <p>Date Visited: {reviews.date_visited}</p>
                        <p>Food Rating: {reviews.food_rating}</p>
                        <p>Service Rating: {reviews.service_rating}</p>
                        <p>Review:{reviews.review_message}</p>
                    </StyledCarouselItem>
                    <StyledCarouselItem>
                        <p>{reviews.first_name} {reviews.last_initial}</p>
                        <p>Date Visited: {reviews.date_visited}</p>
                        <p>Food Rating: {reviews.food_rating}</p>
                        <p>Service Rating: {reviews.service_rating}</p>
                        <p>Review:{reviews.review_message}</p>
                    </StyledCarouselItem>
                    <StyledCarouselItem>
                        <p>{reviews.first_name} {reviews.last_initial}</p>
                        <p>Date Visited: {reviews.date_visited}</p>
                        <p>Food Rating: {reviews.food_rating}</p>
                        <p>Service Rating: {reviews.service_rating}</p>
                        <p>Review:{reviews.review_message}</p>
                    </StyledCarouselItem> */}
                </StyledCarouselComponent>
                )
                )
            }    
        </>
    )
}

export default CarouselComponent



// reviews.map((reviews,index) => (
//     <ShowReviewContainer>
//         <ShowReviewP>{reviews.first_name} {reviews.last_initial}</ShowReviewP>
//         <ShowReviewP>Date Visited: {reviews.date_visited}</ShowReviewP>
//         <ShowReviewP>Food Rating: {reviews.food_rating}</ShowReviewP>
//         <ShowReviewP>Service Rating: {reviews.service_rating}</ShowReviewP>
//         <ShowReviewP>Review:{reviews.review_message}</ShowReviewP>
//     </ShowReviewContainer>