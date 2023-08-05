import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Sidebar } from '../Sidebar'
import { Cart } from '../Cart'

import * as S from './styles'
import iconSearch from '/assets/images/icon-search.svg'
import iconAvatar from '/assets/images/icon-avatar.svg'
import iconMenu from '/assets/images/icon-menu.svg'

export const HeaderV2 = () => {
    const optionsMenu = ['Plant pots', 'Ceramics', 'Tables', 'Chairs', 'Tableware', 'Cutlery']
    const [isOpen, setIsOpen] = useState(false)

    return (
        <S.HeaderVersionTwo>
            <div className="container">
                <Link to={'/'}><p>Avion</p></Link>

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
                    <Cart />
                    <img src={iconAvatar} alt="Icon Avatar" />
                    <img
                        className="menu-mobile"
                        src={iconMenu} alt="Menu"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                    <Sidebar isOpen={isOpen} setState={setIsOpen} options={optionsMenu} />
                </div>

            </div>
        </S.HeaderVersionTwo>
    )
}
