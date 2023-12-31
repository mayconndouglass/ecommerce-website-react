import styled from 'styled-components'

export const Container = styled.div`
    @media screen and (max-width: 750px){
        display: flex;
        align-items: center;
        justify-content: center;

        width: 156px;
        height: 56px;
        background-color: white;
    }
`

export const Label = styled.label`
    font-family: 'Satoshi';
    font-weight: 400;
    font-size: 1rem;
    color: #2A254B;

    margin-right: 0.5rem;
`

export const Select = styled.select`
    border: none;
    outline: none;
    background-color: white;
`
