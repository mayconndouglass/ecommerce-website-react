import styled from 'styled-components'

export const Container = styled.div`
    position: relative;

    img  {
        width: 1.125rem;
        height: 1.125rem;

        cursor: pointer;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: -0.3rem;
        right: -0.6rem;
        width: 16px;
        height: 16px;
        background-color: rgb(239, 68, 68);
        border-radius: 100%;

        font-size: 10px;
        font-weight: 400;
        font-family: "Satoshi";
        color: white;
    }
`
