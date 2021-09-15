import StyledCarousel from 'react-card-carousel';
import styled from 'styled-components';


export const CarouselContainer = styled.div`

`

export const StyledCarouselComponent= styled(StyledCarousel)`

`

export const StyledCarouselItem = styled.div`
    margin-left: -24rem;
    height: 300px;
    width: 300px;
    padding-top: 80px;
    text-align: center;
    background: black;
    border: 4px solid black;
    color: #29f9fc;
    font-size: 12px;
    text-transform: uppercase;
    border-radius: 10px;


    @media screen and (max-width: 800px) {
        margin-left: 0;
        margin-top: -30rem;
    }
`