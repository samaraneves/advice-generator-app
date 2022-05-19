import Quote from '../../components/Quote';

import * as S from './style';

const HomeQuote = ({ quote, id, handleClick }) => {
    return (
        <S.MainHome>
            <Quote 
                quote={quote} 
                id={id} 
            />
        </S.MainHome>
    );
}

export default HomeQuote;