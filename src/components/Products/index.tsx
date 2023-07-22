import { CardProduct } from './CardProduct'
import { productData } from './data'
import { Button } from '../Button'

import * as S from './styles'

export const Products = () => {
    return (
        <S.Container>
            <div className="cards-container">
                {productData.map(product => (
                    <CardProduct key={product.price} {...product} />
                ))}
            </div>
            <Button>
                View collection
            </Button>
        </S.Container>
    )
}
