import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

import * as S from './styles'

import { Product } from '../Product'

// import { fakeProducts } from './fakeProducts'

export const Products = () => {
    const { state } = useContext(CartContext)

    return (
        <S.Container>
            <article className='container-products'>
                <h1>Your shopping cart</h1>
                <div className='titles'>
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
                <S.Divider />
                {
                    state.addedProducts.map((product) => (
                        <Product key={product.id} {...product} />
                    ))
                }
                <S.Divider />
                <S.DividerMobile />
            </article>
        </S.Container>
    )
}