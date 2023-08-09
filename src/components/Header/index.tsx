import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Cart } from '../Cart'

import * as S from './styles'
import iconSearch from '/assets/images/icon-search.svg'
import iconAvatar from '/assets/images/icon-avatar.svg'
import iconMenu from '/assets/images/icon-menu.svg'
import arrow from '/assets/images/right-arrow.png'

export const Header = () => {
    const [isOpen, setIsOpen] = useState(0)

    return (
        <S.Container>
            <S.HeaderTop>
                <img src={iconSearch} alt="Icon Search" />
                <Link to={'/'}><p>Avion</p></Link>
                <div>
                    <Cart />
                    <img src={iconAvatar} alt="Icon Avatar" />
                    <img className='menu' src={iconMenu} alt="Icon Menu" onClick={() => setIsOpen(isOpen === 1 ? 0 : 1)} />

                    <S.Sidebar $active={isOpen} >
                        <img src={arrow} alt="Fechar menu" onClick={() => setIsOpen(isOpen === 1 ? 0 : 1)} />

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
