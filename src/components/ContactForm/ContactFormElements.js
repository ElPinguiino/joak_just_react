import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPhone, FaMapMarker, FaMailBulk } from 'react-icons/fa';

export const ContactFormContainer = styled.div`
    background-color: #fff;
    @media screen and (max-width: 768px) {
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

    @media screen and (max-width: 768px) {
        height: 1400px;
    }
`
export const ContactHeadingWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 160px;
    width: 50%;
    max-width: 1100px;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    padding: 24px 24px;
    justify-content: center;
    border-radius: 15px;
    border: 5px solid black;
    box-shadow: 10px 10px;
    background: #f857a6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ff5858, #f857a6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ff5858, #f857a6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    @media screen and (max-width: 768px) {
        width: 85%;
    }
`
/* Styling for contact heading (orange box) */
export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 24px;
    line-height: 1.1;
    text-align: center;
    font-weight: 800;
    color: white;
    @media screen and (max-width: 768px) {
        font-size: 18px;
        margin-bottom: 0px;
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

    @media screen and (max-width: 768px) {
        font-size: 13px;
    }
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

    @media screen and (max-width: 768px) {
        margin-top: -580px;
    }
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
    background: #FF512F;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #F09819, #FF512F);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #F09819, #FF512F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 15px;
    box-shadow: 10px 10px;
    border: 5px solid black;

    @media screen and (max-width: 768px) {
        width: 85%;
    }
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    grid-column-start: 2;
    grid-area: col2 col3;

    @media screen and (max-width: 768px) {
        grid-column-start: 1;
    }
`

export const ContactFormColumn = styled.div`
    display: grid;
    z-index: 1;
    height: 480px;
    width: 175%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: 25px;
    padding: 24px 24px;
    justify-content: center;
    border-radius: 15px;
    border: 5px solid black;
    box-shadow: 10px 10px;
    background: #AA076B;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #61045F, #AA076B);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #61045F, #AA076B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    @media screen and (max-width: 768px) {
        width: 85%;
        height: 600px;
    }
`
export const InfoHeading = styled.h2`
    font-size: 24px;
    font-family: ;
    text-align: center;
    color: white;
    text-shadow: #F5A069 1.5px 3px;
    font-size: 1.5rem;
    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`

export const InfoSubtitle = styled.h3`
    font-size: 16px;
    text-align: center;
    color: white;
    text-shadow: #F5A069 1.5px 3px;
    font-size: 1rem;
    @media screen and (max-width: 480x0) {
    }
    margin-bottom: 10px;
`

export const InfoNumber = styled.h2`
    font-size: 16px;
    color: white;
    text-shadow: #F5A069 1.5px 3px;
    font-size: 1rem;
    text-align: left;
    @media screen and (max-width: 480x0) {
        
    }
`

export const InfoEmail = styled.h2`
    font-size: 16px;
    color: white;
    text-shadow: #F5A069 1.5px 3px;
    font-size: 1rem;
    text-align: left;
    @media screen and (max-width: 480x0) {
    
    }
`

export const InfoAddress = styled.h2`
    font-size: 16px;
    color: white;
    text-shadow: #F5A069 1.5px 3px;
    font-size: 1rem;
    text-align: left;
    @media screen and (max-width: 480x0) {
        
    }
`

export const FaPhoneStyled = styled(FaPhone)`
    margin-right: 20px;
    color: white;
    font-size: 1.25rem;
`

export const FaMapMarkerStyled = styled(FaMapMarker)`
    margin-right: 20px;
    color: white;
    font-size: 1.25rem;
`

export const FaMailBulkStyled = styled(FaMailBulk)`
    margin-right: 20px;
    color: white;
    font-size: 1.25rem;
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

export const StyledContactFormContainer = styled.div`

`

export const StyledContactForm = styled.form`
    width: 100%;
    padding: 40px;
    box-sizing: border-box; 
`

export const StyledInput = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    width: 15em;
    color: palevioletred;
    // background: #859398;
    border: 2px black solid;
    box-shadow: 5px 5px;
    border-radius: 10px;
`
export const StyledFieldSet = styled.fieldset`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: ;
    box-shadow: 5px 5px;
    border: 1px solid white;
    border-radius: 5px;

    legend {
        padding: 0 10px;
        color: white;
    }

    label {
        padding-right: 10px;
        color: white;
    }

    input {
        margin-right: 5px;
    }
`

export const StyledTextArea = styled.textarea`
    padding: 0.5em;
    margin: 0.5em;
    color: black;
    // background: #859398;
    border: 2px white solid;
    border-radius: 10px;
    width: 100%;
    min-height: 100px;
    color: palevioletred;
    box-shadow: 5px 5px;
    resize: none;
`

export const StyledButton = styled.button`
    display: block;
    background-color: white;
    color: palevioletred;
    font-size: 1rem;
    border: black 1px solid;
    border-radius: 10px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;
    box-shadow: 5px 5px;
`

export const StyledError = styled.div`
    color: red;
    font-weight: 800;
    margin: 0 0 0px 0;
`

export const StyledH2 = styled.h2`
    text-align: center;
    color: white;
    text-shadow: palevioletred 2px 4px;
    font-size: 2.5rem;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`

export const StyledLabel = styled.label`
    color: white;
`
