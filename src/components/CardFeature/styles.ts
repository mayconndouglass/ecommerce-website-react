import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    max-width: 305px;
    height: 245px;
    padding: 3rem;
    background-color: ${props => props.theme["light-gray"]};
    color: ${props => props.theme["dark-primary"]};

    img {
        width: 1.5rem;
        height: 1.5rem;
    }

    h3 {
        font-family: 'Clash Display', sans-serif;
        font-size: 1.25rem;
        font-weight: 400;
    }

    p {
        font-family: 'Satochi', sans-serif;
        font-size: 1rem;
        line-height: 1.5;
    }
`
