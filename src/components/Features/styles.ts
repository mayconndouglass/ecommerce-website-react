import styled from 'styled-components'

export const Container = styled.section`
    max-width: 1440px;
    margin: 0 auto;
    padding: 3rem 2.75rem;

    h2 {
        font-family: "Clash Display", sans-serif;
        font-size: 1.5rem;
        font-weight: 400;
        color: ${props => props.theme['dark-primary']};
        text-align: center;
    }

    .cards-container {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        margin-top: 3rem;
    }
`
