import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: end;

    max-width: 1440px;
    height: 704px;
    margin: 0 auto;
    padding: 0 5rem;/* No figma está 3rem */
    background-image: url('../../../../../public/assets/images/hero.jpg');

    .card-container {
        display: flex;
        flex-direction: column;
        gap: 20px;

        width: 630px;
        height: 444px;
        padding: 3rem;

        background-color: ${props => props.theme.white};

        h2 {
            font-family: 'Clash Display', sans-serif;
            font-size: 2rem;
            font-weight: 400;
            line-height: 2.8rem;
            color: #22202E;
        }

        p {
            font-family: Satoshi, sans-serif;
            font-size: 1.125rem;
            font-weight: 400;
            line-height: 1.5;
            color: #5B5676;
        }

        Button {
            margin-top: auto;
        }
    }
`