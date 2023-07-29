import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    width: 1440px;
    padding: 1rem 80px;
    height: 223px;

    h2 {
        font-family: 'Clash Display';
        font-weight: 400;
        font-size: 2.25rem;
        line-height: 50.4px;
        color: ${props => props.theme['dark-primary']};
    }

    .filter-container {
        display: flex;
        justify-content: space-between;
        width: 100%;

        span {
            font-family: 'Satoshi';
            font-weight: 400;
            font-size: 1rem;
            color: #2A254B;
        }

        .first-filter, .second-filter {
            display: flex;
            gap: 4rem;
        }
    }
`
