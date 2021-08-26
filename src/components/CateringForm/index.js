import React, { useState } from 'react';
import { CateringFormContainer, CateringFormImageContainer, CateringFormWrapper, H1, CateringSectionBg, ImageBg } from './CateringFormElements';
import background from '../../images/onlinecatering.png';
import Form from './Form';

const CateringForm = () => {

    return (
        <>
            <CateringFormContainer>
                <CateringFormWrapper>
                    <CateringFormImageContainer>
                        <CateringSectionBg>
                            <ImageBg src={background} />
                        </CateringSectionBg>
                        <Form />
                    </CateringFormImageContainer>
                </CateringFormWrapper>
            </CateringFormContainer>
        </>
    )
}

export default CateringForm;
