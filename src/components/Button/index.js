import Image from '../Image';
import { IconDice } from '../../images';
import * as S from './style';

const Button = ({handleClick}) => {
    return (
        <S.Button 
            type="button"
            onClick={handleClick}
        >
            <Image 
                path={IconDice}
                altDescription="Icon Dice"
            />
        </S.Button>
    );
}

export default Button;