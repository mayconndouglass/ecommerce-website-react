import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    margin: 0px auto;
    gap: 12px;
    max-width: 1440px;
    padding: 2.8rem 3.8rem;

    .card-about {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 4rem; /* No figma está 3rem (48px) */
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

    @media screen and (max-width: 1080px) {
        flex-direction: column;
        align-items: center;
        width: 100%;

        .card-about,
        .image-container {
            width: 95%;
            height: 478px;
        }

        .image-container {
            img {
                height: 478px;
                object-fit: cover;
            }
        }
    }

    @media screen and (max-width: 565px) {

        .card-about {
            width: 95%;
            height: 342px;
            padding: 2.5rem 2.43rem;

            h3 {
                font-size: 1.25rem;
            }

            p {
                font-size: 0.875rem;
            }

            Button {
                font-size: 0.875rem;
                margin: auto auto 0 auto;
                width: 100%;
            }
        }

        .image-container {
            width: 95%;
            height: 342px;

            img {
                height: 342px;
                object-fit: cover;
            }
        }
    }
`