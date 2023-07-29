import * as S from './styles'

type SelectProps = {
    name: string
}

export const Select = ({ name }: SelectProps) => {
    const nameWithHyphen = name.replace(' ', '-').toLocaleLowerCase()

    return (
        <S.Container>
            <S.Label htmlFor={nameWithHyphen}>{name}</S.Label>
            <S.Select name={nameWithHyphen} id={nameWithHyphen}></S.Select>
        </S.Container>
    )
}
