import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 305px;
    height: 462px;

    img {
        width: 305px;
        height: 375px;
        cursor: pointer;
    }

    h4 {
        font-family: 'Clash Display';
        font-size: 1.25rem;
        font-weight: 400;
        color: ${props => props.theme['dark-primary']}
    }

    span {
        font-family: Satoshi;
        font-weight: 400;
        font-size: 1.125rem;
        color: ${props => props.theme['dark-primary']}
    }
`
