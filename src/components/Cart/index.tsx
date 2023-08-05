import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import * as S from './styles'
import iconCart from '/public/assets/images/icon-cart.svg'

export const Cart = () => {
    const { state } = useContext(CartContext)

    return (
        <S.Container>
            <Link to={'/cart'}><img src={iconCart} alt="Icon Card" /></Link>
            {state.cartQuantity > 0 && (
                <span>{state.cartQuantity}</span>
            )}
        </S.Container>
    )
}
