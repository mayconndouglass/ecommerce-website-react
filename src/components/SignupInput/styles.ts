import styled from 'styled-components'

export const Container = styled.section`
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
    buttonSize?: string
    backgroundInput?: string
}

export const Input = styled.input<InputProps>`
    ${props => `width: calc(100% - ${props.buttonSize || '118px'});`}
    height: 56px;
    border: none;
    outline: none;
    padding-inline: 0.875rem;
    font-family: "Satoshi";
    font-size: 1rem;
    background-color: ${props => props.backgroundInput || 'white'};

    &::placeholder {
        color: rgba(0, 0, 0, 0.5);
    }
`

interface ButtonProps {
    buttonColor?: string
    backgroundButton?: string
}

export const Button = styled.button<ButtonProps>`

    width: 118px;
    height: 56px;

    border: none;
    outline: none;
    background-color: ${(props) => props.backgroundButton || '#2A254B'} ;
    color: ${(props) => props.buttonColor || 'white'};


    font-family: "Satoshi";
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
`
