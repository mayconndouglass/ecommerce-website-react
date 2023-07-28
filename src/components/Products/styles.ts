import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 auto;
    max-width: 1340px;
    min-height: 634px;
    width: 90%;

    padding-top: 0.875rem;
    padding-bottom: 1.375rem;

    .cards-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(294px, 1fr));
        gap: 1rem;

        @media screen and (max-width: 704px) {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

        }

        @media screen and (max-width: 605px) {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }

        @media screen and (max-width: 506px) {
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr))
        }
    }

    Button {
        margin: 0 auto
    }

    @media screen and (max-width: 506px) {
        Button {
            width: 100%;
        }
    }

    @media screen and (max-width: 1020px) {
        gap: 3rem;
    }
`
