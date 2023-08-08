import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'

type ChildrenPropsType = {
    children: string | ReactNode
}

export const Button = ({ children }: ChildrenPropsType) => {
    return (
        <Link to='/products'>
            <S.Button>
                {children}
            </S.Button>
        </Link>
    )
}
