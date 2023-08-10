import * as S from './styles'
import { useState } from 'react'

import iconSearch from '/assets/images/icon-search.svg'
import iconAvatar from '/assets/images/icon-avatar.svg'
import iconMenu from '/assets/images/icon-menu.svg'

import { Sidebar } from '../../../../components/Sidebar'
import { Link } from 'react-router-dom'
import { Cart } from '../../../../components/Cart'

export const Header = () => {

    const [isOpen, setIsOpen] = useState<number>(0)
    const options: string[] = ['About us', 'Contact', 'Blog']

    return (
        <S.Container>
            <S.HeaderTop>
                <Link className='logo' to="/">Avion</Link>
                <div>
                    <S.Nav>
                        <a href="#">About us</a>
                        <a href="#">Contact</a>
                        <a href="#">Blog</a>
                    </S.Nav>
                    <img className='search' src={iconSearch} alt="Icon Search" />
                    <Cart />
                    <img className='avatar' src={iconAvatar} alt="Icon Avatar" />
                    <img className='menu' src={iconMenu} alt="Icon Menu" onClick={() => setIsOpen(isOpen === 1 ? 0 : 1)}/>

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
