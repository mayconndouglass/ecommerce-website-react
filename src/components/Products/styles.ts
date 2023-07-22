import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 auto;
    width: 1440px;
    height: 634px;
    padding: 0.875rem 2.75rem 1.375rem 2.75rem;

    .cards-container {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        /* margin-top: 3rem; */
    }

    Button {
        margin: 0 auto
    }
`
