import styled from 'styled-components';

export const ReviewFormContainer = styled.div`
    background: #29f9fc;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1
`
export const ReviewFormWrapper = styled.div`
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

export const ReviewFormRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2';
    }
`

export const ReviewFormContent = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;   
`

export const ReviewFormFormField = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`