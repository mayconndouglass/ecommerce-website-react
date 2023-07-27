import styled from 'styled-components'

export const Container = styled.section`
    margin: auto;
    padding-block: 5rem;
    padding-inline: 8rem;
    width: min(100%, 1440px);

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    transition: all 200ms ease;

    h2 {
        font-family: "Clash Display";
        font-size: 2.25rem;
        font-weight: 400;
        width: min(100%, 44rem);
        line-height: 3.15rem;
        color: #2a254b;
    }

    Button {
        white-space: nowrap;
    }

    @media screen and (max-width: 950px) {
        padding-inline: 4rem;
        flex-direction: column;
    }

    @media screen and (max-width: 740px) {
        padding-inline: 1.5rem;
        padding-block: 3rem 2.5rem;
        font-size: 2rem;

        Button {
            width: 100%;
        }
    }
`
