import styled from 'styled-components'

export const Container = styled.section`
    background-color: ${(props) => props.theme['light-gray']};
    padding-block: 5rem;
    font-family: Satoshi;
    h1 {
        font-family: "Clash Display";
        font-size: 1.5rem;
        font-weight: 400;
        display: none;
    }

    .container-products {
        max-width: 1440px;
        width: 95%;
        padding-block: 5.25rem;
        padding-inline: 5rem;

        background-color: white;
        color: ${(props) => props.theme['dark-primary']};
        margin: auto;

        transition: all ease 200ms;

        .titles {
            display: flex;
            justify-content: space-between;
            font-family: "Clash Display";
            font-size: 0.875rem;

            p:nth-child(1) {
                flex: 1 1 60%;
            }
            p:nth-child(2) {
                flex: 0 1 25%;
                text-align: center;
            }
            p:nth-child(3) {
                flex: 0 1 25%;
                text-align: end;
            }
        }

        img {
            width: 6.8125rem;
            height: 8.375rem;
            flex-shrink: 0;
        }
    }

    @media screen and (max-width: 880px) {
        .container-products {
            padding-inline: 2rem;
            padding-block: 3rem;
        }
    }

    @media screen and (max-width: 675px) {
        padding: 2.25rem 0;

        .container-products {
            background-color: transparent;
            padding-inline: 0;
            width: 90%;
            .titles {
                display: none;
            }
        }
    }
`

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme['light-gray']};
    margin-block: 1rem;

    @media screen and (max-width: 675px) {
        display: none;
    }
`

export const DividerMobile = styled(Divider)`
    display: none;
    @media screen and (max-width: 675px) {
        display: block;
        background-color: #ebe8f4;
    }
`
