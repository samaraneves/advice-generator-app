import Quote from '../../components/Quote';
import Button from '../../components/Button';

import * as S from './style';

const HomeQuote = ({ quote, id, handleClick }) => {
    return (
        <S.MainHome>
            <Quote 
                quote={quote} 
                id={id} 
            />
            <Button 
                handleClick={handleClick}
            />
        </S.MainHome>
    );
}

export default HomeQuote;