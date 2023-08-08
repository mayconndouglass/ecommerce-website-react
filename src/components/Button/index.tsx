import { ReactNode } from 'react'
import * as S from './styles'

type ChildrenPropsType = {
    children: string | ReactNode
}

export const Button = ({ children }: ChildrenPropsType) => {
    return (
        <S.Button>
            {children}
        </S.Button>
    )
}
