import styled from 'styled-components';

export const QuoteContainer = styled.div`
    width: 100%;
    max-width: 450px;
    margin: 0 1rem;
    padding: 2rem;
    border-radius: 1.5rem;
    background-color: var(--dark-grayish-blue);
    color: var(--light-cyan);
    text-align: center;

    img {
        width: 100%;
        margin: 1rem 0;
    }
`
export const QuoteAdvice = styled.q`
    font-size: 30px;
    word-break: break-word;
    line-height: 1.3;
`

export const QuoteAdviceNumber = styled.p`
    margin: 1rem;
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--neon-green);
`
