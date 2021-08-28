import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPhone, FaMapMarker, FaMailBulk } from 'react-icons/fa';

export const ContactFormContainer = styled.div`
    background-color: #fff;
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
    border-radius: 15px;
    border: 5px solid black;
    box-shadow: 10px 10px;
    background-color: #29F9FC;
`
/* Styling for contact heading (orange box) */
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 1.1;
    text-align: center;
    font-weight: 600;
    color: white;
    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`
export const Subtitle = styled.h3`
    color: black;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    justify-content: center;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
`

export const InnerContainer = styled.div`
    display: grid;
    z-index: 1;
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
        grid-template-areas:
            'col1' 'col2 col3';
    }
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    grid-area: col1;
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
    background-color: #29fca1;
    border-radius: 15px;
    box-shadow: 10px 10px;
    border: 5px solid black;
`
export const InfoHeading = styled.h2`
    font-size: 24px;
    font-family: ;
    text-align: center;
    color: #FFFFFF;
    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`

export const InfoSubtitle = styled.h3`
    font-size: 16px;
    text-align: center;
    color: white;
    @media screen and (max-width: 480x0) {
    }
    margin-bottom: 10px;
`

export const InfoNumber = styled.h2`
    font-size: 16px;
    color: white;
    text-align: left;
    @media screen and (max-width: 480x0) {
        
    }
`

export const InfoEmail = styled.h2`
    font-size: 16px;
    color: white;
    text-align: left;
    @media screen and (max-width: 480x0) {
    
    }
`

export const InfoAddress = styled.h2`
    font-size: 16px;
    color: white;
    text-align: left;
    @media screen and (max-width: 480x0) {
        
    }
`

export const FaPhoneStyled = styled(FaPhone)`
    margin-right: 20px;
    color: black;
`

export const FaMapMarkerStyled = styled(FaMapMarker)`
    margin-right: 20px;
    color: black;
`

export const FaMailBulkStyled = styled(FaMailBulk)`
    margin-right: 20px;
    color: black;
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

export const Column2 = styled.div`
    margin-bottom: 15px;
    grid-column-start: 2;
    grid-area: col2 col3;
`

export const ContactFormColumn = styled.div`
    display: grid;
    z-index: 1;
    height: 480px;
    width: 200%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: 15px;
    padding: 24px 24px;
    justify-content: center;
    border-radius: 15px;
    border: 5px solid black;
    box-shadow: 10px 10px;
    background-color: #29F9FC;
    @media screen and (max-width: 768px) {
    }
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
    color: white;
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`




/* Styling of the actual form */
export const ContactFormInnerContainer = styled.div`

`

export const ContactFormInnerWrapper = styled.div`
`

export const ContactFormH1 = styled.h1`
    color: white;
    text-align: center;
    margin-bottom: 1rem;
    border: 5px black solid;
`

export const ContactFormNameArea = styled.div`
    border: 5px black solid;
    width: 300px;
`

export const ContactFormFirstName = styled.div`

`

export const ContactFormLastName = styled.div`

`

export const ContactFormPhoneNumber = styled.div`
    border: 5px black solid;
`

export const ContactFormEmail = styled.div`
    border: 5px black solid;
`

export const ContactFormContactType = styled.div`
    border: 5px black solid;
`

export const ContactFormMessage = styled.div`
    border: 5px black solid;
`

export const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: ;
    border: none;
    border-radius: 3px;
`

export const Button = styled.button`
    margin-top: 50px;
    background-color: white;
    border: none;
    color: black;
    font-size: 20px;
    padding: 15px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
`
