import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContactFormContainer = styled.div`
    background-color: red;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
export const ContactFormWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`
export const ContactHeadingWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 160px;
    width: 50%;
    max-width: 1100px;
    margin-top: 80px;
    margin-right: auto;
    margin-left: auto;
    padding: 24px 24px;
    justify-content: center;
    background-color: orange;
`
/* Styling for contact heading (orange box) */
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 1.1;
    font-weight: 600;
    color: blue;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const Subtitle = styled.h3`
    color: #29F9FC;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const InnerContainer = styled.div`
    display: grid;
    z-index: 1;
    position: relative;
    height: 480px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 60px;
    justify-content: center;
    background-color: #FFFFFF;
`
export const ContactFormRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2 col3';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2 col3';
    }
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    grid-area: col1;
    padding: 0 15px;
`
export const ContactInfoColumn = styled.div`
    display: grid;
    z-index: 1;
    height: 480px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 24px 24px;
    justify-content: center;
    background-color: purple;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    grid-column-start: 2;
    padding: 0 15px;
    grid-area: col 2 col3;
`

export const ContactFormColumn = styled.div`
    display: grid;
    z-index: 1;
    height: 480px;
    width: 200%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 24px 24px;
    justify-content: center;
    background-color: #29F9FC;

    @media screen and (max-width: 768px) {

    }
`

export const InfoHeading = styled.h2`
    font-size: 24px;
    color: #FFFFFF;

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`

export const InfoSubtitle = styled.h3`
    font-size: 16px;
    color: white;

    @media screen and (max-width: 480x0) {

    }
`

export const InfoNumber = styled.h2`
    font-size: 16px;
    color: white;

    @media screen and (max-width: 480x0) {
        
    }
`

export const InfoEmail = styled.h2`
    font-size: 16px;
    color: white;

    @media screen and (max-width: 480x0) {
    
    }
`

export const InfoAddress = styled.h2`
    font-size: 16px;
    color: white;

    @media screen and (max-width: 480x0) {
        
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: #FFFFFF;
    font-size: 36px;
`


/* Container for the first row inside of our contact form*/
export const FirstInnerColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    background-color: orange;
    
    @media screen and (max-width: 768px) {
    }    
`

/* Container for the second row inside of our contact form*/
export const SecondInnerColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    background-color: purple;

    @media screen and (max-width: 768px) {

    }
`
/* Container for the different types of contact from the contact form */
export const HorizontalColumn = styled.div`
    display: grid;
    align-items: center;
    background-color: yellow;

    @media screen and (max-width: 768px) {

}
`
 /* Container for the text-area for the message box in the contact form*/
export const SecondHorizontalColumn = styled.div`
    display: grid;
    align-items: center;
    background-color: green;

    @media screen and (max-width: 768px) {

}
`
/* Styling inside of the light blue box */
export const H1 = styled.h1`
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 1.1;
    font-weight: 600;
    color: blue;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const H4 = styled.h4`
    margin-bottom: 24px;
    font-size: 12px;
    line-height: 1.1;
    font-weight: 600;
    color: blue;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`