import * as S from './styles'
import { useState } from 'react'

import iconSearch from '/assets/images/icon-search.svg'
import iconAvatar from '/assets/images/icon-avatar.svg'
import iconCart from '/assets/images/icon-cart.svg'
import iconMenu from '/assets/images/icon-menu.svg'

import { Sidebar } from '../../../../components/Sidebar'

export const Header = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const options: string[] = ['About us', 'Contact', 'Blog']

    return (
        <S.Container>
            <S.HeaderTop>
                <p>Avion</p>
                <div>
                    <S.Nav>
                        <a href="#">About us</a>
                        <a href="#">Contact</a>
                        <a href="#">Blog</a>
                    </S.Nav>
                    <img className='search' src={iconSearch} alt="Icon Search" />
                    <img className='card' src={iconCart} alt="Icon Card" />
                    <img className='avatar' src={iconAvatar} alt="Icon Avatar" />
                    <img className='menu' src={iconMenu} alt="Icon Menu" onClick={() => setIsOpen(!isOpen)} />

                    <Sidebar isOpen={isOpen} setState={setIsOpen} options={options} />

                </div>
            </S.HeaderTop>
            <S.Navigation>
                <ul>
                    <li>
                        <a href="#">All products</a>
                    </li>
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
