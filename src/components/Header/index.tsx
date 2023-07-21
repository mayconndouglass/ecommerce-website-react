import * as S from './styles'

import iconSearch from '../../../public/assets/images/icon-search.svg'
import iconAvatar from '../../../public/assets/images/icon-avatar.svg'
import iconCart from '../../../public/assets/images/icon-cart.svg'

export const Header = () => {
    return (
        <S.Container>
            <S.HeaderTop>
                <img src={iconSearch} alt="Icon Search" />
                <p>Avion</p>
                <div>
                    <img src={iconCart} alt="Icon Card" />
                    <img src={iconAvatar} alt="Icon Avatar" />
                </div>
            </S.HeaderTop>
            <div className="divider"></div>
            <S.Navigation>
                <ul>
                    <li>
                        <a href="#">Plant pots</a>
                    </li>
                    <li>
                        <a href="#">Ceramics</a>
                    </li>
                    <li>
                        <a href="#">Tables</a>
                    </li>
                    <li>
                        <a href="#">Crockery</a>
                    </li>
                    <li>
                        <a href="#">Tableware</a>
                    </li>
                    <li>
                        <a href="#">Cutlery</a>
                    </li>
                </ul>
            </S.Navigation>
        </S.Container>
    )
}
