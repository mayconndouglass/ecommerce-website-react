import styled from 'styled-components'

export const Container = styled.section`
    padding: 3.5rem 5rem 1.25rem 5rem;/* 56px 80px 20px 80px */

    background-color: ${props => props.theme['dark-primary']};

    @media screen and (max-width: 864px) {
        padding: 3.5rem 0 1.25rem 0;
    }

    .lists {
        display: grid;
        grid-template-columns: 40% 50%;
        gap: 10%;

        max-width: 1440px;
        margin: 0 auto;

        @media screen and (max-width: 864px) {
            display: flex;
            flex-direction: column;
            gap: 3rem;
            width: 90%;
            margin: 0 auto;
        }

        .first-group {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 35px;
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

            @media screen and (max-width: 1180px) {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
            }

            @media screen and (max-width: 864px) {
                grid-template-columns: repeat(3, 3rem);
            }

            @media screen and (max-width: 512px) {
                grid-template-columns: repeat(3, 1.5rem);
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
`

export const Divider = styled.div`
    height: 1px;
    max-width: 1440px;
    margin: 3rem auto 0 auto;

    background-color: ${(props) => props.theme.primary};

    @media screen and (max-width: 864px) {
        width: 90%;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6.8rem;

    @media screen and (max-width: 1180px){
        gap: 2rem;
    }

    @media screen and (max-width: 864px){
        grid-template-columns: repeat(2, 1fr);
    }

    .list {
        color: ${(props) => props.theme.white};

        @media screen and (max-width: 864px) {
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
                cursor: pointer;
                a {
                    color: white;
                }
            }
        }
    }
`
