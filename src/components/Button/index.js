import * as S from './style';
import Image from '../Image';
import { IconDice } from '../../images';

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