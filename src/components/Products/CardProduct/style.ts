import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    max-width: 305px;
    height: 462px;

    img {
        max-width: 305px;
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


    @media screen and (max-width: 704px) {
        width: 205px;
        height: 362px;

        img {
            width: 205px;
            height: 275px;
        }
    }

    @media screen and (max-width: 605px) {
        width: 163px;
        height: 288px;

        img {
            width: 163px;
            height: 201px;
        }
    }

    @media screen and (max-width: 375px) {
        width: 205px;
        height: 362px;

        img {
            width: 205px;
            height: 250px;
        }
    }
`
