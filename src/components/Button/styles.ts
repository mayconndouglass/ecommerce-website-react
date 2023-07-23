import styled from 'styled-components'

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    cursor: pointer;

    width: 170px;
    height: 56px;
    padding: 1rem 2rem;
    background-color: ${props => props.theme['light-gray']};
    color: #2A254B;

    font-size: 1rem;
    font-family: Satoshi, sans-serif;
    font-weight: 400;
`
