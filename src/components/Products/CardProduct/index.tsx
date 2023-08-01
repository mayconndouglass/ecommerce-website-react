import * as S from './style'

import { Link } from 'react-router-dom'

import { ProductDataType } from '../../../@types/product-data-type'

export const CardProduct = ({ id, img, title, price }: ProductDataType) => {
    return (
        <S.Container>
            <Link to={`/product/${id}`}>
                <img src={img} alt={title} />
            </Link>

            <Link to={`/product/${id}`}>
                <h4>{title}</h4>
            </Link>

            <span>{price}</span>
        </S.Container>
    )
}
