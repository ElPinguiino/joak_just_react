import React, { useState } from 'react';
import { ReviewFormContainer, ReviewFormWrapper, ReviewFormRow, ReviewFormContent, ReviewFormFormField, StyledH2 } from './ReviewFormElements';
import Form from './Form';
import ShowReviews from './ShowReviews';
import Carousel from './DisplayReviews';

const ReviewForm = () => {
    return (
        <>
            <ReviewFormContainer>
                <ReviewFormWrapper>
                    <ReviewFormRow>
                        <ReviewFormContent>
                        <StyledH2>Reviews</StyledH2>
                            <Carousel />
                        </ReviewFormContent>
                        <ReviewFormFormField>
                            <Form />
                        </ReviewFormFormField>
                    </ReviewFormRow>
                </ReviewFormWrapper>
            </ReviewFormContainer>
        </>
    )
}

export default ReviewForm
