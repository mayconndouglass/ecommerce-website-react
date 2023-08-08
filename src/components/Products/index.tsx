import { Button } from '../Button'
import { CardProduct } from './CardProduct'

import { ProductDataType } from '../../@types/product-data-type'

import * as S from './styles'

import { Link } from 'react-router-dom'

type ProductsProps = {
    data: ProductDataType[]
}

export const Products = ({ data }: ProductsProps) => {
    return (
        <S.Container>
            <div className="cards-container">
                {data.map(product => (
                    <CardProduct key={product.id} {...product} />
                ))}
            </div>
            <Button>
                <Link to='/products'>
                    View collection
                </Link>
            </Button>
        </S.Container>
    )
}
