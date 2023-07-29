import * as S from './styles'

import iconSearch from '../../../public/assets/images/icon-search.svg'
import iconAvatar from '../../../public/assets/images/icon-avatar.svg'
import iconCart from '../../../public/assets/images/icon-cart.svg'
import iconMenu from '../../../public/assets/images/icon-menu.svg'

export const HeaderV2 = () => {
    return (
        <S.HeaderVersionTwo>
            <div className="container">
                <p>Avion</p>

                <div className="menu">
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
                            <a href="#">Chairs</a>
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
                </div>

                <div className="icons">
                    <img src={iconSearch} alt="Icon Search" />
                    <img src={iconCart} alt="Icon Card" />
                    <img src={iconAvatar} alt="Icon Avatar" />
                    <img className="menu-mobile" src={iconMenu} alt="Menu" />
                </div>

            </div>
        </S.HeaderVersionTwo>
    )
}
