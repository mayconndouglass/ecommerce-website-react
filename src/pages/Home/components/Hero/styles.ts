import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: end;

    max-width: 1440px;
    height: 704px;
    margin: 0 auto;
    padding-inline: 3rem;
    background-image: url("/assets/images/hero.jpg");

    .card-container {
        display: flex;
        flex-direction: column;
        gap: 20px;

        width: min(100%, 630px);
        height: 444px;
        padding: 3rem;

        background-color: ${(props) => props.theme.white};

        h2 {
            font-family: "Clash Display", sans-serif;
            font-size: 2rem;
            font-weight: 400;
            line-height: 2.8rem;
            color: #22202e;
        }

        p {
            font-family: Satoshi, sans-serif;
            font-size: 1.125rem;
            font-weight: 400;
            line-height: 1.5;
            color: #5b5676;
        }

        Button {
            margin-top: auto;
        }
    }

    @media screen and (max-width: 675px) {
        background-image: none;
        display: block;
        padding: 0;
        height: auto;

        .card-container {
            gap: 0.75rem;
            height: 100%;
            padding-block: 3rem 1.25rem;
            padding-inline: 2rem;

            h2 {
                font-size: 1.5rem;
                line-height: normal;
            }
            p {
                font-size: 1rem;
                margin-bottom: 2rem;
            }
            Button {
                width: 100%;
            }
        }
        .bg-mobile {
            width: 100%;
            height: 300px;
            background-image: url("/assets/images/hero.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
        }
    }
`
