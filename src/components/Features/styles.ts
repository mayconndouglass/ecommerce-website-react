import styled from 'styled-components'

export const Container = styled.section`
    max-width: 1340px;
    width: 90%;
    margin: 0 auto;
    padding-block: 3rem 6rem;
    /* padding-inline: 1.5rem; */

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
        grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
        gap: 1rem;
        margin-top: 3rem;
    }
`
