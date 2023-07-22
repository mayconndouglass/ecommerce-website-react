import * as S from './style'

type CardProps = {
    img: string
    title: string
    price: string
}

export const CardProduct = ({ img, title, price }: CardProps) => {
    return (
        <S.Container>
            <img src={img} alt={title} />
            <h4>{title}</h4>
            <span>{price}</span>
        </S.Container>
    )
}
