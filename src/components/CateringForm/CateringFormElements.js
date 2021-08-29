import styled from 'styled-components';

export const CateringFormContainer = styled.div`
    background-color: #016060;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
/* This is the container holding the menu */
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
`
export const CateringFormImageContainer = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 700px;
`

export const CateringSectionBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const ImageBg = styled.image`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background-color: transparent;
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

export const CateringForm = styled.form`

`

export const CateringFormNameArea = styled.div`
    border: 5px black solid;
`

export const CateringFormFirstName = styled.div`

`

export const CateringFormLastName = styled.div`

`

export const CateringFormContactInfoArea = styled.div`
    border: 5px black solid;
`

export const CateringFormPhoneNumber = styled.div`

`

export const CateringFormEmail = styled.div`

`

export const CateringFormPackageTypeArea = styled.div`
    border: 5px black solid;
`

export const CateringFormPackages = styled.div`

`

export const CateringFormEventInfo = styled.div`
    border: 5px black solid;
`

export const CateringFormPeopleAttending = styled.div`

`

export const CateringFormBudget = styled.div`

`

export const CateringFormEventDate = styled.div`

`

export const CateringFormAdditionalHours = styled.div`

`

export const CateringFormEventLocation = styled.div`

`

export const CateringFormMessage = styled.div`
    border: 5px black solid;
`

export const CateringFormPaymentType = styled.div`
    border: 5px black solid;
`

export const Input = styled.input`

`

export const StyledTextArea = styled.textarea`

`

export const Button = styled.button`

`


/* Styling for Caterig Info inside of the Form */
export const CateringFormInformation = styled.div`

`

export const CateringFormInformationTitle = styled.h3`

`

export const CateringFormInformationSubtitle = styled.p`

`
