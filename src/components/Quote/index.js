import Image from '../Image';
import { PatternDivider } from '../../images';
import * as S from './style';

const Quote = ({ quote, id }) => {
    return (
        <S.QuoteContainer>
            <S.QuoteAdviceNumber>Advice #{id}</S.QuoteAdviceNumber>
            <S.QuoteAdvice>
                {quote}
            </S.QuoteAdvice>
            <Image 
                path={PatternDivider} 
                altDescription="Pattern Divider" 
            />
        </S.QuoteContainer>
    )
}

export default Quote;