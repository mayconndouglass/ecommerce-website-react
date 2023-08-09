import { useCart } from '../../../../contexts/CartContext'

import * as S from './styles'

import { Product } from '../Product'

export const Products = () => {
    const { state } = useCart()

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
                <div className='totalContainer' >
                    <div>
                        <p>Taxes and shipping are calculated at checkout</p>
                        <p>
                            <span className='subtotal'>Subtotal</span>
                            <span className='price'>£210</span>
                        </p>
                    </div>
                    <button>Go to checkout</button>
                </div>
            </article>
        </S.Container>
    )
}