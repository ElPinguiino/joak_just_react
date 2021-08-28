import React, { useState } from 'react';
import { CateringFormContainer, CateringFormImageContainer, CateringFormWrapper, H1, CateringSectionBg, ImageBg } from './CateringFormElements';
import background from '../../images/onlinecatering.png';
import ReactCardFlip from 'react-card-flip';
import Form from './Form';
import MenuCard from './MenuCard';

const CateringForm = () => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <>
            <CateringFormContainer>
                <CateringFormWrapper>
                    <CateringFormImageContainer>
                        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                            <div>
                                <img
                                    src={background}
                                    alt="Menu"
                                />
                              <button onClick={handleClick}>Submit A Request</button>
                            </div>

                            <div>
                              <Form />
                              <button onClick={handleClick}>Click to flip</button>
                            </div>
                        </ReactCardFlip>
                    </CateringFormImageContainer>
                </CateringFormWrapper>
            </CateringFormContainer>
        </>
    )
}

export default CateringForm;
