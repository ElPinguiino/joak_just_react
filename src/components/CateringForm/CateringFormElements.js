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
    height: 900px;
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