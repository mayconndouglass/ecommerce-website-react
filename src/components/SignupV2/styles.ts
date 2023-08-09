import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    align-items: center;

    height: 481px;
    margin: 0 auto;

    background-color: ${props => props.theme['light-gray']};

    .inner-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.125rem;

        height: 364px;
        width: 1273px;
        margin: 0 auto;

        background-color: white;

        h2 {
            font-family: "Clash Display";
            font-weight: 400;
            font-size: 2rem;
            color: ${(props) => props.theme['dark-primary']};
        }

        p {
            font-family: "Satoshi";
            font-weight: 400;
            font-size: 1rem;
            color: ${(props) => props.theme['dark-primary']};
            line-height: 1.75rem;
            text-align: center;

            width: 400px;
        }

        .input-container {
            width: min(100%, 472px);
            margin-top: 3.375rem;

            input {
                width: calc(100% - 118px);
                height: 56px;
                border: none;
                outline: none;
                padding-inline: 0.875rem;
                font-family: "Satoshi";
                font-size: 1rem;
                background-color: ${(props) => props.theme['light-gray']};

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
        }
    }

    @media screen and (max-width: 596px) {
        .inner-container {
            padding: 1rem;

            h2 {
                font-size: 1.25rem;
            }

            p {
                font-size: 0.875rem;
                width: 80%;
            }

            .input-container {
                display: flex;
                justify-content: center;

                input {
                    /* width: 224px; */
                    width: 100%;
                }

                button {
                    margin-top: 0.5rem;
                    width: 100%;
                }
            }
        }
    }

    @media screen and (max-width: 380px) {
        h2 {
            text-align: center;
        }

        .input-container {
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
    }
`