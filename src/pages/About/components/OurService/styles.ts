import styled from 'styled-components'

export const Container = styled.section`
    height: 100%;
    width: min(100%, 1440px);

    display: flex;
    margin: auto;

    .img-container {
        width: 50%;
        max-height: 37rem;

        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }

    .about {
        background-color: ${(props) => props.theme['light-gray']};
        width: 50%;
        max-height: 37rem;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        padding-block: 4rem;
        padding-inline: 5rem 6rem;

        transition: all ease-in 200ms;

        h2 {
            font-family: "Clash Display";
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 400;
            line-height: 140%; /* 2.1rem */

            width: min(100%, 28.8rem);
            margin-bottom: 1.5rem;
            color: #2a254b;
        }

        p {
            position: relative;
            width: min(100%, 34rem);
            font-family: Satoshi;
            color: #505977;
            margin-bottom: 1rem;

        }

        button {
            display: flex;
            align-items: flex-end;
            justify-content: center;
            justify-self: flex-end;
            padding: 1rem 2rem;
            margin-top: auto;
            outline: none;
            cursor: pointer;
            border: none;
            background-color: white;
        }
    }
    @media screen and (max-width: 1120px) {
        .about {
            padding-block: 3rem;
            padding-inline: 3rem 4rem;
        }
     }

    @media screen and (max-width: 1005px) {
        flex-direction: column;

        .img-container {
            width: 100%;
        }

        .about {
            width: 100%;
            min-height: 27rem;
            /* margin-top: 3rem; */
            /* width: min(90%, 800px); */
            /* margin: auto; */
        }
    }

    @media screen and (max-width: 600px) {
        .about {
            padding-inline: 1.5rem;

            button {
                width: 100%;
            }
        }
    }

`
