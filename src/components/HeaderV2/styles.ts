import styled from 'styled-components'

export const HeaderVersionTwo = styled.header`
    .container {
        height: 80px;
        max-width: 1440px;
        margin: 0 auto;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }

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

    ul {
        display: flex;
        justify-content: center;
        gap: 2rem;

        width: 100%;

        a {
            text-decoration: none;
            color: #726e8d;
            font-family: "Satoshi";
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
        }

        @media screen and (max-width: 800px) {
            display: none;
        }
    }

    .icons {
        display: flex;
        gap: 10px;

        img  {
            width: 1.125rem;
            height: 1.125rem;

            cursor: pointer;
        }

        .menu-mobile {
            display: none;

            @media screen and (max-width: 800px) {
                display: block;
            }
        }
    }
`

