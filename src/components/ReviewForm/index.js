import React, { useState } from 'react';
import { ReviewFormContainer, ReviewFormWrapper, ReviewFormRow, ReviewFormContent, ReviewFormFormField } from './ReviewFormElements';
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
                            <ShowReviews />
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
