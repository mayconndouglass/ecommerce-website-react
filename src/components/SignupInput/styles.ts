import styled from 'styled-components'

export const Container = styled.input`
    width: min(100%, 472px);

    @media screen and (max-width: 400px) {
        input {
            width: 100%;
        }
        button {
            display: block;
            margin-top: 0.75rem;
            width: 100%;
        }
    }
`

interface InputProps {
    inputSize: string
}

export const Input = styled.input<InputProps>`
    ${props => `width: calc(100% - ${props.inputSize});`}
    /* width: calc(100% - 118px); */
    height: 56px;
    border: none;
    outline: none;
    padding-inline: 0.875rem;
    font-family: "Satoshi";
    font-size: 1rem;

    &::placeholder {
        color: rgba(0, 0, 0, 0.5);
    }

    /* @media screen and (max-width: 400px) {
        width: 100%;
    } */
`

interface ButtonProps {
    buttonColor: string
}

export const Button = styled.button<ButtonProps>`

    width: 118px;
    height: 56px;

    border: none;
    outline: none;
    background-color: ${(props) => props.buttonColor};
    color: white;

    font-family: "Satoshi";
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;

    /* @media screen and (max-width: 400px) {
        display: block;
        margin-top: 0.75rem;
        width: 100%;
    } */
`
