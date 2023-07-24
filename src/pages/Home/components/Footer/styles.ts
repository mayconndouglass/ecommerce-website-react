import styled from 'styled-components'

export const Container = styled.footer`
    background-color: ${(props) => props.theme['dark-primary']};

    .content-container {
        width: min(100%, 1440px);
        margin: 0 auto;
        padding: 3.43rem 4.93rem 1.25rem 4.93rem;

        font-family: "satoshi";

        @media screen and (max-width: 565px) {
            padding-inline: 3rem;
            padding-block: 3rem 1.25rem;
        }
    }
`

export const Grid = styled.div`
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(3, 150px) 1fr;

    .list {
        color: ${(props) => props.theme.white};

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

    .input-container {
        width: min(100%, 609px);

        h4 {
            color: ${(props) => props.theme.white};
            margin-bottom: 0.875rem;
            font-family: "Clash Display";
            font-weight: 400;
        }

        input {
            width: calc(100% - 118px);
            height: 56px;
            border: none;
            outline: none;
            padding-inline: 0.875rem;
            background-color: #f9f9f926;
            color: ${(props) => props.theme.white};
            font-family: "Satoshi";
            font-size: 1rem;

            &::placeholder {
                color: white;
            }
        }

        button {
            width: 118px;
            height: 56px;

            border: none;
            outline: none;
            cursor: pointer;

            font-family: "Satoshi";
            font-size: 1rem;
            font-weight: 400;
        }
    }

    @media screen and (max-width: 1080px) {
        .input-container {
            input {
                width: 100%;
            }
            button {
                display: block;
                margin-top: 0.875rem;
                width: 100%;
            }
        }
    }

    @media screen and (max-width: 980px) {
        grid-template-columns: repeat(3, auto);

        .input-container {
            grid-column: 1/3;

            input {
                width: calc(100% - 118px);
            }
            button {
                display: inline;
                margin-top: 0;
                width: 118px;
            }
        }
    }

    @media screen and (max-width: 700px) {
        .input-container {
            grid-column: 1/4;
        }
    }

    @media screen and (max-width: 565px) {
        grid-template-columns: repeat(2, auto);

        .input-container {
            grid-column: 1/3;

            input {
                width: 100%;
            }
            button {
                display: block;
                margin-top: 0.875rem;
                width: 100%;
            }
        }
    }
`

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.primary};
    margin-top: 3rem;
`

export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

    .copyright {
        color: ${(props) => props.theme.white};
        font-family: "Satoshi";
        font-weight: 400;
        font-size: 0.875rem;
    }

    .social-media {
        display: flex;
        gap: 20px;

        img {
            width: 20px;
            height: 20px;
        }
    }

    @media screen and (max-width: 565px) {
        flex-direction: column-reverse;
        gap: 0.875rem;
    }
`
