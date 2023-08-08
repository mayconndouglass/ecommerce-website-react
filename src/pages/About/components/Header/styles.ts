import styled from 'styled-components'

export const Container = styled.header``

export const HeaderTop = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-block: 1rem;
    padding-inline: 2rem;

    .logo {
        color: #22202e;
        font-family: "Clash Display";
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        @media screen and (max-width: 675px) {
            order: -1;
        }
    }

    img {
        width: 1.125rem;
        height: 1.125rem;
        flex-shrink: 0;
    }

    div {
        display: flex;
        gap: 1rem;

        .menu {
            display: none;
            cursor: pointer;
        }

        @media screen and (max-width: 675px) {
            .menu {
                display: block;
                cursor: pointer;
            }

            .search,
            .card,
            .avatar {
                display: none;
            }
        }
    }

    @media screen and (max-width: 675px) {
        & > img {
            display: none;
        }
    }
`

export const Navigation = styled.nav`
    padding: 1rem 1.5rem;
    width: 100%;
    background-color: ${(props) => props.theme['light-gray']};

    white-space: nowrap;

    &::-webkit-scrollbar {
        height: 4px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: ${(props) => props.theme['border-dark']};
    }

    ul {
        list-style: none;
        display: flex;
        justify-content: center;
        gap: 2rem;

        a {
            display: inline-block;
            text-decoration: none;
            color: #726e8d;
            font-family: "Satoshi";
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
        }
    }

    @media screen and (max-width: 740px) {
        overflow: auto;
        &::-webkit-scrollbar {
            height: 2px;
        }

        ul {
            justify-content: stretch;
            gap: 0;
            a {
                margin-right: 1.5rem;
            }
        }
    }
`

export const Nav = styled.nav`
    a {
        font-family: Satoshi;
        text-decoration: none;
        color: #726e8d;
        margin-right: 2rem;
    }

    @media screen and (max-width: 675px) {
        display: none;
    }
`
