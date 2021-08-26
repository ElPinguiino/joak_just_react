import styled from 'styled-components'

export const StoreContainer = styled.div`
    height: 800 px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const StoreWrapper = styled.div`
    max-width: 1000px;
    height: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const StoreCard = styled.div`
    background: #010606;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2 ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`
export const StoreIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const StoreH1 = styled.h1`
    font-size: 2.5rem;
    color: #29f9fc;
    margin-top: 64px;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const StoreH2 = styled.h2`
    font-size: 1rem;
    color: #29f9fc;
    margin-bottom: 10px;
`

export const StoreP = styled.p`
    font-size: 1rem;
    color: #fff;
    text-align: center;
`