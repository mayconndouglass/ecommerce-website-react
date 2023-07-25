import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    margin: 0 auto;
    gap: 12px;
    max-width: 1440px;
    width: 90%;
    padding: 3.5rem 0;

    .card-about {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 4rem; /* No figma está 3rem(48px) */
        background-color: ${(props) => props.theme['dark-primary']};
        color: ${(props) => props.theme.white};
        width: 50%;

        h3 {
            font-family: "Clash Display", sans-serif;
            font-size: 2rem;
            font-weight: 400;
        }

        p {
            font-family: "Satoshi";
            font-size: 1.125rem;
            font-weight: 400;
        }

        Button {
            margin-top: auto;
            background-color: #f9f9f926;
            color: white;
        }
    }

    .image-container {
        width: 50%;

        img {
            width: 100%;
        }
    }

    @media (max-width: 1080px) {
        flex-direction: column;
        align-items: center;
        width: 100%;

        .card-about {
            width: 90%;

            Button {
                margin-top: 2rem;
            }
        }

        .image-container {
            width: 90%;
        }
    }
    @media (max-width: 600px) {
        .card-about {
            padding: 2rem;

            h3 {
                font-size: 1.5rem;
            }

            p {
                font-size: .875rem;
            }

            Button {
                width: 100%;
            }
        }
    }
`
