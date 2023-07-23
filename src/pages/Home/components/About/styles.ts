import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    margin: 0 auto;
    gap: 12px;
    max-width: 1440px;
    padding: 2.8rem 3.8rem;

    .card-about {
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 4rem;/* No figma está 3rem(48px) */
        background-color: ${props => props.theme['dark-primary']};
        color: ${props => props.theme.white};
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
            background-color: #F9F9F926;
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

        .card-about, .image-container {
            width: 80%;
            height: 478px;
        }
    }
`
