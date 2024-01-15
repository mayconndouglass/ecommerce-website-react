import styled from 'styled-components'

export const Container = styled.article`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    .info {
        display: flex;
        align-items: center;
        gap: 1.3rem;
        flex: 1 0 60%;

        div {
            padding-block: 0.5rem;
            width: min(90%, 30rem);
        }
        .name {
            font-family: "Clash Display";
            font-size: 1.25rem;
            font-style: normal;
            font-weight: 400;
            overflow: hidden;
            max-height: 4ch;
            width: 11rem;
            margin-bottom: 0.5rem;
        }

        .description {
            font-size: 0.875rem;
            line-height: 150%;
            margin-bottom: 0.5rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            margin-right: 1rem;
        }
    }

    .total {
        font-size: 1.125rem;
        flex: 0 1 20%;
        text-align: end;
        margin-left: auto;
    }

    @media screen and (max-width: 675px) {
        padding-block: 0;
        h1 {
            display: block;
            margin-bottom: 2rem;
        }
        img {
            width: 8rem;
            height: 10rem;
        }
        .total {
            display: none;
        }
    }
`

export const containerQuantity = styled.div`
    padding-inline: 1rem;
    flex: 0 1 20%;
    display: flex;
    justify-content: center;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 7.6rem;
        height: 2.875rem;

        background-color: ${(props) => props.theme['light-gray']};
    }

    input {
        font-family: Satoshi;
        width: 75px;
        border: none;
        background-color: transparent;
        outline: none;
        text-align: center;
    }

    button {
        font-size: 1rem;
        border: none;
        background-color: transparent;
        color: ${(props) => props.theme['border-dark']};
        cursor: pointer;
        width: 24px;
        height: 24px;
    }

    /* @media screen and (max-width: 880px) {
        margin-left: auto;
        border: 3px solid red;
    } */
    @media screen and (max-width: 520px) {
        display: none;
    }
`

export const containerQuantityMobile = styled(containerQuantity)`
    display: none;

    @media screen and (max-width: 520px) {
        display: block;
    }
`
