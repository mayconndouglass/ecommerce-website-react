import * as S from './styles'

import { Product } from '../Product'

import { fakeProducts } from './fakeProducts'

export const Products = () => {
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
                    fakeProducts.map((product, index) => (
                        <Product key={index} {...product} />
                    ))
                }
                <S.Divider />
                <S.DividerMobile />
            </article>
        </S.Container>
    )
}