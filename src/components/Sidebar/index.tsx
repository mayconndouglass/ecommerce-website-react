import React from 'react'
import * as S from './styles'

import iconArrow from '/assets/images/right-arrow.png'

type SidebarProps = {
    isOpen: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
    options: string[]
}

export const Sidebar = ({ isOpen, setState, options }: SidebarProps) => {


    return (
        <S.Sidebar active={isOpen} >
            <img src={iconArrow} alt="Fechar menu" onClick={() => setState(!isOpen)} />

            <div className="menuLinks">
                <ul>
                    {
                        options.map((option, index) => (
                            <li key={index}>
                                <a href='#'>{option}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </S.Sidebar>
    )
}