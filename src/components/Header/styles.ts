import styled from 'styled-components'

export const Container = styled.header`
    padding-inline: 2rem;

    .divider {
        margin: auto;
        height: 1px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.1);

        @media screen and (max-width: 675px) {
            display: none;
        }
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

        @media screen and (max-width: 675px) {
            order: -1;
        }
    }

    img  {
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

            img:nth-child(2) {
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

    @media screen and (max-width: 675px) {
        display: none;
    }
`

interface statusSideBar {
    active: boolean
}

export const Sidebar = styled.div<statusSideBar>`
    width: ${props => props.active ? '60%' : '0'};
    height: 100vh;

    opacity: ${props => props.active ? '1' : '0'};
    transition: all;
    transition-duration: 200ms;

    position: fixed;
    top: 0;
    right: 0;

    background-color: white;
    padding: ${props => props.active ? '1rem' : '0'};

    img {
        cursor: pointer;
        position: absolute;

        width: 25px;
        height: 25px;
    }

    .menuLinks {
        width: 100%;

        ul {
            width: 70%;
            margin: 0 auto;
            display: ${props => props.active ? 'flex' : 'none'};;
            flex-direction: column;


            gap: 1rem;

            margin-top: 6rem;

            li {
                border-bottom: 1px solid #ededed;
            }

            a {
                text-decoration: none;
                color: #726e8d;
                font-family: "Satoshi";
                font-size: 1.25rem;
                font-style: normal;
                font-weight: 400;
            }
        }
    }
`
