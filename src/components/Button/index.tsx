import * as S from './styles'

type ChildrenPropsType = {
    children: string
}

export const Button = ({ children }: ChildrenPropsType) => {
    return (
        <S.Button>
            {children}
        </S.Button>
    )
}
