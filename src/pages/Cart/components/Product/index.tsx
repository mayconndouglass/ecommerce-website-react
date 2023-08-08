import { useState, useEffect } from 'react'
import { useCart } from '../../../../contexts/CartContext'

import { CartProductDataType } from '../../../../@types/cartproduct-data-type'

import * as S from './styles'

export const Product = ({ ...props }: CartProductDataType) => {
    const { dispatch } = useCart()
    const [quantity, setQuantity] = useState(props.quantity)

    const handleDecrease = () => {
        if (quantity! > 1) {
            setQuantity(quantity! - 1)
        }
    }

    const handleIncrease = () => {
        setQuantity(quantity! + 1)
    }

    useEffect(() => {
        dispatch({
            type: 'UPDATE_CART',
            payload: {
                id: props.id,
                quantity
            }
        })
    }, [quantity])

    return (
        <S.Container>
            <div className='info'>
                <img src={props.img} alt={props.title} title={props.title} />
                <div>
                    <p className='name'>{props.title}</p>
                    <p className='description'>{props.description}</p>
                    <p className='price'>{props.price}</p>
                    <S.containerQuantityMobile>
                        <div>
                            <button onClick={handleDecrease}>-</button>
                            <input type="text" value={quantity} />
                            <button onClick={handleIncrease}>+</button>
                        </div>
                    </S.containerQuantityMobile>
                </div>
            </div>

            {/* <div className='container-quantity'> */}
            <S.containerQuantity>
                <div>
                    <button onClick={handleDecrease}>-</button>
                    <input type="text" value={quantity} />
                    <button onClick={handleIncrease}>+</button>
                </div>
            </S.containerQuantity>
            {/* </div> */}

            <div className='total'>
                {/* temp */}
                <p>{props.price}</p>
            </div>

        </S.Container>
    )
}
