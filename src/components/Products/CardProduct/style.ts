import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    img {
        width: 100%;
        cursor: pointer;

        &:hover {
            transition: .6s;
            transform: scale3d(1.07, 1.1, 1);
        }

        transition: .6s;
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
        max-width: 100%;

        img {
            max-width: 100%;
        }
    }

    @media screen and (max-width: 605px) {
        height: 100%;

        img {
            height: auto;
        }
    }
`
