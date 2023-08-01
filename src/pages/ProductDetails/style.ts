import styled from 'styled-components'

export const Container = styled.main`
    /* width: 1440px; */
`

export const ProductsContainer = styled.section`
    max-width: 1440px;
    margin: 0 auto;

    padding-top: 80px;

    @media screen and (max-width: 512px) {
        padding-top: 40px;
    }

    h3 {
        font-family: 'Clash Display';
        font-size: 2rem;
        font-weight: 400;

        color: ${props => props.theme['dark-primary']};

        padding: 0.875rem 2.75rem 1.375rem 3.5rem;

        @media screen and (max-width: 512px) {
            font-size: 1.25rem;
            text-align: center;
        }
    }
`

