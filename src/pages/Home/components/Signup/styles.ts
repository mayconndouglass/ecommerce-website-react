import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.875rem;

    width: 100%;
    min-height: 444px;
    margin: 0 auto;

    background-image: url("./public/assets/images/signup-background.png");

    h2 {
        font-family: "Clash Display";
        font-weight: 400;
        font-size: 2rem;
        color: ${(props) => props.theme.white};
    }

    p {
        font-family: "Satoshi";
        font-weight: 400;
        font-size: 1.125rem;
        color: ${(props) => props.theme.white};
        line-height: 1.75rem;
        text-align: center;

        max-width: 494px;
    }

    .input-container {
        width: min(100%, 472px);

        input {
            width: calc(100% - 118px);
            height: 56px;
            border: none;
            outline: none;
            padding-inline: 0.875rem;
            font-family: "Satoshi";
            font-size: 1rem;

            &::placeholder {
                color: rgba(0, 0, 0, 0.5);
            }
        }

        button {
            width: 118px;
            height: 56px;

            border: none;
            outline: none;
            background-color: ${(props) => props.theme['dark-primary']};
            color: white;

            font-family: "Satoshi";
            font-size: 1rem;
            font-weight: 400;
            cursor: pointer;
        }

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
    }

    @media screen and (max-width: 550px) {
        align-items: flex-start;
        padding: 1.5rem;

        h2 {
            text-align: left;
            font-size: 1.5rem;
        }
        p {
            text-align: left;
            font-size: 0.875rem;
        }
    }
`

export const Radios = styled.div`
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
            white-space: nowrap;
        }
    }

    @media screen and (max-width: 550px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
`
