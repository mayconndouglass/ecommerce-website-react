import styled from 'styled-components'

export const Container = styled.section`
    padding: 3.5rem 5rem 1.25rem 5rem;/* 56px 80px 20px 80px */

    background-color: ${props => props.theme['dark-primary']};

    .lists {
        display: flex;
        gap: 170px;

        max-width: 1440px;
        margin: 0 auto;

        .first-group {
            display: flex;
            gap: 65px;

            @media screen and (max-width: 1226px){
                gap: 30px;
            }

            @media screen and (max-width: 1210px){
                justify-content: space-around;
                gap: 30px;
            }
        }

        @media screen and (max-width: 1226px){
            gap: 65px;
        }

        @media screen and (max-width: 1210px){
            flex-direction: column;
        }
    }

    .first-list {
        p {
            font-family: 'Clash Display';
            font-size: 2.25rem;
            font-weight: 400;
            color: white;

            margin-bottom: 1rem;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 12px;

            li {
                font-family: 'Satoshi';
                font-weight: 400;
                font-size: 0.875rem;
                color: white;
            }
        }
    }

    .second-list {
        p {
            font-family: 'Clash Display';
            font-weight: 400;
            font-size: 1rem;
            color: white;

            margin-bottom: 1.375rem;
        }

        .social-midia {
            display: flex;
            gap: 24px;
        }

        @media screen and (max-width: 1210px){
            .social-midia {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }

    .copyright {
        margin: 1rem auto 0 auto;
        max-width: 1440px;

        color: white;
        font-family: 'Satoshi';
        font-weight: 400;
        font-size: 0.875rem;

        @media screen and (max-width: 1210px){
            text-align: center;
        }
    }

    @media screen and (max-width: 650px){
        padding: 3.5rem 1rem 1.25rem 1rem;
    }
`

export const Divider = styled.div`
    height: 1px;
    max-width: 1440px;
    margin: 3rem auto 0 auto;

    background-color: ${(props) => props.theme.primary};
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 175px);
    gap: 109px;

    @media screen and (max-width: 1500px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 1210px){
        display: flex;
        justify-content: space-around;
    }

    .list {
        color: ${(props) => props.theme.white};

        @media screen and (max-width: 650px) {
            &:nth-child(2) {
                display: none;
            }
        }

        p {
            display: block;
            font-family: "Clash Display";
            white-space: nowrap;
            margin-bottom: 0.75rem;
        }

        ul {
            display: flex;
            flex-direction: column;
            gap: 12px;

            li {
                font-size: 0.875rem;
                white-space: nowrap;
            }
        }
    }
`
