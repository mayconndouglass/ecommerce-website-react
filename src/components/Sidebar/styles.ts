import styled from 'styled-components'

interface statusSideBar {
    readonly active: boolean;
}

export const Sidebar = styled.div<statusSideBar>`
    width: ${(props) => (props.active ? '60%' : '0')};
    height: 100vh;

    opacity: ${(props) => (props.active ? '1' : '0')};
    transition: all;
    transition-duration: 200ms;

    position: fixed;
    top: 0;
    right: 0;

    background-color: white;
    padding: ${(props) => (props.active ? '1rem' : '0')};

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
            display: ${(props) => (props.active ? 'flex' : 'none')};
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
