import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100svh;

    h4 {
        font-size: 1.5rem;
        font-family: 'Clash Display';
        margin-bottom: 0.5rem;
        color: ${(props) => props.theme['dark-primary']};
    }

    a {
        color: ${(props) => props.theme.primary};
        font-family: 'Satoshi';
    }

    a:hover {
        text-decoration: underline;
    }
`