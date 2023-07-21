import styled from 'styled-components'

export const Container = styled.header`
    padding-inline: 2rem;

    .divider {
        margin: auto;
        height: 1px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.1);
    }
`

export const HeaderTop = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-block: 1rem;

    p {
        color: #22202e;
        font-family: "Clash Display";
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    img  {
        width: 1.125rem;
        height: 1.125rem;
        flex-shrink: 0;
    }

    div {
        display: flex;
        gap: 1rem;
    }
`

export const Navigation = styled.nav`
    padding-block: 1rem;

    ul {
        list-style: none;
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 2rem;

        a {
            text-decoration: none;
            color: #726e8d;
            font-family: "Satoshi";
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
        }
    }
`
