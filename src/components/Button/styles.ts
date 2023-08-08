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
    background-color: ${(props) => props.theme['light-gray']};
    color: #2a254b;

    font-size: 1rem;
    font-family: Satoshi, sans-serif;
    font-weight: 400;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
`
