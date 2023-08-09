import styled from 'styled-components'

interface statusBanner {
    $active: number;
}

export const Container = styled.section<statusBanner>`
    font-family: Satoshi;
    font-size: 0.875rem;

    background-color: #2a254b;
    color: white;

    display: ${(props) => (props.$active ? 'none' : 'flex')};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    height: ${(props) => (props.$active ? '0' : '100%')};
    width: 100%;
    padding: ${(props) => (props.$active ? '0' : '.7rem 2rem')};

    transition: transform 400ms, padding 400ms ease;
    transform: ${(props) => (props.$active ? 'translateY(-40px) ' : null)};

    .close {
        position: absolute;
        right: 1rem;
        cursor: pointer;
    }

    @media screen and (max-width: 530px) {
        gap: 0.875rem;
        padding: ${(props) => (props.$active ? '0' : '.5rem 3rem .5rem 1rem')};
    }

`

