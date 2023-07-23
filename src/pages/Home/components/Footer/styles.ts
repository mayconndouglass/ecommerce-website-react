import styled from 'styled-components'

export const Container = styled.footer`
    /* height: 380px; */
    background-color: ${props => props.theme['dark-primary']};

    .content-container {
        width: 1440px;
        margin: 0 auto;
        padding: 3.43rem 4.93rem 1.25rem 4.93rem;

        color: #ccc;
        font-family: "Clash Display";
        font-size: 1rem;
        font-weight: 400;

        .grid-container {
            display: flex;
            gap: 7.812rem;/* 125px */
        }

        .list {
            ul {
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
        }

        .input-container {
            h4 {
                margin-bottom: 9px;
            }

            input {
                width: 509px;
                height: 56px;
                border: none;
                outline: none;
                padding: 0.937rem 1.875rem;
                background-color: #F9F9F926;

                &::placeholder {
                    font-family: "Satoshi";
                    font-size: 1rem;
                    font-weight: 400;
                    color: white;
                }
            }

            button {
                width: 118px;
                height: 56px;

                border: none;
                outline: none;
                cursor: pointer;

                font-family: "Satoshi";
                font-size: 1rem;
                font-weight: 400;
            }
        }

        hr {
            color: ${props => props.theme.primary};
            margin-top: 30px;
        }

        .info-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1.125rem;

            .copyright {
                font-family: "Satoshi";
                font-weight: 400;
                font-size: 0.875rem;
            }

            .social-media {
                display: flex;
                gap: 20px;

                img {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }
`
