import styled from 'styled-components';
import Modal from './Modal'

export const CateringFormContainer = styled.div`
    background-color: black;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
/* This is the container holding the front of the image of our card flip  */
export const CateringFormWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 1200px;
    width: 100%;
    padding-top: 80px;
    max-width: 773px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: 1200px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
    }
`

/* Container that houses the front image of our card flip */
export const CateringFormImageContainer = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 100%;
`

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background-color: transparent;

    @media screen and (max-width: 768px) {
        height: 200%;
    }
`


export const StyledFrontCardContainer = styled.div`

`

export const StyledBackCardContainer = styled.div`
    @media screen and (max-width: 768px) {
        height: 1000px;
    }
`

export const StyledImage = styled.img`
    o-object-fit: cover;
    width: 100%;
    height: 100%;
    background-color: transparent;

    @media screen and (max-width: 768px) {
    
    }
`

export const StyledBackCardButton = styled.button`
    border: 3px #fff solid;
    color: #fff;
    display: block;
    background-color: transparent;
    font-size: 15px;
    font-weight: normal;
    margin: 0 auto;
    max-width: 550px;
    padding: 15px 0;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    width: 100%;
    top: -948px;
    position: relative;
`
export const StyledFrontCardButton = styled.button`
    border: 3px #fff solid;
    color: #fff;
    display: block;
    background-color: transparent;
    font-size: 15px;
    font-weight: normal;
    margin: 0 auto;
    max-width: 550px;
    padding: 15px 0;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    width: 100%;
`

/* Styling of Form  */

export const CateringFormInnerContainer = styled.div`
    border: 15px yellow solid;
    width: 645px;
    height: 835px;
`

export const CateringFormInnerWrapper = styled.div`
    border: 15px purple solid;
    height: 100%;
`

export const StyledCateringFormContainer = styled.div`
    top: -850px;
    position: relative;

    @media screen and (max-width: 768px) {
        top: -950px;
    }
`

export const StyledCateringForm = styled.form`
    width: 100%;
    padding: 40px;
    box-sizing: border-box; 
    position: relative;
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
`

export const StyledLabel = styled.label`
    color: white;
`



/* Styling for Caterig Info inside of the Form Modal */
export const StyledModalContainer = styled.div`
    top: -1150px;
    position: relative;
    margin-right: auto;
    margin-left: 18rem;

    @media screen and (max-width: 768px) {
        top: -1150px;
        position: relative;
        margin-right: auto;
        margin-left: 18rem;
    }
`

export const StyledModalButton = styled.button`
    border: 3px yellow dotted;
    color: #fff;
    display: block;
    background-color: purple;
    font-size: 15px;
    font-weight: normal;
    margin: 0 auto;
    max-width: 300px;
    padding: 15px 0;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    width: 100%;
    margin-left: -4rem;
`

export const StyledModal = styled(Modal)`

`

export const CateringFormInformation = styled.div`

`

export const CateringFormInformationTitle = styled.h3`

`

export const CateringFormInformationSubtitle = styled.p`

`

