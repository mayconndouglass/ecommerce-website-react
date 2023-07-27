import { useState } from 'react'
import * as S from './styles'

import iconSearch from '/assets/images/icon-search.svg'
import iconAvatar from '/assets/images/icon-avatar.svg'
import iconCart from '/assets/images/icon-cart.svg'
import iconMenu from '/assets/images/icon-menu.svg'
import arrow from '/assets/images/right-arrow.png'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <S.Container>
            <S.HeaderTop>
                <img src={iconSearch} alt="Icon Search" />
                <p>Avion</p>
                <div>
                    <img src={iconCart} alt="Icon Card" />
                    <img src={iconAvatar} alt="Icon Avatar" />
                    <img className='menu' src={iconMenu} alt="Icon Menu" onClick={() => setIsOpen(!isOpen)} />

                    <S.Sidebar active={isOpen} >
                        <img src={arrow} alt="Fechar menu" onClick={() => setIsOpen(!isOpen)} />

                        <div className="menuLinks">
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
                    </S.Sidebar>
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
            </S.Navigation>
        </S.Container>
    )
}
