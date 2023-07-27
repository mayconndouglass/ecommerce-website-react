import styled from 'styled-components'

export const Container = styled.section`
    max-width: 1440px;
    /* height: 758px; */
    margin: 0 auto;
    padding: 1.875rem 3rem ;

    display: flex;
    align-items: center;
    gap: 2.375rem;

    background-color: ${props => props.theme['light-gray']};

    p, h4, span {
        font-weight: 400;
    }

    .image-container {
        width: 50%;

        img {
            max-width: 100%;
            min-height: 568px;
            object-fit: cover;
        }

        @media screen and (max-width: 1024px) {
            width: 100%;
            display: flex;
            justify-content: center;

            img {
                max-width: 607px;
                width: 100%;
            }
        }

        @media screen and (max-width: 512px) {
            img {
                height: 380px;
            }
        }
    }

    .data-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        max-width: 518px;
        width: 50%;

        h4 {
            font-family: 'Clash Display';

            font-size: 2.25rem;
            color: ${props => props.theme['dark-primary']};

            @media screen and (max-width: 512px){
                font-size: 1.5rem;
            }
        }

        & > span {
            font-family: 'Satoshi';

            font-size: 1.5rem;
            color: ${props => props.theme['dark-primary']};

            @media screen and (max-width: 512px){
                font-size: 1.25rem;
            }
        }

        .divider {
            border: 1px solid #EBE8F4;
        }

        .description {
            p {
                font-size: 1rem;

                font-family: 'Satoshi';
                color: ${props => props.theme['dark-primary']};
            }

            p:first-child {
                font-family: 'Clash Display';
                margin-bottom: 0.875rem;
            }
        }

        .dimensions {
            margin-top: 0.875rem;

            p, span {
                font-size: 0.875rem;
                color: ${props => props.theme['dark-primary']};
                font-family: 'Clash Display';
            }

            & > p {
                font-size: 1rem;
            }

            .grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 0.75rem 0;

                margin-top: 14px;

                @media screen and (max-width: 596px) {
                    justify-items: center;
                }
            }
        }

        .quantity {
            span {
                font-size: 1rem;
                font-family: 'Clash Display';
                color: ${props => props.theme['dark-primary']};
            }

            div {
                max-width: 122px;
                height:46px;
                margin-top: 14px;

                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;

                background-color: white;

                span {
                    font-family: 'Satoshi';
                    font-size: 1rem;
                    color: ${props => props.theme['dark-primary']};

                    cursor: pointer;
                }
            }
        }

        button {
            background-color: ${props => props.theme['dark-primary']};
            outline: none;
            border: none;
            color: white;

            font-family: 'Satoshi';
            font-size: 1rem;

            max-width: 143px;
            height: 56px;

            cursor: pointer;
        }

        @media screen and (max-width: 1024px) {
            width: 100%;
        }

        @media screen and (max-width: 596px) {
            padding: 0 2rem;

            button {
                max-width: 100%;
            }

            .quantity {
                div {
                    max-width: 100%;
                    justify-content: space-around;
                }
            }
        }
    }

    @media screen and (max-width: 1024px) {
        flex-direction: column;
    }

    @media screen and (max-width: 596px) {
        padding: 0 0 1.875rem 0;
    }
`
