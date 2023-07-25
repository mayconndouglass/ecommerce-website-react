import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 auto;
    max-width: 1440px;
    min-height: 634px;
    padding: 0.875rem 2.75rem 1.375rem 2.75rem;

    .cards-container {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

        @media screen and (max-width: 375px) {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr))
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

    @media screen and (max-width: 424px) {
        padding: 0.875rem 1.25rem 1.375rem 1.25rem;
    }
`
