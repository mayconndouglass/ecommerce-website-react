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
    button_size?: string
    background_input?: string
}

export const Input = styled.input<InputProps>`
    ${props => `width: calc(100% - ${props.button_size || '118px'});`}
    height: 56px;
    border: none;
    outline: none;
    padding-inline: 0.875rem;
    font-family: "Satoshi";
    font-size: 1rem;
    background-color: ${props => props.background_input || 'white'};

    &::placeholder {
        color: rgba(0, 0, 0, 0.5);
    }
`

interface ButtonProps {
    button_color?: string
    background_button?: string
}

export const Button = styled.button<ButtonProps>`

    width: 118px;
    height: 56px;

    border: none;
    outline: none;
    background-color: ${(props) => props.background_button || '#2A254B'} ;
    color: ${(props) => props.button_color || 'white'};


    font-family: "Satoshi";
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
`
