import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.875rem;

    width: 1440px;
    height: 444px;
    margin: 0 auto;

    background-image: url('./public/assets/images/signup-background.png');

    h2 {
        font-family: "Clash Display";
        font-weight: 400;
        font-size: 2rem;
        color: ${props => props.theme.white}
    }

    p {
        font-family: "Satoshi";
        font-weight: 400;
        font-size: 1.125rem;
        color: ${props => props.theme.white};
        line-height: 1.75rem;
        text-align: center;

        max-width: 494px;
    }

    .radios-container {
        display: flex;
        gap: 2.25rem;

        .radio-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;

            p {
                font-family: "Satoshi";
                font-size: 1rem;
                font-weight: 400;
            }
        }
    }

    .custom-checkbox {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 0.75rem;
        height: 0.75rem;
        background-color: white;
        border-radius: 50%;

        span {
            font-size: 0.5rem;
            color: #833C06;
            font-weight: 900;
        }
    }

    .input-container {
        input {
            width: 354px;
            height: 56px;
            border: none;
            outline: none;
            padding: 0.937rem 1.875rem;

            &::placeholder {
                font-family: "Satoshi";
                font-size: 1rem;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.5);
            }
        }

        button {
            width: 118px;
            height: 56px;

            border: none;
            outline: none;
            background-color: ${props => props.theme['dark-primary']};
            color: white;

            font-family: "Satoshi";
            font-size: 1rem;
            font-weight: 400;
        }
    }
`
