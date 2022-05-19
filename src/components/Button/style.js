import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 3rem;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: var(--neon-green);
    border: 0;

    &:focus,
    &:hover {
        cursor: pointer;
    }
 
    &:focus {
        transition: 1s;
        background-color: var(--dark-green);
    }
`;